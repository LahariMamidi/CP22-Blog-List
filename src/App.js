import { Routes, Route } from 'react-router-dom'

import Header from './components/Header'
import About from './components/About'
import Home from './components/Home'
import Contact from './components/Contact'
import NotFound from './components/NotFound'

import './App.css'

const App = () => (
  <div className="app-container">
    <div className="responsive-container">
      <Header />
      <div className="app-body">
        <Routes>
          <Route path="/CP22-Blog-List/" element={<Home />} />
          <Route path="/CP22-Blog-List/about" element={<About />} />
          <Route path="/CP22-Blog-List/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  </div>
)

export default App
