import React from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/container/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CartWidget from './components/CartWidget';
import ItemDetailContainer from './components/container/ItemDetailContainer';

const App = () => 
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer brand='JewelTools' />} />
        <Route path="/compras" element={<ItemListContainer brand="JewelTools" />} />
        <Route path="/cart" element={<CartWidget />} />
        <Route path="/item/:itemId" element={<ItemDetailContainer />} />
      </Routes>
    </BrowserRouter>
    
export default App;

