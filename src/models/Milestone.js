export class Milestone {
  constructor({ id, date, title, icon, color }) {
    this.id = id
    this.date = new Date(date)
    this.title = title
    this.icon = icon ?? '💗'
    this.color = color ?? 'pink'
  }

  get formattedDate() {
    return this.date.toLocaleDateString('es-ES', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    })
  }
}
