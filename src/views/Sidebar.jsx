const NAV_ITEMS = [
  { id: 'inicio', label: 'Inicio', icon: '🏠' },
  { id: 'primera-conversacion', label: 'Nuestra primera conversación', icon: '💬' },
  { id: 'primera-cita', label: 'Nuestra primera cita', icon: '❤️' },
  { id: 'fotos', label: 'Fotos', icon: '📷' },
  { id: 'distancia', label: 'Distancia', icon: '🌍' },
  { id: 'musica', label: 'Música', icon: '🎵' },
  { id: 'cartas', label: 'Cartas', icon: '✉️' },
  { id: 'mensaje', label: 'Mensaje', icon: '🎬' },
  { id: 'final', label: 'Final', icon: '💗' },
]

export function Sidebar({ activeId, onNavigate }) {
  return (
    <aside className="sidebar">
      <div className="sidebar__logo">
        <svg className="sidebar__heart" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 20.5s-7.5-4.7-10-9.2C.6 8 2 4.5 5.4 4c2.1-.3 4 .7 6.6 3.4C14.6 4.7 16.5 3.7 18.6 4c3.4.5 4.8 4 3.4 7.3-2.5 4.5-10 9.2-10 9.2z"
            stroke="currentColor"
            strokeWidth="1.5"
          />
        </svg>
        <span className="sidebar__logo-text">Nuestra Historia</span>
      </div>

      <nav className="sidebar__nav">
        <ul>
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <button
                type="button"
                className="sidebar__item"
                data-active={activeId === item.id}
                onClick={() => onNavigate(item.id)}
              >
                <span className="sidebar__item-icon" aria-hidden="true">
                  {item.icon}
                </span>
                <span>{item.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}

export { NAV_ITEMS }
