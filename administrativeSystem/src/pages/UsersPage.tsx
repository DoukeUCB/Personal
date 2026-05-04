const usuarios = [
  { id: 1, nombre: 'Carlos', email: 'carlos@mail.com' },
  { id: 2, nombre: 'Maria', email: 'maria@mail.com' },
]

export default function Usuarios() {
  return (
    <section>
      <h2>Usuarios</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((usuario) => (
            <tr key={usuario.id}>
              <td>{usuario.id}</td>
              <td>{usuario.nombre}</td>
              <td>{usuario.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  )
}
