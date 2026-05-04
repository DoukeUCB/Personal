import { NavLink } from 'react-router-dom'

import { routes } from '../data/routes'

export default function Navnar() {
  return (
    <div className="nav">
      <h1>Kinder Feliz</h1>
      <nav>
        {routes.map((route) => (
          <NavLink
            key={route.path}
            to={route.path}
            end={route.path === '/'}
            className={({ isActive }) => (isActive ? 'active' : undefined)}
          >
            {route.name}
          </NavLink>
        ))}
      </nav>
    </div>
  )
}
