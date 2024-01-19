import isEmpty from "./isEmpty";

function isValidEmail(email) {
    // Regular expression for validating email addresses
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}


function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Use 'auto' for instant scrolling without animation
    });
  }

  function truncateString(str, maxLength = 22) {
    if (isEmpty(str)) return "";
    if (str.length <= maxLength) {
        return str;
    } else {
        return str.slice(0, maxLength) + '...';
    }
}


export default {
    isValidEmail,
    scrollToTop,
    truncateString,
}