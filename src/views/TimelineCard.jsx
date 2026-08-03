import { useTimelineViewModel } from '../viewmodels/useTimelineViewModel'
import { SectionCard } from './SectionCard'

export function TimelineCard({ milestonesData }) {
  const { items } = useTimelineViewModel(milestonesData)

  return (
    <SectionCard
      id="linea-de-tiempo"
      number="04"
      icon="🗓️"
      title="Línea del tiempo"
      subtitle="Momentos que nos marcaron"
    >
      <ul className="mini-timeline">
        {items.map((m) => (
          <li key={m.id}>
            <span className={`mini-timeline__dot mini-timeline__dot--${m.color}`}>
              {m.icon}
            </span>
            <span>
              <span className="mini-timeline__date">{m.formattedDate}</span>
              <span className="mini-timeline__title">{m.title}</span>
            </span>
          </li>
        ))}
      </ul>
    </SectionCard>
  )
}
