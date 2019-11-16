export default class Reading {
  constructor(utilityId) {
    this.utilityId = utilityId
    this.readAt = new Date()
  }

  // workaround for https://github.com/sveltejs/svelte/issues/3399
  get readAtAsString() {
    return this.readAt.toISOString().slice(0, 10) // format string as 2019-12-01
  }

  set readAtAsString(val) {
    this.readAt = new Date(val)
  }
}
