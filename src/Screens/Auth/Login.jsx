import React from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();

    return (
        <div className="container py-3">
            <h1 className='d-flex align-items-center'>
                <button className="btn d-flex align-items-center justify-content-center me-2" onClick={() => navigate('/')}>
                    <i className="material-icons">arrow_back</i>
                </button>
                Login
            </h1>
        </div>
    )
}

export default Login