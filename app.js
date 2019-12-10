var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");
var wfs = require("./wfs");

var indexRouter = require("./routes/index");
var schemesRouter = require("./routes/schemes");

var app = express();

var schemes = require("./db/schemes")();
app.use(function(req, res, next) {
  req.db = {
    schemes
  };
  next();
});

app.use(logger("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(wfs("http://192.168.0.130:14002/geoserver/real_data/ows?"));

app.use("/", indexRouter);
app.use("/schemes", schemesRouter);

module.exports = app;
