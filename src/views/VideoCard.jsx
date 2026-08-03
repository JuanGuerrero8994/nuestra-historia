import { SectionCard } from './SectionCard'

export function VideoCard({ data }) {
  return (
    <SectionCard
      id="mensaje"
      number="08"
      icon="❤️"
      title="Un mensaje para vos"
      subtitle="Con todo mi amor"
      full
    >
      <div className="message-container" style={{
        padding: '2rem',
        background: 'rgba(255, 255, 255, 0.03)',
        borderRadius: '15px',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        textAlign: 'center',
        maxWidth: '800px',
        margin: '0 auto'
      }}>
        <h3 style={{
          fontFamily: 'var(--font-script)',
          fontSize: '2rem',
          color: 'var(--pink)',
          marginBottom: '1.5rem'
        }}>
          {data.title || 'Mi amor, Melanie ❤️'}
        </h3>

        <div style={{
          fontSize: '1.1rem',
          lineHeight: '1.8',
          color: 'rgba(255, 255, 255, 0.9)',
          whiteSpace: 'pre-line',
          marginBottom: '2rem',
          textAlign: 'left'
        }}>
          {data.body}
        </div>

        <p style={{
          fontFamily: 'var(--font-script)',
          fontSize: '1.8rem',
          color: '#fff',
          marginTop: '2rem'
        }}>
          {data.footer || 'Con todo mi amor, Juanci 💖'}
        </p>
      </div>

      {data.video && (
        <div className="media-placeholder" style={{ marginTop: '2rem' }}>
          <video src={data.video} controls style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
      )}
    </SectionCard>
  )
}
