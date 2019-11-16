const oneDay = 24 * 60 * 60 * 1000

export default class Averager {
  // Remember monthIndex 1 in JS is February!

  constructor(readings) {
    this.readings = readings
  }

  avgForMonth(monthIndex) {
    let monthAverages = []
    const years = this._uniqYears()
    for(const year of years) {
      const monthAvg = this.avgForMonthInYear(year, monthIndex)
      if(monthAvg) {
        monthAverages.push(monthAvg)
      }
    }
    if(monthAverages.length > 0) {
      return monthAverages.reduce((a, b) => a + b) / monthAverages.length
    } else {
      return 0
    }
  }

  avgForMonthInYear(year, monthIndex) {
    const previous = this.previousReading(year, monthIndex)
    const next = this.nextReading(year, monthIndex)
    if(previous === undefined || next === undefined) {
      return
    }

    const diffDays = Math.round(Math.abs((next.readAt - previous.readAt) / oneDay))
    const perDay = (next.value - previous.value) / diffDays
    return perDay * new Date(year, monthIndex+1, 0).getDate()
  }

  previousReading(year, monthIndex) {
    const beginningOfMonth = new Date(year, monthIndex, 1)
    for(let i=0; i < this.readings.length; i++) {
      if(this.readings[i].readAt >= beginningOfMonth) {
        return this.readings[i-1]
      }
    }
  }

  nextReading(year, monthIndex) {
    const endOfMonth = new Date(year, monthIndex+1, 0)
    for(const r of this.readings) {
      if(r.readAt > endOfMonth) {
        return r
      }
    }
  }

  _uniqYears() {
    const allYears = this.readings.map(r => r.readAt.getFullYear())
    return [...new Set(allYears)]
  }
}
