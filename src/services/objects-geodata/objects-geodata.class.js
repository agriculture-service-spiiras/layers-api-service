const WfsClient = require('wfs-client');
const axios = require('axios');

/* eslint-disable no-unused-vars */
exports.ObjectsGeodata = class ObjectsGeodata {
  constructor(options) {
    this.options = options || {};

    const { apiURL } = this.options;
    this.wfsClient = new WfsClient(apiURL);
  }

  async find(params) {
    const capabilities = await this.wfsClient.capabilities();
    return Promise.all(capabilities.featureTypes.map(({ name: layerId }) => this.get(layerId)));
  }

  async get(id, params) {
    const { apiURL, paginate } = this.options;
    const { data: layerData } = await axios.get(
      `${apiURL}?service=WFS&version=1.0.0&request=GetFeature&typeName=${id}&maxFeatures=${paginate.max}&outputFormat=application/json`,
    );
    const objects = layerData.features || null;
    if (objects) {
      return {
        layerId: id,
        objects,
      };
    } else {
      return null;
    }
  }

  async create(data, params) {
    if (Array.isArray(data)) {
      return Promise.all(data.map(current => this.create(current, params)));
    }

    return data;
  }

  async update(id, data, params) {
    return data;
  }

  async patch(id, data, params) {
    return data;
  }

  async remove(id, params) {
    return { id };
  }
};
