import { NavLink } from 'react-router-dom'
import Icon, { type IconName } from './Icon'

export type NavItem = {
  path: string
  label: string
  icon: IconName
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
                <Icon name={item.icon} />
                <span>{item.label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}
