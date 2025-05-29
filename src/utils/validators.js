/**
 * Validate an email address.
 * @param {string} email - The email address to validate.
 * @return {boolean} - True if valid, false otherwise.
 */
export const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  