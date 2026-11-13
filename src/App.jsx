import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Design from './pages/Design'
import Projects from './pages/Projects'
import People from './pages/People'
import Services from './pages/Services'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="design" element={<Design />} />
        <Route path="projects" element={<Projects />} />
        <Route path="people" element={<People />} />
        <Route path="services" element={<Services />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
