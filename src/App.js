import React from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/container/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './components/container/ItemDetailContainer';
import { CartContext } from './context/CartContext';
import Cart from './components/Cart/Cart'
import Contact from './components/pages/Contact';
import WhatsappWidget from './components/littleComponents/WhatsappWidget'
import Footer from './components/Footer';
import BuyingForm from './components/Cart/BuyingForm';
import AboutUs from './components/pages/aboutus';

const App = () =>
  <>
    <BrowserRouter>
      <CartContext>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer brand='JewelTools' />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/item/:itemId" element={<ItemDetailContainer />} />
          <Route path="/contact" element={<Contact />}/>
          <Route path="/buying" element={<BuyingForm />} />
          <Route path="/aboutus" element={<AboutUs /> } />
        </Routes>
        <Footer />
      </CartContext>
      <WhatsappWidget />
    </BrowserRouter>
  </>

export default App;

