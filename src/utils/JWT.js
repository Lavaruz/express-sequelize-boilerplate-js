const { sign } = require("jsonwebtoken");
require('dotenv').config()

const createToken = (user) => {
  const accessToken = sign(
    { id: user.id, role: user.role },
    process.env.ACCESS_TOKEN_SECRET,
    { expiresIn: "1d" }
  );
  return accessToken;
};

module.exports = {
  createToken,
};
