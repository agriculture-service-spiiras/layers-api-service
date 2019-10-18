var express = require("express");
var router = express.Router();

var store = require("./store")();

// Get layers list
router.get("/", function(req, res, next) {
  const resultOperation = store.getLayers();
  if (resultOperation) {
    res.json(resultOperation);
  } else {
    res.sendStatus(404);
  }
});

// Get any layer by id
router.get("/:id", function(req, res, next) {
  const resultOperation = store.getLayer(req.params.id);
  if (resultOperation) {
    res.json(resultOperation);
  } else {
    res.sendStatus(404);
  }
});

module.exports = router;
