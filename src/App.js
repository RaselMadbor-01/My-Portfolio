
import './App.css';
import Home from './pages/Home/Home/Home';
import Navigation from './pages/Shared/Navigation/Navigation';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Contact from './pages/Contact/Contact/Contact';
import Portfolio from './pages/Portfolio/Portfolio';
import About from './pages/About/About';
import Blog from './pages/Blog/Blog';
import PortfolioInfo from './pages/Portfolio/ProtfolioInfo/PortfolioInfo';

function App() {
  return (
    <div>
       <BrowserRouter>
       <Navigation/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/portfolio" element={<PortfolioInfo />} >
        <Route path=":projectId" element={<PortfolioInfo />} />
          </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
