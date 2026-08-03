export class ChatMessage {
  constructor({ id, from, text, time }) {
    this.id = id
    this.from = from // 'me' | 'her'
    this.text = text
    this.time = time
  }
}
