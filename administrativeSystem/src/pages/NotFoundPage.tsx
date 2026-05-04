import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <section className="not-found">
      <h2>404</h2>
      <p>Página no encontrada en el sistema administrativo.</p>
      <Link to="/" className="action-btn">Volver al inicio</Link>
    </section>
  )
}
