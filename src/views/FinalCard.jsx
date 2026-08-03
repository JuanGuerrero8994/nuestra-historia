import { useCountdownViewModel } from '../viewmodels/useCountdownViewModel'

export function FinalCard({ nameA, returnDate, onRestart }) {
  const timeLeft = useCountdownViewModel(returnDate)

  return (
    <div id="final" className="card card--full final" style={{ scrollMarginTop: '2rem' }}>
      <h2 className="final__title">Felices 3 meses, mi amor 💗</h2>

      <div className="countdown-section" style={{ margin: '2rem 0', textAlign: 'center' }}>
        <p style={{ fontSize: '1.1rem', marginBottom: '1rem', color: 'var(--text-muted)' }}>
          Cuenta regresiva para volver a vernos (12 de Octubre):
        </p>
        <div className="countdown-timer" style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '1.5rem',
          fontSize: '1.5rem',
          fontWeight: 'bold',
          color: 'var(--primary-color)'
        }}>
          <div className="timer-item">
            <span>{timeLeft.days}</span>
            <small style={{ display: 'block', fontSize: '0.7rem', textTransform: 'uppercase' }}>Días</small>
          </div>
          <div className="timer-item">
            <span>{timeLeft.hours}</span>
            <small style={{ display: 'block', fontSize: '0.7rem', textTransform: 'uppercase' }}>Horas</small>
          </div>
          <div className="timer-item">
            <span>{timeLeft.minutes}</span>
            <small style={{ display: 'block', fontSize: '0.7rem', textTransform: 'uppercase' }}>Min</small>
          </div>
          <div className="timer-item">
            <span>{timeLeft.seconds}</span>
            <small style={{ display: 'block', fontSize: '0.7rem', textTransform: 'uppercase' }}>Seg</small>
          </div>
        </div>
      </div>

      <p className="final__text">
        Gracias por cada sonrisa, por cada mensaje, por cada momento. Sos mi
        motivación y mi lugar favorito, aunque ahora estés en el Star of The Seas.
      </p>
      <p className="final__text" style={{ fontFamily: 'var(--font-script)', fontSize: '1.4rem' }}>
        Te amo infinito 💫
      </p>
      <p className="final__signature">- {nameA}</p>
      <button type="button" className="final__cta" onClick={onRestart}>
        Volver a empezar ↻
      </button>
    </div>
  )
}
