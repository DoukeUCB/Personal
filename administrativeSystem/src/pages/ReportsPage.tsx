import Card from '../components/Card'
import { reportsData } from '../data/universityData'

export default function ReportsPage() {
  return (
    <section>
      <h2>Reportes</h2>
      <p className="page-description">Módulo de análisis y seguimiento académico.</p>
      <div className="grid">
        {reportsData.map((report) => (
          <Card key={report.title} title={report.title} subtitle={report.subtitle} icon={report.icon}>
            <button className="action-btn" type="button">Ver detalle</button>
          </Card>
        ))}
      </div>
    </section>
  )
}
