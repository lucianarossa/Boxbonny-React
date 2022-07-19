
import './styles/App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import {useDispatch} from "react-redux"
import packsActions from "./redux/actions/packsActions"
import ExperiencesPage from './pages/ExperiencesPage';
import Index from './pages/Index';


function App() {

  const dispatch = useDispatch()

  useEffect(() => {
  dispatch(packsActions.getPacks())
     // eslint-disable-next-line
    },[])
  

  return (
<<<<<<< HEAD
    <div className="app flex-column">
      <Nav/>
       <Packs />
=======
    <div className="app ">
      <Nav />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/experiences" element={<ExperiencesPage />} />
      </Routes>
>>>>>>> cf18f59e14e4ae2ce239c002b2af8f719655d9d3
      <Footer />
    </div>
  );
}

export default App;
