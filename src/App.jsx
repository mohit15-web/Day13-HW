
import Cart from './components/Cart';
import { CartProvider } from 'react-use-cart';
import { Route, Routes } from 'react-router-dom';
import ProductList from "./components/Products"
import { Navbar } from './components/Navbar';

function App() {
  

  return (
    <CartProvider>
      <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<ProductList/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
      </div>
    </CartProvider>
  );
}

export default App;
