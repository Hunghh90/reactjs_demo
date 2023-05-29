import React, { useEffect, useState } from "react";
import "./../App.css";
import { get } from "./../services/product.service";
import { getCategory } from "./../services/category.service";
import { NavLink } from "react-router-dom";


function Home(props) {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const getProduct = async () => {
        try {
            const rs = await get();
            setProducts(rs)
        } catch (e) {

        }
    }
    const getCategories = async () => {
        try {
            const rs = await getCategory();
            setCategories(rs)
        } catch (e) {

        }
    }
    useEffect(() => {
        getProduct();
    }, [])
    useEffect(() => {
        getCategories();
    }, [])

    return (
        <div className="container">
           
           
               
    
            <div className="row">
                <div className="col-3">
                    <h3>Danh Muc San Pham</h3>
                    
                    {/* {
                        
                        categories.map((v,k) => {
                            console.log(v.id)
                            return (
                                <NavLink className="nav-link" aria-current="page" to={"/category/"+v.id}>{v.name}</NavLink>
                               
                            )
                        })
                    } */}
                </div>
                <h1>Danh sách sản phẩm</h1>
                {/* {
                    products.map((v, k) => {
                        return (
                            <div className="col-3">
                                <div className="card">
                                    <img src={v.thumbnail} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">{v.name}</h5>
                                        <p className="card-text">{v.qty}</p>
                                        <span className="text-danger">$ {v.price}</span>
                                        <NavLink to={"/detail/" + v.id} className="btn btn-primary">Buy</NavLink>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                } */}
            </div>
        </div>
    );

}

export default Home;
