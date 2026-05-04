import { useState } from 'react'
import { adminsData, studentsSeed, teachersData } from '../data/universityData'

export default function UsersPage() {
  const [students, setStudents] = useState(studentsSeed)
  const [newStudent, setNewStudent] = useState('')
  const [feedback, setFeedback] = useState('')

  const peopleData = [...students, ...teachersData, ...adminsData]

  function handleAddStudent(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (newStudent.trim().length < 3) {
      setFeedback('El nombre debe tener al menos 3 caracteres.')
      return
    }

    setStudents((prev) => [
      { name: newStudent.trim(), role: 'Estudiante', status: 'Activo' },
      ...prev,
    ])
    setNewStudent('')
    setFeedback('Estudiante registrado correctamente.')
  }

  const feedbackClass = feedback
    ? feedback.includes('correctamente')
      ? 'ok'
      : 'error'
    : ''

  return (
    <section>
      <h2>Personas</h2>
      <p className="page-description">Registro de estudiantes, docentes y administrativos.</p>

      <form className="inline-form" onSubmit={handleAddStudent}>
        <label htmlFor="student-name">Registrar estudiante</label>
        <div className="input-group">
          <input
            id="student-name"
            type="text"
            placeholder="Nombre del estudiante"
            value={newStudent}
            onChange={(event) => {
              setNewStudent(event.target.value)
              if (feedback) {
                setFeedback('')
              }
            }}
          />
          <button className="action-btn" type="submit">Agregar</button>
        </div>
        <p className={`helper-text ${feedbackClass}`}>{feedback}</p>
      </form>

      <div className="summary-row">
        <div className="summary-card">
          <strong>{students.length}</strong>
          <span>Estudiantes registrados</span>
        </div>
        <div className="summary-card">
          <strong>{teachersData.length}</strong>
          <span>Docentes activos</span>
        </div>
        <div className="summary-card">
          <strong>{adminsData.length}</strong>
          <span>Administrativos</span>
        </div>
      </div>

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
            {peopleData.map((user) => (
              <tr key={`${user.role}-${user.name}`}>
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
