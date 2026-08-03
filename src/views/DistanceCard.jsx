import { useDistanceViewModel } from '../viewmodels/useDistanceViewModel'
import { SectionCard } from './SectionCard'

export function DistanceCard({ locationsData }) {
  const { me, her, km } = useDistanceViewModel(locationsData)

  return (
    <SectionCard
      id="distancia"
      number="05"
      icon="🌍"
      title="Aunque estemos lejos…"
      subtitle="La distancia no significa nada para nosotros"
      full
    >
      <div className="distance-scene" style={{ height: '300px' }}>
        <svg viewBox="0 0 320 200" preserveAspectRatio="xMidYMid meet" aria-hidden="true" style={{ width: '100%', height: '100%' }}>
          <rect width="320" height="200" fill="none" />
          <path
            d="M40 150 C 110 40, 210 40, 280 60"
            stroke="#ec5b95"
            strokeWidth="2"
            strokeDasharray="5 6"
            fill="none"
          />
          <circle cx="40" cy="150" r="6" fill="#4fb6e6" />
          <circle cx="280" cy="60" r="6" fill="#ec5b95" />
          <text x="20" y="180" fill="#fff" fontSize="12" fontWeight="bold">
            {me.name}
          </text>
          <text x="200" y="45" fill="#fff" fontSize="12" fontWeight="bold">
            {her.name}
          </text>
        </svg>
      </div>
      <p className="distance-km" style={{ fontSize: '2.5rem', marginTop: '1rem' }}>{km.toLocaleString('es-ES')} km</p>
      <p className="card__footer-note">Pero mi corazón siempre está contigo en el Star of the Seas.</p>
    </SectionCard>
  )
}
