import React from 'react';
import './App.css';
import products from './data';
import Store from './Store';

function App() {
  return (
    <Store products={products} />
  );
}

export default App;
