import { motion } from 'framer-motion'

export function SectionCard({
  id,
  number,
  icon,
  title,
  subtitle,
  wide = false,
  full = false,
  children,
}) {
  const classes = ['card']
  if (wide) classes.push('card--wide')
  if (full) classes.push('card--full')

  return (
    <motion.article
      id={id}
      className={classes.join(' ')}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.5 }}
    >
      <header className="card__header">
        <span className="card__badge">{number}</span>
        <div>
          <h3 className="card__title">
            <span>{title}</span> <span aria-hidden="true">{icon}</span>
          </h3>
          {subtitle && <p className="card__subtitle">{subtitle}</p>}
        </div>
      </header>
      {children}
    </motion.article>
  )
}
