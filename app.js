var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");
var wfs = require("./wfs");

var indexRouter = require("./routes/index");
var geodataRouter = require("./routes/geodata");

var config = require("./config.js");

var app = express();

app.use(logger("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(wfs(config.dataEndpoint));

app.use("/", indexRouter);
app.use("/geodata", geodataRouter);

module.exports = app;
