const fs = require("fs");
const path = require("path");

const readWriteData = {

  path: path.resolve(__dirname, "../data", "posts.json"),

  getDataPromise: function () {
      return fs.readFile(this.path, { encoding: "utf-8" }, (err, data) => {
        if (err) console.log("err: ", err);
        return data; 
    });
  },

  getData: function () {
    return fs.readFileSync(this.path, { encoding: "utf-8" }, (err, data) => {
      if (err) console.log("err: ", err);
      return data;
    });
  },

  setData: function (data) {
    try {
      fs.writeFileSync(this.path, data);
      return true;
    } catch (error) {
      console.log("error: ", error);
      return false;
    }
  },
};

module.exports = readWriteData;