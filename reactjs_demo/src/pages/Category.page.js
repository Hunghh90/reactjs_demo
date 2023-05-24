import { useEffect, useState } from "react"
import { getCategoryById } from "../services/category.service"
import { NavLink } from "react-router-dom"
import { useParams } from "react-router-dom";
const Category = (props) => {
    const [item,setItem] = useState({});
    const [products,setProduct] = useState([]);
    const { id } = useParams();
    const categories = async () => {
        const c = await getCategoryById(id);
        const p = await c.products;
        setProduct(p);
        setItem(c);
    }
    

    useEffect (() => {
        categories();
    },[]) 
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-3">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">{item.name}</h5>
                                {
                                products.map((v,k)=> {
                                    return (
                                        <div>
                                            <h5>{v.name}</h5>
                                            <h5>{v.price}</h5>
                                        </div>
                                    )
                                    
                                })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Category;