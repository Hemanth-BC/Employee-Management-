const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const authSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "username field is required"],
    },
    email: {
      type: String,
      required: true,
      unique: [true, "email field is required"],
    },
    password: {
      type: String,
      required: [true, "password is required"],
      minLength: [8, "Minimum length of characters must be 8"],
    },
  },
  {
    timestamps: true,
  }
);

authSchema.pre("save", async function (next) {
  let salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

authSchema.methods.verifyPassword = async function (pwd, pwdDB) {
  return await bcrypt.compare(pwd, pwdDB);
};

const User = mongoose.model("auth", authSchema);
module.exports = User;
