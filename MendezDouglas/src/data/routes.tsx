import type { ReactElement } from 'react'

import Home from '../pages/home'
import Paralelos from '../pages/paralelos'
import Reportes from '../pages/reportes'

export type AppRoute = {
  name: string
  path: string
  element: ReactElement
}

export const routes: AppRoute[] = [
  { name: 'Inicio', path: '/', element: <Home /> },
  { name: 'Paralelos', path: '/paralelos', element: <Paralelos /> },
  { name: 'Reportes', path: '/reportes', element: <Reportes /> },
]
