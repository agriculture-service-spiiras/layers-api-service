var express = require("express");
var router = express.Router();

// Get layers list
router.get("/", function(req, res, next) {
  const resultOperation = req.store.getLayers();
  if (resultOperation) {
    res.json(resultOperation);
  } else {
    res.sendStatus(404);
  }
});

// Get any layer by id
router.get("/:id", function(req, res, next) {
  const resultOperation = req.store.getLayer(req.params.id);
  if (resultOperation) {
    res.json(resultOperation);
  } else {
    res.sendStatus(404);
  }
});

// Create layer with gettin data
router.post("/", function(req, res, next) {
  const resultOperation = req.store.updateLayer(req.body);
  if (resultOperation) {
    res.sendStatus(200);
  } else {
    res.sendStatus(400);
  }
});

// Update any layer by getting id and data
router.put("/:id", function(req, res, next) {
  const resultOperation = req.store.createLayer(req.params.id, req.body);
  if (resultOperation) {
    res.sendStatus(200);
  } else {
    res.sendStatus(400);
  }
});

module.exports = router;
