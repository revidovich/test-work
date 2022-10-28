import { useState } from 'react';
import reactLogo from '../assets/react.svg';
import Auth from './Auth';
import Cart from './Cart';
import Search from './Search';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav>
        <Search />
        <Auth />
      </nav>
      <Cart itemIDs={[15, 16, 17, 18]}/>
    </div>
  )
};

export default App;
