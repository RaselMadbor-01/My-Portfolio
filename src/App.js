
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
        
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
