var registro = require("morgan");
const path = require("path");
const fs = require("fs");

const registroDev = registro("dev");

const registroArchivo = registro("combined", {
  stream: fs.createWriteStream(path.join(__dirname, "../access.log"), {
    flags: "a",
  }),
});


module.exports =  {registroDev, registroArchivo } 