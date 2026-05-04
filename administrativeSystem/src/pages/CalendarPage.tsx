import { eventsData } from '../data/universityData'

export default function CalendarPage() {
  return (
    <section>
      <h2>Calendario Académico</h2>
      <p className="page-description">Eventos clave y actividades institucionales próximas.</p>
      <div className="events-grid">
        {eventsData.map((event) => (
          <div className="event-card" key={event.title}>
            <div>
              <h3>{event.title}</h3>
              <p>{event.location}</p>
            </div>
            <div className="event-meta">
              <span>{event.date}</span>
              <span className={`status ${event.status === 'Confirmado' ? 'active' : 'inactive'}`}>
                {event.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
