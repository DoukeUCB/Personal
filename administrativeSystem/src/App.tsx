import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'
import { navigationItems } from './data/navigation'
import HomePage from './pages/HomePage'
import UsersPage from './pages/UsersPage'
import ReportsPage from './pages/ReportsPage'
import SettingsPage from './pages/SettingsPage'
import CalendarPage from './pages/CalendarPage'
import NotFoundPage from './pages/NotFoundPage'
import './App.css'

function App() {
  const [isDark, setIsDark] = useState(false)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const appClass = isDark ? 'app dark' : 'app'

  return (
    <div className={appClass}>
      <Navbar
        title="Sistema Administrativo UCB"
        isDark={isDark}
        onToggleDark={() => setIsDark((prev) => !prev)}
        onToggleSidebar={() => setIsSidebarOpen((prev) => !prev)}
      />

      <div className="layout">
        <Sidebar items={navigationItems} isOpen={isSidebarOpen} />

        <main className="content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/usuarios" element={<UsersPage />} />
            <Route path="/reportes" element={<ReportsPage />} />
            <Route path="/calendario" element={<CalendarPage />} />
            <Route path="/configuracion" element={<SettingsPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
      </div>

      <Footer year={2026} author="Douglas Mendez Cespedes" />
    </div>
  )
}

export default App
