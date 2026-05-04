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
    </section>
  )
}
