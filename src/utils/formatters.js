/**
 * Format dealer's name by capitalizing the first letter of each word.
 * @param {string} name - The dealer's name.
 * @return {string} - Formatted name.
 */
export const formatDealerName = (name) => {
    return name
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");
  };
  
  /**
   * Format the dealer's location by trimming whitespace.
   * @param {string} location - Dealer's location.
   * @return {string} - Trimmed location.
   */
  export const formatLocation = (location) => {
    return location.trim();
  };
  