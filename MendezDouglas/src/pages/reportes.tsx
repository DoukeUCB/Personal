const reportes = [
  { title: 'Asistencia', description: 'Reporte mensual' },
  { title: 'Rendimiento', description: 'Evaluacion trimestral' },
  { title: 'Comportamiento', description: 'Seguimiento semanal' },
]

export default function Reportes() {
  return (
    <>
      <h2>Reportes</h2>
      <div className="cards">
        {reportes.map((reporte) => (
          <div key={reporte.title} className="card">
            <h3>{reporte.title}</h3>
            <p>{reporte.description}</p>
          </div>
        ))}
      </div>
    </>
  )
}
