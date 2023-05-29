import React from "react";

const Register = () =>{
    return(
        <>
         <div className="container">
           <div className="row">
               <div className="col-6">
                <form>
                    <div>
                    <label>Name</label>
                    <input type="text" placeholder="name..."/>
                    </div>
                    <div>
                    <label>Email</label>
                    <input type="text" placeholder="email..."/>
                    </div>
                    <div>
                    <label>Password</label>
                    <input type="password" placeholder="password..."/>
                    </div>
                    <div>
                    <label>Confirm password</label>
                    <input type="password" placeholder="confirm password..."/>
                    </div>
                    <div>
                        <button type="submit" className="btn btn-primary">Register</button>
                    </div>
                </form>
               </div>
            </div>
        </div>
        </>
    )
}
export default Register;