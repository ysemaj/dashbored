// this section contains the node.js requires
const createError = require("http-errors");
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

// this section deals with routing of other .js files
const indexRouter = require("./routes/index");
const legalRouter = require("./routes/legal");
const aws = require("./routes/aws");
const cookie = require("./routes/cookie");
const mongo = require("./routes/mongo");

// deals with the express server initialization
var app = express();

// npm includes
app.use(logger("dev"));
app.use(helmet());
app.use(cors());

// view engine setup
app.set("views", path.join(__dirname, "views/pages"));
app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/legal", legalRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
