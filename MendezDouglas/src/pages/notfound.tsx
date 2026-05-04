import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="error-body">
      <div className="error-container">
        <h1>404</h1>
        <p>Pagina no encontrada.</p>
        <Link className="btn" to="/">
          Volver al inicio
        </Link>
      </div>
    </div>
  )
}
