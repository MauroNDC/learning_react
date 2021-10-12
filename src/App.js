import React from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './container/ItemListContainer';

<ItemListContainer brand='JewelTools'/>;

const App = () => {
  return (
    <>
      <NavBar />
      <ItemListContainer brand="JewelTools" />
    </>
  );
}
export default App;

