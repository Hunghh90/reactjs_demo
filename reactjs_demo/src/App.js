import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home.page';
import Cart from './pages/Cart.page';
import Navbar from './components/Navbar';
import './App.css';
import Detail from './pages/Detail';
import { UserProvider } from './store/context.store';
function App() {
  const [count, setCount] = useState(0);
  return (
    <UserProvider value={{ count, setCount }}>
      <div className='App'>
        <Navbar />
        <section>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/detail/:id' element={<Detail />} />
          </Routes>
        </section>
      </div>
    </UserProvider>
  )
}

export default App;
