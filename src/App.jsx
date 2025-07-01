import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/home.jsx';
import About from './pages/about/about.jsx';
import Activities from './pages/Activities/Activities.jsx';
import Eventsp from './pages/Events/Event.jsx';
import Aarti from './pages/Aarti/aarti.jsx';
import Ltnews from './pages/Latest news/Ltnews.jsx';


function App() {

  return (
    <>
  <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Activities" element={<Activities />} />
        <Route path="/Events" element={<Eventsp />} />
        <Route path="/Aarti" element={<Aarti />} />
        <Route path="/Latest News" element={<Ltnews />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
