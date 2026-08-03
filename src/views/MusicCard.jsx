import { SectionCard } from './SectionCard'

export function MusicCard({ song }) {
  return (
    <SectionCard
      id="musica"
      number="06"
      icon="🎵"
      title="Nuestra playlist"
      subtitle="Nuestras canciones favoritas de YouTube"
      full
    >
      <div className="youtube-playlist" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
        gap: '1.5rem',
        marginTop: '1.5rem'
      }}>
        {song.playlist.map((item) => (
          <div key={item.id} className="youtube-item" style={{
            borderRadius: '12px',
            overflow: 'hidden',
            background: '#000',
            aspectRatio: '16/9'
          }}>
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${item.id}`}
              title={item.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <div style={{ padding: '8px', background: 'rgba(0,0,0,0.8)', fontSize: '0.8rem' }}>
              <strong>{item.title}</strong> - {item.artist}
            </div>
          </div>
        ))}
      </div>
      <p className="music-player__quote" style={{ marginTop: '1.5rem', textAlign: 'center' }}>"{song.quote}"</p>
    </SectionCard>
  )
}
