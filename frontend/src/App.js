
import './styles/App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from "react-redux"
import packsActions from "./redux/actions/packsActions"
import PacksPage from './pages/PacksPage';
import Index from './pages/Index';
import Upload from "./components/Upload"
import OneExperiencePage from './pages/OneExperiencePage';
import SignIn from './components/SingnIn'
import SignUp from './components/SignUp'
import ShoppingCart from './components/ShoppingCart';

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(packsActions.getPacks())
    // eslint-disable-next-line
  }, [])


  return (
    <div className="app ">
      <Nav />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/packs" element={<PacksPage />} />
        <Route path="/administrador" element={<Upload />} />
        <Route path="/packs/packdetails/:id" />
        <Route path="/packs/oneexperience" element={<OneExperiencePage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/cart" element={<ShoppingCart />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
