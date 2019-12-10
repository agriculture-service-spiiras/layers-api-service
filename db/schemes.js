function createDataBase() {
  const db = [
    {
      id: "real_data:detect_info_2-line",
      name: "Plane tracks",
      childLayers: ["real_data:detect_info_2-point"],
      options: [],
      services: [
        {
          service: "editable",
          options: {
            draw: {
              polyline: {
                shapeOptions: {
                  color: "blue"
                },
                showLength: true
              },
              polygon: {
                shapeOptions: {
                  color: "blue"
                }
              },
              rectangle: false,
              circle: false,
              marker: false,
              circlemarker: false
            },
            edit: {
              edit: false
            }
          }
        },
        {
          service: "static",
          options: {}
        }
      ],
      objects: {
        shape: "polyline"
      }
    },
    {
      id: "real_data:detect_info_2-point",
      name: "Plane position",
      childLayers: [],
      options: [],
      services: [
        {
          service: "realtime",
          options: { delay: 500 }
        }
      ],
      objects: {
        shape: "point"
      }
    }
  ];
  return {
    getLayerScheme: function(id) {
      const foundScheme = db.find(function(scheme) {
        return scheme.id === id;
      });
      if (!foundScheme) {
        return false;
      }
      return Object.assign({}, foundScheme);
    }
    // createLayer: function(layer) {
    //   if (!layer) {
    //     return false;
    //   }
    //   db.push({
    //     name: layer.name,
    //     childLayers: layer.childLayers,
    //     objects: layer.objects
    //   });
    //   return db.length - 1;
    // },
    // updateLayer: function(id, layer) {
    //   if (!db[id]) {
    //     return false;
    //   }
    //   if (!layer) {
    //     return false;
    //   }
    //   db[id] = Object.assign({
    //     name: db[id].name,
    //     childLayers: layer.childLayers || db[id].childLayers,
    //     objects: layer.objects || db[id].objects
    //   });
    //   return id;
    // }
  };
}

module.exports = createDataBase;
