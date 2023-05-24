import React, { useContext, useEffect, useState } from "react";
import { get } from "../services/cart.service";
import UserContext from "../store/context.store";

function Cart(props) {
    const [product, setProducts] = useState([]);
    const [buyQty, setBuyQty] = useState();
    const {state, dispatch} = useContext(UserContext);
    const getProduct =  () => {
        setProducts(state.cart);
    }
    const inputHandle = (event)=> {
        const buyQty = event.target.value;
        setBuyQty(buyQty)
        const id = parseInt(event.target.name);
        state.cart.map(v => {
            if(v.id === id) {
                v.buy_qty = buyQty;
                v.total = (v.price*v.buy_qty)
            }
            return v;
        })
        localStorage.setItem("state",JSON.stringify(state));
        dispatch({type: "UPDATE_CART", payload: state.cart}) 
    }
    const handleDeleteItem = (event) => {
        const id = parseInt(event.target.name);   
                let item = state.cart.filter(item => item.id !== id);
                localStorage.setItem('state', JSON.stringify(state));
                dispatch({type: "UPDATE_CART", payload: item})
                if(item.length === 0) {
                    localStorage.removeItem('state')
                }
            
    }

    //useEffect dùng để quản lý state
    useEffect(() => {

    },) // component did update (luôn chạy khi có sự thay đổi)
    useEffect(() => {
        getProduct();
    }, [state.cart]) // componen did mount (chạy 1 lần duy nhất sau khi render)
    useEffect(() => {
    }, []) // run when products update (chạy khi products thay đổi)
    return (
        <div className="container">
            <h1>Cart</h1>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Image</th>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Qty</th>
                        <th scope="col">Total</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        product.map((v, k) => {
                            return (
                                <tr key={k}>
                                    <th><img src={v.thumbnail} width={120} className="img-thumbnail" /></th>
                                    <td>{v.title}</td>
                                    <td>{v.price}</td>
                                    <td><input defaultValue={v.buy_qty} name={v.id} type="number" onChange={inputHandle}  min={1}/></td>
                                    <td>{v.price * v.buy_qty}</td> 
                                    <td><input type="button" onClick={handleDeleteItem} name={v.id} value={"x"}/></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}
export default Cart;