const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
  // Geting token from header
  const token = req.header("Authorization");

  // Check if not taken the token
  if (!token) {
    return res.status(401).json({ msg: "No token, authorization denied" });
  }

  // doing verify
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({ msg: "Token is not valid" });
  }
};
