const base64UrlDecode = (str) => {
  try {
    str = str.replace(/-/g, "+").replace(/_/g, "/");
    while (str.length % 4) {
      str += "=";
    }
    return atob(str);
  } catch (error) {
    console.error("Error decoding base64url string", error);
    return null;
  }
};

export const getLocationIdFromToken = (token) => {
  try {
    const payload = token.split(".")[1];
    const decodedPayload = base64UrlDecode(payload);

    if (decodedPayload) {
      const parsedPayload = JSON.parse(decodedPayload);
      return parsedPayload.locationId;
    }
    return null;
  } catch (error) {
    console.error("Error parsing token", error);
    return null;
  }
};

export const convertToBengaliNumber = (number) => {
  const bengaliDigits = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];

  const absoluteNumber = Math.abs(number).toString();
  const bengaliNumber = absoluteNumber
    .split("")
    .map((digit) => bengaliDigits[digit])
    .join("");

  return bengaliNumber;
};

export const translateStatusToBengali = (status) => {
  switch (status) {
    case "CONFIRMED":
      return "অযাচাইকৃত";
    case "VERIFIED":
      return "যাচাইকৃত";
    case "DENIED":
      return "বাতিল";
    default:
      return "অজানা";
  }
};

export const getStatusButtonStyle = (status) => {
  switch (status) {
    case "VERIFIED":
      return {
        backgroundColor: "rgba(86, 170, 94, 0.1)",
        color: "rgba(86, 170, 94, 1)",
        borderRadius: "24px",
        border: "none",
      };
    case "CONFIRMED":
      return {
        backgroundColor: "rgb(228 236 243)",
        color: "#6262d2",
        borderRadius: "24px",
        border: "none",
      };
    case "DENIED":
      return {
        backgroundColor: "rgba(240, 68, 56, 0.1)",
        color: "rgba(240, 68, 56, 0.85)",
        borderRadius: "24px",
        border: "none",
      };
    default:
      return {
        backgroundColor: "#ff4d4f",
        color: "#fff",
        borderRadius: "24px",
        border: "none",
      };
  }
};

export const convertToBanglaDateTime = (dateString) => {
  const date = new Date(dateString);

  const banglaMonths = [
    "জানুয়ারি",
    "ফেব্রুয়ারি",
    "মার্চ",
    "এপ্রিল",
    "মে",
    "জুন",
    "জুলাই",
    "আগস্ট",
    "সেপ্টেম্বর",
    "অক্টোবর",
    "নভেম্বর",
    "ডিসেম্বর",
  ];

  const banglaNumbers = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];

  const toBanglaDigits = (num) => {
    return String(num)
      .split("")
      .map((digit) => banglaNumbers[parseInt(digit)])
      .join("");
  };

  const day = toBanglaDigits(date.getDate());
  const month = banglaMonths[date.getMonth()];
  const year = toBanglaDigits(date.getFullYear());
  const hours = toBanglaDigits(date.getHours());
  const minutes = toBanglaDigits(date.getMinutes());
  return `${day} ${month} ${year}, ${hours}:${minutes}`;
};


export const getStatusTextStyle = (status) => {
  switch (status) {
    case "VERIFIED":
      return {
        backgroundColor: "#56AA5E1A",
        color: "#56AA5E",
        borderRadius: "24px",
        fontWeight: "400",
        lineHeight: "18px",
        fontFamily: "Kalpurush",
        border: "none",
        fontSize: "12px",
        width: "65px", 
        height: "22px",
      };
    case "CONFIRMED":
      return {
        backgroundColor: "#E7CD4733",
        color: "#A98E00",
        borderRadius: "24px",
        fontWeight: "400",
        lineHeight: "18px",
        fontFamily: "Kalpurush",
        border: "none",
        fontSize: "12px",
        width: "65px", 
        height: "22px",
      };
    case "DENIED":
      return {
        backgroundColor: "#F044381A",
        color: "#F04438D9",
        borderRadius: "24px",
        fontWeight: "400",
        lineHeight: "18px",
        fontFamily: "Kalpurush",
        border: "none",
        fontSize: "12px",
        width: "65px", 
        height: "22px",
      };
    default:
      return {
        backgroundColor: "#ff4d4f",
        color: "#fff",
        borderRadius: "24px",
        fontWeight: "400",
        lineHeight: "18px",
        fontFamily: "Kalpurush",
        border: "none",
        fontSize: "12px",
        width: "65px", 
        height: "22px",
      };
  }
};