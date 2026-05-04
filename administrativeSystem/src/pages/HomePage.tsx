import { Link } from 'react-router-dom'
import Card from '../components/Card'
import { kpiData } from '../data/universityData'

export default function HomePage() {
  return (
    <section>
      <h2>Inicio</h2>
      <p className="page-description">Resumen rápido del estado de la universidad.</p>
      <div className="grid">
        {kpiData.map((kpi) => (
          <Card key={kpi.title} title={kpi.title} subtitle={kpi.value} icon={kpi.icon} />
        ))}
      </div>

      <div className="quick-links">
        <h3>Accesos rápidos</h3>
        <div className="quick-links-grid">
          <Link to="/usuarios" className="action-btn">Registrar estudiante</Link>
          <Link to="/reportes" className="action-btn">Ver reportes clave</Link>
          <Link to="/ruta-no-existe" className="action-btn">Probar página 404</Link>
        </div>
      </div>
    </section>
  )
}
