const express = require("express");
const compression = require("compression");
const cors = require("cors");
const session = require("express-session");
const helmet = require("helmet");
const logger = require("morgan");

const adminRouter = require("./routes/auth.routes");
const userRouter = require("./routes/user.routes");
const app = express();
const port = 3000;
const corOptions = {
  origin: "http://localhost:4200",
  credentials: true,
};
const sessionOptions = {
  secret: "downrueng cat",
  resave: true,
  saveUninitialized: true,
  cookie: { maxAge: 7 * 24 * 60 * 60 * 1000 },
};

app.use(compression());
app.use(cors(corOptions));
app.use(session(sessionOptions));
app.use(helmet());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use("/api/auth/v1", adminRouter);
app.use("/api/user/v1", userRouter);

app.get("*.*", express.static("dist"));
app.all("*", (req, res) => {
  res.status(200).sendFile("/", { root: "dist" });
});

const server = app.listen(port, () => {
  console.log(`CORS-enabled web server listening on port ${port}`);
});

const sigs = ["SIGINT", "SIGTERM", "SIGQUIT"];
sigs.forEach((sig) => {
  process.on(sig, () => {
    server.close();
    process.exit();
  });
});
