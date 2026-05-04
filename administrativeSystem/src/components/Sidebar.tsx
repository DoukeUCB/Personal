import { NavLink } from 'react-router-dom'

export type NavItem = {
  path: string
  label: string
  icon: string
}

type SidebarProps = {
  items: NavItem[]
  isOpen: boolean
}

export default function Sidebar({ items, isOpen }: SidebarProps) {
  return (
    <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
      <nav>
        <ul>
          {items.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                <span aria-hidden="true">{item.icon}</span>
                <span>{item.label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}
