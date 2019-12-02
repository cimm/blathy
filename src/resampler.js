import moment from 'moment'

export default class Resampler {
  // sourceData = [[new Date(), integer],...] sorted by date
  constructor(sourceData) {
    moment.locale('en-GB')
    this.sourceData = sourceData
  }

  // Resamples the irregular sourceData array to
  // a regular one with on value per month
  toMonths() {
    const resampled = []
    this.sourceData.map((tuple, i) => {
      const nextTuple = this.sourceData[i+1]
      if (nextTuple == undefined) {
        return
      }

      const daysBetween = moment(nextTuple[0]).diff(tuple[0], 'day')
      if (daysBetween <= 0) {
        throw '[Bláthy] Current and next data point are on the same day!'
      }

      const avgPerDay = nextTuple[1] / daysBetween

      let cursor = moment(tuple[0])
      while (cursor.isBefore(nextTuple[0], 'month')) {
        cursor.add(1, 'month')
        const newTuple = [
          cursor.startOf('month').toDate(),
          avgPerDay * cursor.daysInMonth()
        ]
        resampled.push(newTuple)
      }
    })
    return resampled
  }
}
