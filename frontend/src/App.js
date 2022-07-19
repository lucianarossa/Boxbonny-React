
import './styles/App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Packs from './pages/Packs';

function App() {
  return (
    <div className="app flex-column" >
      <Nav/>
       <Packs />
      <Footer />
    </div>
  );
}

export default App;
