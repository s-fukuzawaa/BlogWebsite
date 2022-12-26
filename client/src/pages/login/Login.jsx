import "./login.css"
import { Link } from 'react-router-dom';
import { useContext, useRef } from "react";
import { Context } from "../../context/Context";
import axios from "axios";

export default function Login() {
    const userRef = useRef();
    const passwordRef = useRef();
    const { dispatch, isFetching } = useContext(Context)
    const handleSubmit = async (e) =>{
        e.preventDefault()
        dispatch({type:"LOGIN_START"});
        try{
            const res = await axios.post("/auth/login", {
                username: userRef.current.value,
                password: passwordRef.current.value
            });
            dispatch({type:"LOGIN_SUCCESS", payload: res.data});
        }catch(err) {
            dispatch({type: "LOGGIN_FAILURE"})
        }
    }
    return (
        <div className="login">
            <span className="loginTitle">Login</span>
            <form action="" className="loginForm" onSubmit={handleSubmit}>
                <label>Username</label>
                <input ref={userRef} type="text" className="loginInput" placeholder="Enter your username..."/>
                <label>Password</label>
                <input ref={passwordRef} type="password" className="loginInput" placeholder="Enter your password..."/>
                <button className="loginButton" type="submit" disabled={isFetching}>Login</button>
            </form>
            <button className="loginRegisterButton">
                <Link className="link" to="/register">Register</Link>
            </button>
        </div>
    )
}