import './styles/App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux"
import packsActions from "./redux/actions/packsActions"
import PacksPage from './pages/PacksPage';
import Index from './pages/Index';
import Upload from "./components/Upload"
import OneExperiencePage from './pages/OneExperiencePage';
import SignIn from './components/SingnIn'
import ShoppingCart from './components/ShoppingCart';
import Checkout from './components/Checkout';
import PackDetails from './components/PackDetails';
import { Toaster } from 'react-hot-toast';
import ScrollToTop from "react-scroll-to-top";
import {BsFillArrowUpCircleFill} from 'react-icons/bs'


function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(packsActions.getPacks())
    // eslint-disable-next-line
  }, [])

  const user = useSelector(store => store.usuariosReducer.user) 


  return (
    <div className="app ">
      
      <Nav />
      <Toaster position="bottom-center"/>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="*" element={<Index />} />
        <Route path="/packs" element={<PacksPage />} />
        <Route path="/administrador" element={<Upload />} />
        <Route path="/packs/packdetails/:id" element={<PackDetails />} />
        <Route path="/packs/oneexperience/:id" element={<OneExperiencePage />} />
        {!user && <Route path="/signin" element={<SignIn />} />}
        <Route path="/cart" element={<ShoppingCart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
      <Footer />
      <ScrollToTop
        style={{ backgroundColor: "#ff8e72" }}
        smooth
        component={<BsFillArrowUpCircleFill className='svg-scroll' fontSize="large" />}
      />
    </div>
  );
}

export default App;
