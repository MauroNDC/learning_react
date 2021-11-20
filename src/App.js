import React from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/container/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './components/container/ItemDetailContainer';
import { CartContext } from './context/CartContext';
import Cart from './components/Cart/Cart'

const App = () =>

    <BrowserRouter>
      <CartContext>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer brand='JewelTools' />} />
          <Route path="/compras" element={<ItemListContainer brand="JewelTools" />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/item/:itemId" element={<ItemDetailContainer />} />
        </Routes>
      </CartContext>
    </BrowserRouter>

export default App;

