const jwt = require("jsonwebtoken");
const User = require("../models/userSchema.js");

async function auth(req, res, next) {
  try {
    let token;
    if (req.headers.authorization?.startsWith("Bearer")) {
      token = req.headers.authorization.split(" ")[1];
    }
    const decodedToken = jwt.verify(token, "Topsecret");
    const user = await User.findById(decodedToken.id);
    req.user = user?._id;
    next();
  } catch (error) {
    res.status(401).json({
      message: "Please login/register",
    });
  }
}

module.exports = { auth };
