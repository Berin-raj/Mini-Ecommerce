
import './App.css';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';

import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import ProductDetail from './pages/ProductDetail';
import { useState } from 'react';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cart from './pages/Cart';
function App() {
  const[cartItems, setcartItem]=useState([]);

  return (
    <div className="App">
      <Router>
        <div>
          <ToastContainer theme=''/>
            <Header cartItems={cartItems}/>
            
            <Routes>
                  <Route path='/' element={<Home/>}/>
                  <Route path='/search' element={<Home/>}/>
                  <Route path='/product/:id' element={<ProductDetail cartItems={cartItems} setcartItem={setcartItem} />}/>
                  <Route path='/cart' element={<Cart cartItems={cartItems} setcartItem={setcartItem} />}/>
            
            </Routes>
         
        </div>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
