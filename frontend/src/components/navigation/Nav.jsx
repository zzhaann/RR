import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout, reset } from '../../features/auth/authSlice';
import { toast } from 'react-toastify';

const Nav = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { user } = useSelector((state) => state.auth);

    const handleLogout = () => {
        dispatch(logout());
        dispatch(reset());
        navigate("/");
    };

    return (
        <nav className="navbar">
            <NavLink className="logo" to="/">
                <img src="../../../navigation/logo.png" alt="logo" className="logo-img" />
                <span className="logo-text">CapyWorld</span>
            </NavLink>
            <ul className="nav-links">
                {user ? (
                    <>
                        <NavLink className='nav-childs' to="/" onClick={handleLogout}>Logout</NavLink>
                    </>
                ) : (
                    <>

                    </>
                )}
            </ul>
        </nav>
    );
};

export default Nav;
