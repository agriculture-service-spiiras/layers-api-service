var WfsClient = require("wfs-client");
var request = require("request-promise");
var xml2js = require("xml2js");

module.exports = function(endpoint) {
  const client = new WfsClient(endpoint);
  return function(req, res, next) {
    req.wfs = {
      getLayersList: async function() {
        try {
          const capabilities = await client.capabilities();
          return capabilities.featureTypes.map(function(layer) {
            return layer.name;
          });
        } catch (error) {
          return null;
        }
      }
    };
    next();
  };
};
