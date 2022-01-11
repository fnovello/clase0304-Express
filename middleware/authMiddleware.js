const jwt = require("jsonwebtoken");
const http = require("http-status-codes");
const authRoutesMiddleware = function (req, res, next) {
  const str_token = req.get("Authorization");

  if (typeof str_token != "undefined") {
    const token = str_token.split(" ")[1];
    console.log("token: ", token);

    if (token) {
      return jwt.verify(token, process.env.JWT_SECRET, (err, result) => {
        if (err) {
          return res.json({
            status: http.StatusCodes.UNAUTHORIZED,
            message: "UNAUTHORIZED MIDDLEWARE 1 ",
          });
        }
        next();
      });
    }
  }

  return res.json({
    status: http.StatusCodes.UNAUTHORIZED,
    message: "UNAUTHORIZED MIDDLEWARE 2 ",
  });
};

module.exports = { authRoutesMiddleware };
