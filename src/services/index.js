const objectsGeodata = require('./objects-geodata/objects-geodata.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function(app) {
  app.configure(objectsGeodata);
};
