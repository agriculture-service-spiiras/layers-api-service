const app = require('../../src/app');

describe("'objects-geodata' service", () => {
  it('registered the service', () => {
    const service = app.service('objects-geodata');
    expect(service).toBeTruthy();
  });
});
