
import './styles/App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import {useDispatch} from "react-redux"
import packsActions from "./redux/actions/packsActions"
import ExperiencesPage from './pages/ExperiencesPage';
import Index from './pages/Index';
import Upload from "./components/Upload"
import SignIn from './components/SingnIn'
import SignUp from './components/SignUp'

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
  dispatch(packsActions.getPacks())
     // eslint-disable-next-line
    },[])
  

  return (
    <div className="app ">
      <Nav />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/packs" element={<ExperiencesPage />} />
        <Route path="/administrador" element= {<Upload/>}/>
        <Route path="/packs/packdetails/:id"/>
        <Route path="/signin" element={<SignIn/>}/>
        <Route path="/signup" element={<SignUp/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
