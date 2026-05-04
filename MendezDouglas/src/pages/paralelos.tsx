const paralelos = [
  { paralelo: 'Inicial A', edad: '3 anios', docente: 'Lic. Ana' },
  { paralelo: 'Inicial B', edad: '4 anios', docente: 'Lic. Carla' },
  { paralelo: 'Pre Kinder', edad: '5 anios', docente: 'Lic. Luis' },
]

export default function Paralelos() {
  return (
    <>
      <h2>Paralelos</h2>
      <table>
        <thead>
          <tr>
            <th>Paralelo</th>
            <th>Edad</th>
            <th>Docente</th>
          </tr>
        </thead>
        <tbody>
          {paralelos.map((item) => (
            <tr key={item.paralelo}>
              <td>{item.paralelo}</td>
              <td>{item.edad}</td>
              <td>{item.docente}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}
