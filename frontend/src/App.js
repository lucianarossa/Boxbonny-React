
import './styles/App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';

import ExperiencesPage from './pages/ExperiencesPage';
import Index from './pages/Index';



function App() {
  return (
    <div className="app ">
      <Nav />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/experiences" element={<ExperiencesPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
