var express = require("express");
var request = require("request-promise");

var router = express.Router();

var { dataEndpoint } = require("../config");
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
router.get("/:id", async function(req, res, next) {
  const { id } = req.params;
  const { features: resultOperation } = await request(
    `${dataEndpoint}service=WFS&version=1.0.0&request=GetFeature&typeName=${id}&maxFeatures=50&outputFormat=application%2Fjson`
  ).json();
  // const resultOperation = store.getLayer(id);
  if (resultOperation) {
    res.send(resultOperation);
  } else {
    res.sendStatus(404);
  }
});

module.exports = router;
