import { Route, Routes } from 'react-router-dom'

import Layout from './components/layout'
import NotFound from './pages/notfound'
import { routes } from './data/routes'
import './App.css'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {routes.map((route) => {
          const isIndex = route.path === '/'
          const childPath = isIndex ? undefined : route.path.replace(/^\//, '')

          return (
            <Route
              key={route.path}
              index={isIndex}
              path={childPath}
              element={route.element}
            />
          )
        })}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
