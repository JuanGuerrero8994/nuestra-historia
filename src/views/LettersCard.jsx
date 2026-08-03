import { useLettersViewModel } from '../viewmodels/useLettersViewModel'
import { SectionCard } from './SectionCard'

export function LettersCard({ lettersData }) {
  const { letters, openedLetter, openLetter, closeLetter } =
    useLettersViewModel(lettersData)

  return (
    <SectionCard
      id="cartas"
      number="07"
      icon="✉️"
      title="Cartas para ti"
      subtitle="Palabras que salen del corazón"
      full
    >
      <div className="letters" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
        gap: '1.2rem',
        marginTop: '1rem'
      }}>
        {letters.map((letter) => (
          <button
            type="button"
            key={letter.id}
            className="envelope"
            onClick={() => openLetter(letter.id)}
            style={{ width: '100%' }}
          >
            <span className="envelope__icon" aria-hidden="true">
              💌
            </span>
            <span className="envelope__title">{letter.title}</span>
            <span style={{ fontSize: '0.8rem', opacity: 0.8 }}>{letter.teaser}</span>
          </button>
        ))}
      </div>

      {openedLetter && (
        <div
          className="letter-modal"
          role="dialog"
          aria-modal="true"
          onClick={closeLetter}
        >
          <div className="letter-modal__card" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="letter-modal__close"
              onClick={closeLetter}
              aria-label="Cerrar carta"
            >
              ✕
            </button>
            <h3 className="letter-modal__title">{openedLetter.title}</h3>
            <p className="letter-modal__body" style={{ whiteSpace: 'pre-line' }}>{openedLetter.body}</p>
          </div>
        </div>
      )}
    </SectionCard>
  )
}
