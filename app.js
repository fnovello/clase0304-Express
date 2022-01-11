require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.APP_PORT;

const path = require("path");
const postRouter = require("./routes/post-routes");
const userRouter = require("./routes/user-routes");
const authRouter = require("./routes/auth-routes");

const errorAppMiddleware = require("./middleware/errorAppMiddleware");
const { notFoundMiddleware } = require("./middleware/notFoundMiddleware");
// const authMiddleware =  require("./middleware/authMiddleware");
const { authRoutesMiddleware } =  require("./middleware/authMiddleware");
const {
  registroDev,
  registroArchivo,
} = require("./middleware/registroMiddleware");

const { appTimestampMiddleware } = require("./middleware/appMiddleware");

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use([registroDev, registroArchivo]);

app.use(appTimestampMiddleware);

app.use(authRouter);
app.use(authRoutesMiddleware,postRouter);
app.use(authRoutesMiddleware,userRouter);

app.set("views", "views");
app.set("view engine", "ejs");

app.get("/index", (req, res) => {
  res.render("index", {
    titulo: "Index",
    nombres: ["franco", "matias", "jose"],
  });
});

app.get("/download/:param", (req, res) => {
  res.download(__dirname + "/public/123.pdf");
});

app.all("/all", (req, res) => {
  res.status(200).json({ message: "hola soy todos los verbos http " });
});

app.all("*", notFoundMiddleware);

app.use(errorAppMiddleware);

app.listen(port, "localhost", () => {
  console.log("app corriendo en el puerto " + port);
});
