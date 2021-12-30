var moment = require("moment");
const appTimestampMiddleware = function (req, res, next) {
  console.log(
    "--REQUEST ENTRANTE-- " +
      moment(new Date(), "DD-MM-YYYY").format("DD-MM-YYYY hh:mm:ss")
  );
  next();
};

module.exports = { appTimestampMiddleware };
