var Kinto = require('kinto');

const DEFAULT_SERVER = 'https://kinto.dev.mozaws.net/v1';

class Store {
  constructor(dataset) {
    this.dataset = dataset;
    this.collection = null;
    this.configure();
  }

  configure(connection) {
    try {
      const kinto = new Kinto({
        remote: DEFAULT_SERVER
      });
      this.collection = kinto.collection(this.dataset);
    } catch (e) {
      this.onError(e);
    }
  }

  get(id) {
    return this.collection.get(id);
  }

  list(params) {
    return this.collection.list(params);
  }

  update(record) {
    return this.collection.update(record);
  }

  create(record) {
    return this.collection.create(record);
  }

  delete(record) {
    return this.collection.delete(record.id);
  }

  sync() {
    try {
      this.collection.sync({strategy: Kinto.syncStrategy.SERVER_WINS});
    } catch (e) {
      this.onError(e);
    }
  }

  onError(e) {
    console.error(e);
  }
}

module.exports = Store;
