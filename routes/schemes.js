var express = require("express");
var router = express.Router();

// Send layers metadata list

// router.get("/", function(req, res, next) {
//   const result = false;
//   if (result) {
//     res.send(200);
//   } else {
//     res.send(400);
//   }
// });

// router.post("/", function(req, res, next) {
//   const layer = req.body;
//   const result = false;
//   if (result) {
//     res.send(200);
//   } else {
//     res.send(400);
//   }
// });

router.get("/:id", function(req, res, next) {
  const id = req.params.id;
  const layerScheme = req.db.schemes.getLayerScheme(id);
  if (layerScheme) {
    res.send(layerScheme);
  } else {
    res.sendStatus(404);
  }
});

// router.put("/:id", function(req, res, next) {
//   const id = req.params.id;
//   const layer = req.body;
//   const result = false;
//   if (result) {
//     res.send(200);
//   } else {
//     res.send(400);
//   }
// });

// router.delete("/:id", function(req, res, next) {
//   const id = req.params.id;
//   const result = false;
//   if (result) {
//     res.send(200);
//   } else {
//     res.send(400);
//   }
// });

module.exports = router;
