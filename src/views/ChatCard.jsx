import { SectionCard } from './SectionCard'

export function ChatCard({ messages }) {
  const photos = [
    '/photos/primera-conversacion/WhatsApp Image 2026-08-02 at 19.02.13.jpeg',
    '/photos/primera-conversacion/WhatsApp Image 2026-08-02 at 19.02.14.jpeg'
  ];

  return (
    <SectionCard
      id="primera-conversacion"
      number="01"
      icon="💬"
      title="Nuestra primera conversación"
      subtitle="El inicio de todo"
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
        <div className="chat-photos" style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          gap: '0.8rem',
          width: '100%'
        }}>
          {photos.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Captura ${i + 1}`}
              style={{
                maxWidth: '45%',
                height: 'auto',
                borderRadius: '8px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
                display: 'block',
                objectFit: 'contain'
              }}
            />
          ))}
        </div>

        <div className="chat" style={{ width: '100%', marginTop: '0.5rem' }}>
          {messages.map((m) => (
            <div key={m.id} className={`chat__bubble chat__bubble--${m.from}`}>
              {m.text}
              <span className="chat__time">{m.time}</span>
            </div>
          ))}
        </div>
      </div>
      <p className="card__footer-note">Y así empezó todo…</p>
    </SectionCard>
  )
}
