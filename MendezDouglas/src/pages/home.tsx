const stats = [
  { title: 'Ninos Inscritos', value: '120' },
  { title: 'Paralelos Activos', value: '6' },
  { title: 'Docentes', value: '10' },
]

export default function Home() {
  return (
    <>
      <h2>Dashboard</h2>
      <div className="cards">
        {stats.map((stat) => (
          <div key={stat.title} className="card">
            <h3>{stat.title}</h3>
            <p>{stat.value}</p>
          </div>
        ))}
      </div>
    </>
  )
}
