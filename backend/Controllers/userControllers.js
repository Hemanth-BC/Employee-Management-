const User = require("../models/userSchema");
const { genToken } = require("../utils/genToken.js");

const register = async (req, res, next) => {
  const { username, email, password } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        message: "User already exists,Please login",
      });
    }
    const newUser = await User.create({ username, email, password });
    let token = await genToken(newUser._id);
    res.status(201).json({
      data: { name: newUser.username, email: newUser.email },
      token,
      status: "Registered user successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const login = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (
      !existingUser ||
      !(await existingUser.verifyPassword(password, existingUser.password))
    ) {
      return res.status(400).json({
        message: "User doesn't exist or password is incorrect",
      });
    }
    let token = await genToken(existingUser._id);
    res.status(201).json({
      data: { name: existingUser.username, email: existingUser.email },
      token,
      status: "User logged in successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  register,
  login,
};
