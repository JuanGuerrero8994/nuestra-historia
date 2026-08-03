import { SectionCard } from './SectionCard'

export function FirstDateCard({ data }) {
  // Las 3 fotos que pidió el usuario para la primera cita
  const photos = [
    '/photos/primera-cita/cafeRaiz.jpg',
    '/photos/primera-cita/WhatsApp Image 2026-08-02 at 20.03.04.jpeg',
    '/photos/primera-cita/WhatsApp Image 2026-08-02 at 20.03.05.jpeg'
  ];

  return (
    <SectionCard
      id="primera-cita"
      number="02"
      icon="❤️"
      title="Nuestra primera cita"
      subtitle="Un día que jamás voy a olvidar en Café Raíz"
    >
      <div className="first-date-gallery" style={{
        display: 'grid',
        gridTemplateColumns: '1fr',
        gap: '0.8rem',
        marginBottom: '1rem'
      }}>
        {photos.map((src, index) => (
          <div key={index} className="media-placeholder" style={{ margin: 0, aspectRatio: '4/3' }}>
            <img src={src} alt={`Foto cita ${index + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        ))}
      </div>

      <div className="card__meta">
        <span>📅 10 de Abril, 2026</span>
        <span>📍 Café Raíz</span>
      </div>
      <p className="card__text">{data.caption}</p>
    </SectionCard>
  )
}
