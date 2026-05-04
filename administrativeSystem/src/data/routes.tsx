import type { ReactElement } from 'react'

import Calendario from '../pages/CalendarPage'
import Configuracion from '../pages/SettingsPage'
import Home from '../pages/HomePage'
import NotFound from '../pages/NotFoundPage'
import Reportes from '../pages/ReportsPage'
import Usuarios from '../pages/UsersPage'

export type AppRoute = {
  name: string
  path: string
  element: ReactElement
}

export const routes: AppRoute[] = [
  { name: 'Inicio', path: '/', element: <Home /> },
  { name: 'Usuarios', path: '/usuarios', element: <Usuarios /> },
  { name: 'Reportes', path: '/reportes', element: <Reportes /> },
  { name: 'Calendario', path: '/calendario', element: <Calendario /> },
  { name: 'Configuracion', path: '/configuracion', element: <Configuracion /> },
  { name: 'NotFound', path: '*', element: <NotFound /> },
]