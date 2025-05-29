import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";

const REDIRECT_URL = import.meta.env.VITE_API_REDIRECT_URL;
const API_URL = import.meta.env.VITE_API_BASE_URL;
const AUTH_TOKEN = localStorage.getItem("token");

const Redirect = () => {
  const [searchParams] = useSearchParams();
  const keyValue = searchParams.get("key");
  const [displayText, setDisplayText] = useState("Redirecting...");
  const [textColor, setTextColor] = useState("black");
  
  useEffect(() => {
    if (keyValue) {
      setDisplayText("WQSC এর বিস্তারিত রিপোর্ট ডাউনলোড হচ্ছে...");
      setTextColor("green");
      handleQwscDetailsClick(keyValue);
    } else {
      handleRedirect(
        "URL Format টি সঠিক হয়নি । খাদ্য ব্যবস্থাপনা পর্যবেক্ষণ সিস্টেমে ফিরিয়ে নেওয়া হচ্ছে",
        "red"
      );
    }
    // Only run this effect when keyValue changes
  }, [keyValue]);

  // TODO: Remove auth layer once backend handles unauthorized requests
  const handleQwscDetailsClick = async (record) => {
    const endpointURL = `${API_URL}bank-module/report/wqsc-details`;

    try {
      const response = await axios.get(endpointURL, {
        headers: { Authorization: `${AUTH_TOKEN}` },
        responseType: "blob",
        params: { id: record },
      });

      if (response.status == 200) {
        const blob = new Blob([response.data], { type: "application/pdf" });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `${record}_wqsc_details.pdf`;
        document.body.appendChild(a);
        a.click();
        a.remove();

        setDisplayText(
          "WQSC এর বিস্তারিত রিপোর্ট ডাউনলোড সফলভাবে সম্পন্ন হয়েছে।"
        );
        setTextColor("green");
        redirectAfterDelay(2000);
      } else {
        setDisplayText(
          "WQSC এর বিস্তারিত রিপোর্ট ডাউনলোড এরর হয়েছে। আবার চেষ্টা করুন।"
        );
        setTextColor("red");
        redirectAfterDelay(3000);
      }
    } catch (error) {
      setDisplayText(
        "WQSC এর বিস্তারিত রিপোর্ট ডাউনলোড এরর হয়েছে। " + error.message
      );
      setTextColor("red");
      redirectAfterDelay(3000);
    }
  };

  const redirectAfterDelay = (delay = 2000) => {
    setTimeout(() => {
      window.location.href = REDIRECT_URL;
    }, delay);
  };

  const handleRedirect = (message, color) => {
    setDisplayText(message);
    setTextColor(color);
    redirectAfterDelay(2000);
  };

  const loadingStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  };

  return (
    <div style={loadingStyle}>
      <div style={{ color: textColor, fontWeight: "bold", fontSize: "20px" }}>
        {displayText}
      </div>
    </div>
  );
};

export default Redirect;
