import React from 'react'
import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom'

const Header = () => {

    const navigate = useNavigate();

    return (
        <div>
            <nav className='navbar navbar-expand-lg navbar-light shadow'>
                <div className="container">
                    <Link to={'/'} className='navbar-brand fw-bold fs-2 font-pacifico'>Happenings</Link>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item pe-3">
                                <NavLink to={'/'} className="nav-link fw-500">Home</NavLink>
                            </li>
                            <li className="nav-item pe-3">
                                <NavLink to={'/events'} className="nav-link fw-500">Events</NavLink>
                            </li>
                            <li className="nav-item pe-3">
                                <NavLink to={'/contact'} className="nav-link fw-500">Contact</NavLink>
                            </li>
                            <li className="nav-item pe-3">
                                <NavLink to={'/about-us'} className="nav-link fw-500">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <button className="btn btn-dark ms-3 px-4 rounded-pill d-flex align-items-center py-2" onClick={() => navigate('auth/register')}>
                                    Register
                                    <i className="material-icons ms-2">how_to_reg</i>
                                </button>
                            </li>
                            <li className="nav-item">
                                <button className="btn btn-dark ms-3 px-4 rounded-pill d-flex align-items-center py-2" onClick={() => navigate('auth/login')}>
                                    Login
                                    <i className="material-icons ms-2">login</i>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <Outlet />
        </div>
    )
}

export default Header