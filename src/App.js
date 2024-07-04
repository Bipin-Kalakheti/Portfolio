import './App.scss'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Works from './components/Works'
import Loader from './components/Loader'

function App() {
  return (
    <div>
      <Loader />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Works" element={<Works />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
