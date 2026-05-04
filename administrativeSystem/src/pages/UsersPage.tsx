import { usersData } from '../data/universityData'

export default function UsersPage() {
  return (
    <section>
      <h2>Usuarios / Clientes / Pacientes</h2>
      <p className="page-description">Listado centralizado de personas registradas en el sistema administrativo universitario.</p>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Rol</th>
              <th>Estado</th>
            </tr>
          </thead>
          <tbody>
            {usersData.map((user) => (
              <tr key={user.name}>
                <td>{user.name}</td>
                <td>{user.role}</td>
                <td>
                  <span className={`status ${user.status === 'Activo' ? 'active' : 'inactive'}`}>
                    {user.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
