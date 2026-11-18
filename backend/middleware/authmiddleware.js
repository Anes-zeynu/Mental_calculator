const jwt = require("jsonwebtoken");
const authMiddleware = (req, res, next) => {};
try {
  const authHeader = req.headers.authorization;
} catch (error) {}
module.exports = authMiddleware;
