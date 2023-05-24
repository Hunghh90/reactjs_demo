import React, { useReducer, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home.page";
import Cart from "./pages/Cart.page";
import Category from "./pages/Category.page";
import Navbar from "./components/Navbar";
import "./App.css";
import Detail from "./pages/Detail.page";
import { UserProvider } from "./store/context.store";
import INIT_STATE from "./store/initState";
import reducer from "./store/reducer";
function App() {
  // const [count, setCount] = useState(0);
  const localState = localStorage.getItem("state")?JSON.parse(localStorage.getItem("state")):INIT_STATE;
  const locallike = localStorage.getItem("likeProduct")?JSON.parse(localStorage.getItem("likeProduct")):[];
  // const [cart, setCart] = useState(localCart);
  const [state,dispatch] = useReducer(reducer,localState)
  const [likeProduct, setLikeProduct] = useState(locallike);
  return (
    <UserProvider value={{state,dispatch,likeProduct,setLikeProduct}}>
      <div id="loading" style={{display:"none"}}></div>
      <div className="App">
        <Navbar />
        <section>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/detail/:id" element={<Detail />} />
            <Route path="/category/:id" element={<Category />} />
          </Routes>
        </section>
      </div>
    </UserProvider>
  )
}

export default App;
