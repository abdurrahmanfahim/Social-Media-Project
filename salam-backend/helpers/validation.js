const User = require("../models/userModel");
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
exports.validateEmail = (email) => {
  return String(email).toLowerCase().match(emailRegex);
};

exports.validateLength = (text, min, max) => {
  if (text.length < min || text.length > max) {
    return false;
  } else {
    return true;
  }
};

exports.validateUsername = async (username) => {
  let isTrue = false

  do {
    let user = await User.findOne({ username })
    if (user) {
      username += Math.floor(999 * Math.random())
      isTrue = true
    } else {
      isTrue = false
      return username
    }
  } while (isTrue);
}







