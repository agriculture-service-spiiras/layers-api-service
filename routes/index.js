var express = require("express");
var router = express.Router();

// Get layers list
router.get("/", function(req, res, next) {
  res.send("Send layers list");
});

// Get any layer by id
router.get("/:id", function(req, res, next) {
  res.send("Send any layer by id");
});

router.post("/", function(req, res, next) {
  res.send("Send result of posting new layer");
});

router.put("/:id", function(req, res, next) {
  res.send("Set result of updating any layer by id");
});

module.exports = router;
