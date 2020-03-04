var express = require("express");

var router = express.Router();

router.get("/status", function(req, res, next) {
  res.send({
    service: "layers-geodata-service",
    status: "working"
  });
});

module.exports = router;
