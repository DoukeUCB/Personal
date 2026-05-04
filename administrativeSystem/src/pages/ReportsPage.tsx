import { useState } from 'react'
import Card from '../components/Card'
import { reportsData } from '../data/universityData'

export default function ReportsPage() {
  const [selectedReport, setSelectedReport] = useState(reportsData[0])

  return (
    <section>
      <h2>Reportes</h2>
      <p className="page-description">Módulo de análisis y seguimiento académico.</p>
      <div className="grid">
        {reportsData.map((report) => (
          <Card key={report.title} title={report.title} subtitle={report.subtitle} icon={report.icon}>
            <button className="action-btn" type="button" onClick={() => setSelectedReport(report)}>
              Ver detalle
            </button>
          </Card>
        ))}
      </div>

      <div className="detail-panel">
        <h3>{selectedReport.title}</h3>
        <p className="detail-subtitle">{selectedReport.subtitle}</p>
        <ul>
          {selectedReport.details.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <span className="detail-updated">{selectedReport.updated}</span>
      </div>
    </section>
  )
}
