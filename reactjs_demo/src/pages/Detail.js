import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { find } from "../services/detail.service";
import UserContext from "../store/context.store";

const Detail = (props) => {
    const [detail, setDetail] = useState({});
    const { id } = useParams();
    const { count, setCount } = useContext(UserContext)
    const findProduct = async () => {
        const p = await find(id);
        setDetail(p);
    }
    useEffect(() => {
        findProduct();
    }, [])
    const upCount = () => {

        setCount(count + 1)
    }
    return (
        <div className='container'>
            <div className="row">
                <div className="col">
                    <img src={detail.thumbnail} />
                </div>
                <div className="col">
                    <h1>Count: {count}</h1>
                    <h3>{detail.title}</h3>
                    <button type="button" onClick={upCount} className="btn btn-primary">Add to cart</button>
                </div>
            </div>
        </div>
    )
}
export default Detail;