export class Couple {
  constructor({ nameA, nameB, startDate }) {
    this.nameA = nameA
    this.nameB = nameB
    this.startDate = new Date(startDate)
  }

  elapsedSince(now = new Date()) {
    const diffMs = Math.max(0, now.getTime() - this.startDate.getTime())
    const totalSeconds = Math.floor(diffMs / 1000)
    const totalMinutes = Math.floor(totalSeconds / 60)
    const totalHours = Math.floor(totalMinutes / 60)
    let totalDays = Math.floor(totalHours / 24)

    const months = Math.floor(totalDays / 30)
    const days = totalDays % 30

    return {
      months,
      days,
      hours: totalHours % 24,
      minutes: totalMinutes % 60,
      seconds: totalSeconds % 60,
    }
  }
}
