import logo from './logo.svg';
import './App.css';
import {Route, Routes} from "react-router-dom";
import About from './Pages/About';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProductDetail from './Pages/ProductDetail';

function App() {
  return (
    <>
    <Navbar/>
     <Routes>
       
       <Route path='/' element={<Home/>}/>
       <Route path='/contact' element={<Contact/>}/>
       <Route path='/product/:productId' element={<ProductDetail/>}/>
       
     </Routes>
     <Footer/>
   </>
  );
}

export default App;
