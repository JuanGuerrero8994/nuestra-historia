import { motion } from 'framer-motion'
import { useCounterViewModel } from '../viewmodels/useCounterViewModel'

export function Hero({ coupleData, onStart }) {
  const { nameA, nameB, months } =
    useCounterViewModel(coupleData)

  return (
    <section className="hero" id="inicio">
      <div className="hero__bg" />
      <svg
        className="hero__bg-scene"
        viewBox="0 0 800 500"
        preserveAspectRatio="xMidYMax slice"
        aria-hidden="true"
      >
        <circle cx="400" cy="330" r="70" fill="#ffd699" opacity="0.85" />
        <rect x="0" y="360" width="800" height="140" fill="#150c22" opacity="0.55" />
        <path
          d="M300 355 L500 355 L470 400 L330 400 Z"
          fill="#0f0819"
          opacity="0.85"
        />
        <rect x="360" y="320" width="10" height="40" fill="#0f0819" opacity="0.85" />
        <rect x="420" y="320" width="10" height="40" fill="#0f0819" opacity="0.85" />
        {Array.from({ length: 40 }).map((_, i) => (
          <circle
            key={i}
            cx={(i * 53) % 800}
            cy={((i * 97) % 260) + 20}
            r={i % 5 === 0 ? 1.6 : 0.9}
            fill="#fff"
            opacity={0.15 + ((i * 13) % 40) / 100}
          />
        ))}
      </svg>

      <motion.p
        className="hero__eyebrow"
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Desde el primer "hola" hasta el día de hoy
      </motion.p>

      <motion.h1
        className="hero__title"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
      >
        Nuestra Historia
      </motion.h1>

      <motion.p
        className="hero__names"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.25 }}
      >
        {nameA}
        <span className="hero__heart-sep">♥</span>
        {nameB}
      </motion.p>

      <p className="hero__subtitle">Cada momento a tu lado es mi lugar favorito.</p>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        style={{ textAlign: 'center' }}
      >
        <p className="hero__counter" style={{ fontSize: '5rem', marginBottom: '0', color: '#fff' }}>
          {months} Meses
        </p>
        <p style={{
          fontSize: '1.8rem',
          color: 'rgba(255,255,255,0.9)',
          marginTop: '0'
        }}>
          Juntos
        </p>
      </motion.div>

      <button type="button" className="hero__cta" onClick={onStart} style={{ marginTop: '2.5rem' }}>
        Comenzar el viaje →
      </button>
    </section>
  )
}
