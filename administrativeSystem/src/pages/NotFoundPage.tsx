import { Link } from 'react-router-dom'
import Icon from '../components/Icon'

export default function NotFoundPage() {
  return (
    <section className="not-found">
      <div className="not-found-icon">
        <Icon name="alert" size={40} />
      </div>
      <h2>404</h2>
      <p>Página no encontrada en el sistema administrativo.</p>
      <Link to="/" className="action-btn">Volver al inicio</Link>
    </section>
  )
}
