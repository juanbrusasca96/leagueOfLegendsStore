import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import './styles/css/style.css'
import ItemListContainer from './components/ItemListContainer';
import Cart from './components/Cart';
import ItemDetailContainer from './components/ItemDetailContainer';
import { CartProvider } from './helpers/CartContext';
import Form from './components/Form';

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <div className="App">
          <NavBar />
          <Routes>
            <Route index path='/' element={<ItemListContainer />} />
            <Route path='/position/:positionId' element={<ItemListContainer />} />
            <Route path='/detail/:id' element={<ItemDetailContainer />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/form' element={<Form />} />
            <Route path='*' element={<Navigate to='/' />} />
          </Routes>
        </div>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
