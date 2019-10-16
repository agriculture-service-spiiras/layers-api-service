function createDataBase() {
  const store = [
    {
      features: [
        {
          type: "Feature",
          geometry: { type: "Point", coordinates: [102.0, 0.5] },
          properties: { id: 1 }
        },
        {
          type: "Feature",
          geometry: {
            type: "LineString",
            coordinates: [
              [102.0, 0.0],
              [103.0, 1.0],
              [104.0, 0.0],
              [105.0, 1.0]
            ]
          },
          properties: { id: 2 }
        }
      ]
    },
    {
      features: [
        {
          type: "Feature",
          geometry: {
            type: "Polygon",
            coordinates: [
              [
                [100.0, 0.0],
                [101.0, 0.0],
                [101.0, 1.0],
                [100.0, 1.0],
                [100.0, 0.0]
              ]
            ]
          },
          properties: {
            id: 3
          }
        }
      ]
    }
  ];

  return {
    getLayers: function() {
      return store.map(function(layer, index) {
        return index;
      });
    },
    getLayer: function(id) {
      if (!store[id]) {
        return false;
      }
      return Object.assign(
        {
          id: id
        },
        store[id]
      );
    },
    createLayer: function(id) {
      return false;
    },
    updateLayer: function(id, layer) {
      return false;
    }
  };
}

module.exports = createDataBase;
