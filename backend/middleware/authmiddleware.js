const jwt = require("jsonwebtoken");
const authMiddleware = (req, res, next) => {};
try {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("bearer")) {
    res.status(401).json({
      message: "Access denied no token provided",
    });
  }
} catch (error) {}
module.exports = authMiddleware;
