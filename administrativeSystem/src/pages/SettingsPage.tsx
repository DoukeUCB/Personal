import { settingsData } from '../data/universityData'

export default function SettingsPage() {
  return (
    <section>
      <h2>Configuración</h2>
      <p className="page-description">Parámetros generales del sistema.</p>
      <ul className="settings-list">
        {settingsData.map((item) => (
          <li key={item.label}>
            <span>{item.label}</span>
            <strong>{item.value}</strong>
          </li>
        ))}
      </ul>
    </section>
  )
}
