import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import type { IconName } from './components/Icon'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'
import { routes } from './data/routes'
import './App.css'

function App() {
  const [isDark, setIsDark] = useState(false)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const appClass = isDark ? 'app dark' : 'app'
  const iconByPath: Record<string, IconName> = {
    '/': 'home',
    '/usuarios': 'users',
    '/reportes': 'reports',
    '/calendario': 'calendar',
    '/configuracion': 'settings',
  }

  const navigationItems = routes
    .filter((route) => route.path !== '*')
    .map((route) => ({
      path: route.path,
      label: route.name,
      icon: iconByPath[route.path] ?? 'home',
    }))

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
            {routes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={route.element}
              />
            ))}
          </Routes>
        </main>
      </div>

      <Footer year={2026} author="Douglas Mendez Cespedes" />
    </div>
  )
}

export default App
