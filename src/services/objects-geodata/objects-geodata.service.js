// Initializes the `objects-geodata` service on path `/objects-geodata`
const { ObjectsGeodata } = require('./objects-geodata.class');
const hooks = require('./objects-geodata.hooks');

module.exports = function(app) {
  const options = {
    apiURL: app.get('geoserver'),
    paginate: app.get('paginate'),
  };

  // Initialize our service with any options it requires
  app.use('/objects-geodata', new ObjectsGeodata(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('objects-geodata');

  service.hooks(hooks);
};
