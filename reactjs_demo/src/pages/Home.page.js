import React, { useEffect, useState } from 'react';
import './../App.css';
import { get } from './../services/product.service';
import { NavLink } from 'react-router-dom';


function Home(props) {
    const [products, setProducts] = useState([]);
    const getProduct = async () => {
        try {
            const rs = await get();
            setProducts(rs)
        } catch (e) {

        }
    }
    useEffect(() => {
        getProduct();
    }, [])


    return (
        <div className="container">
            <h1>Danh sách sản phẩm</h1>
            <div className='row'>
                {
                    products.map((v, k) => {
                        return (
                            <div className='col-3'>
                                <div className="card">
                                    <img src={v.thumbnail} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">{v.title}</h5>
                                        <p className="card-text">{v.description}</p>
                                        <span className='text-danger'>$ {v.price}</span>
                                        <NavLink to={"/detail/" + v.id} className="btn btn-primary">Buy</NavLink>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );

}

export default Home;
