import React, { useState, useContext } from "react";
import { login } from "../services/auth.service";
import UserContext from "../store/context.store";

const Login = () =>{
    const [ email,setEmail ] = useState()
    const {state, dispatch} = useContext(UserContext);
    const [ password,setPassword ] = useState()
    const lg = async (event) =>{
        event.preventDefault();
        const user = await login(email,password)
        localStorage.setItem("state",JSON.stringify(state));
        dispatch({type: "LOGIN", payload: user})
    }

    const inputHandleEmail = (event) => {
        const email = event.target.value
        setEmail(email)
    }
    const inputHandlePassword = (event) => {
        const password = event.target.value
        setPassword(password)
    }
    return(
        <>
         <div className="container">
           <div className="row">
               <div className="col-3">
                <form onSubmit={lg}>
                    <div>
                    <label>Email</label>
                    <input type="text" onChange={inputHandleEmail} name="email" placeholder="email..."/>
                    </div>
                    <div>
                    <label>Password</label>
                    <input type="password" onChange={inputHandlePassword} name="password" placeholder="password..."/>
                    </div>
                    <div>
                        <button type="submit" className="btn btn-primary">Login</button>
                    </div>
                    </form>
               </div>
            </div>
        </div>
        </>
    )
}
export default Login;