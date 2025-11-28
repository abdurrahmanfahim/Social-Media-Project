const jwt = require("jsonwebtoken");

exports.jwtTokenGenerator = (user, expiresIn) => {
  return jwt.sign(user, process.env.JWT_SECRET, {
    expiresIn: expiresIn,
  });
};
