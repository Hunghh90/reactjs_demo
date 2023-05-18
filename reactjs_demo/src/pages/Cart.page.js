import React, { useEffect, useState } from "react";
import { get } from "../services/cart.service";

function Cart(props) {
    const [products, setProducts] = useState([]);
    const getProduct = async () => {
        try {
            const rs = await get();
            setProducts(rs)
        } catch (e) {

        }
    }
    //useEffect dùng để quản lý state
    useEffect(() => {

    },) // component did update (luôn chạy khi có sự thay đổi)
    useEffect(() => {
        getProduct();
    }, []) // componen did mount (chạy 1 lần duy nhất sau khi render)
    useEffect(() => {

    }, [products]) // run when products update (chạy khi products thay đổi)
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
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((v, k) => {
                            return (
                                <tr key={k}>
                                    <th><img src={v.thumbnail} width={120} className="img-thumbnail" /></th>
                                    <td>{v.title}</td>
                                    <td>{v.price}</td>
                                    <td>{2}</td>
                                    <td>{v.price * 2}</td>
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