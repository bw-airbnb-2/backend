const jwt = require("jsonwebtoken");
const secrets = require("../config/secrets.js");

module.exports = (req, res, next) => {
  // add code here to verify users are logged in
  const [authType, token] = req.headers.authorization.split(" "); //TODO add the header to the request call using Bearer followed by a space and the token
  console.log("Token: ", token);

  if (token) {
    jwt.verify(token, secrets.jwtSecret, (err, decodedToken) => {
      if (err) {
        res.status(401).json({you: "cant touch this (invalid token"})
      } else {
        req.decodedJwt = decodedToken;
        next();
      }
    });

  } else {
    res.status(401).json({you: "have no power (no token included)"});
  }
};
