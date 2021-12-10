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
        </Routes>
        <Footer />
      </CartContext>
      <WhatsappWidget />
    </BrowserRouter>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js" integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13" crossorigin="anonymous"></script>
    </>

export default App;

