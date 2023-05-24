import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { find } from "../services/detail.service";
import UserContext from "../store/context.store";

const Detail = (props) => {
    const [detail, setDetail] = useState({});
    const [buyQty, setBuyQty] = useState(1);
    const [likeFavorite, setLikeFavorite] = useState(true);
    const { id } = useParams();
    const { state, dispatch } = useContext(UserContext);
    const { likeProduct, setLikeProduct } = useContext(UserContext);
    const findProduct = async () => {
        const p = await find(id);
        setDetail(p);
    }
    useEffect(() => {
        findProduct();
    }, [])
    const addToCart = () => {
        if (detail.id) {
            let check = false;
            state.cart.map(e=> {
                if(e.id === detail.id){
                    e.buy_qty = parseInt(e.buy_qty)+parseInt(buyQty);
                    check = true;
                }
                return e;
            })
            if(!check) {
                detail.buy_qty = buyQty;
                state.cart.push(detail);
            }
            localStorage.setItem("state",JSON.stringify(state));
            dispatch({type: "UPDATE_CART", payload: state.cart});
            alert("Đã thêm sản phẩm vào giỏ hàng");
        }
    };
    const inputHandle = (event)=> {
            const buyQty = event.target.value
        setBuyQty(buyQty)
    }
    const btncolor = ()=> {
        let liked = likeProduct.filter((likeProduct) => likeProduct.id === detail.id);
        if(liked.length <1){
           return 'btn btn-primary'
        }
        return 'btn btn-danger'  

    }
    const buttonname = ()=> {
        let liked = likeProduct.filter((likeProduct) => likeProduct.id === detail.id);
        if(liked.length <1) {
            return "Like"
        } else {
            return "Unlike"
        }
    }
    
    const likeHandle = ()=> {
        let liked = likeProduct.filter((likeProduct) => likeProduct.id === detail.id);
        if(liked.length <1){
            likeProduct.push(detail);
            localStorage.setItem("likeProduct",JSON.stringify(likeProduct))
            setLikeProduct(likeProduct)
            setLikeFavorite(!likeFavorite);
         } else {
            let likeProducts = likeProduct.filter((likeProduct) => likeProduct.id !== detail.id);
            localStorage.setItem("likeProduct",JSON.stringify(likeProducts))
            setLikeProduct(likeProducts)
            if (likeProducts.length === 0) {
                localStorage.removeItem("likeProduct")
            }
            setLikeFavorite(!likeFavorite);
               
         }
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <img src={detail.thumbnail} width={450}/>
                </div>
                <div className="col">
                    <h3>{detail.title}</h3>
                    <input type="number" onChange={inputHandle} className="form-field" defaultValue={1} name="buyQty" min={1}/>
                    <div><button type="button" onClick={likeHandle} className={btncolor()}>{buttonname()}</button></div>
                    <div><button type="button" onClick={addToCart} className="btn btn-primary">Add to cart</button></div>
                </div>
            </div>
        </div>
    )
}
export default Detail;