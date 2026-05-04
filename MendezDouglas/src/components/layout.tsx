import { Outlet } from 'react-router-dom'

import Footer from './footer'
import Navnar from './navbar'

export default function Layout() {
  return (
    <>
      <header className="header">
        <Navnar />
      </header>
      <main className="main">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
