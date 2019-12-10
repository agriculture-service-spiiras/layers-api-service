var express = require("express");
var request = require("request");

var router = express.Router();

var store = require("../store")();

// Get layers list
router.get("/", async function(req, res, next) {
  const layers = await req.wfs.getLayersList();
  if (layers) {
    res.send({ layers });
  } else {
    res.sendStatus(404);
  }
});

// Get any layer by id
router.get("/:id", function(req, res, next) {
  const { id } = req.params;
  const resultOperation = store.getLayer(id);
  if (resultOperation) {
    res.send(resultOperation);
  } else {
    res.sendStatus(404);
  }
});

module.exports = router;
