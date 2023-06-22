import React, { useState, useContext } from "react";
import { login } from "../services/auth.service";
import UserContext from "../store/context.store";
import api from "../services/api";

const Login = (props) => {
    const [email, setEmail] = useState()
    const { state, dispatch } = useContext(UserContext);
    const [password, setPassword] = useState()
    const lg = async (event) => {
        event.preventDefault();
        const user = await login(email, password)
        localStorage.setItem("state", JSON.stringify(state));
        dispatch({ type: "LOGIN", payload: user })
        api.defaults.headers.common["Authorization"] = `Bearer ${user.token}`
        console.log(user)
    }

    const inputHandleEmail = (event) => {
        const email = event.target.value
        setEmail(email)
    }
    const inputHandlePassword = (event) => {
        const password = event.target.value
        setPassword(password)
    }
    const [file, setFile] = useState();
    const [fileUrl, setFileUrl] = useState();
    const avatar = fileUrl ? <img src={fileUrl} width={80} /> : null;
    const uploadFile = (e) => {
        const f = e.target.files[0];
        setFile(f);
    }

    const submitUpload = async () => {
        dispatch({ type: "SHOW_LOADING" });
        const url = "upload/image";
        const formData = new FormData();
        formData.append("image", file);
        const config = {
            headers: {
                "content-type": "multipart/form-data"
            }
        };
        const rs = await api.post(url, formData, config);
        setFileUrl(rs.data);

        dispatch({ type: "HIDE_LOADING" });
    }
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-3">
                        <form onSubmit={lg}>
                            <div>
                                <label>Email</label>
                                <input type="text" onChange={inputHandleEmail} name="email" placeholder="email..." />
                            </div>
                            <div>
                                <label>Password</label>
                                <input type="password" onChange={inputHandlePassword} name="password" placeholder="password..." />
                            </div>
                            <div className="mb-3">
                                <label for="avatar" className="form-label">Avatar
                                    {avatar}
                                </label>
                                <div class="input-group">
                                    <input type="file" onChange={uploadFile} name="avatar" class="form-control" id="avatar" />
                                    <button onClick={submitUpload} class="btn btn-outline-secondary" type="button">Upload</button>
                                </div>
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