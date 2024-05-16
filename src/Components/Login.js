import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate()
    const loginHandler = (e) => {
        e.preventDefault()
        localStorage.setItem('token', 12345)
        navigate("/")
    }


    return (
        <div>
            <p>Login Page</p>
            <button onClick={loginHandler}> Login</button>
        </div>
    )
}

export default Login