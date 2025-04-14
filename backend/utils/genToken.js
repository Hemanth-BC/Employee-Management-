const jwt = require("jsonwebtoken");

async function genToken(id) {
  return jwt.sign({ id: id }, "Topsecret");
}

module.exports = { genToken };
