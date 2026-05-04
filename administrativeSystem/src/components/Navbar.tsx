type NavbarProps = {
  title: string
  isDark: boolean
  onToggleDark: () => void
  onToggleSidebar: () => void
}

export default function Navbar({ title, isDark, onToggleDark, onToggleSidebar }: NavbarProps) {
  return (
    <header className="navbar">
      <button className="icon-btn" onClick={onToggleSidebar} type="button" aria-label="Mostrar u ocultar barra lateral">
        ☰
      </button>
      <h1>{title}</h1>
      <button className="theme-btn" onClick={onToggleDark} type="button">
        {isDark ? '☀️ Modo claro' : '🌙 Modo oscuro'}
      </button>
    </header>
  )
}
