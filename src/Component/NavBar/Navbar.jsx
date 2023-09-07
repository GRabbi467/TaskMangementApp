import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <div className='nav'>
            <div className='logo'>
                <h1><Link to='/'>TASK MANAGER</Link></h1>

            </div>
            <div className='nav_link'>
            <ul>
                <li><Link to = '/Login'>Login</Link></li>
                <li> <Link to = '/dashboard'>Dashboard</Link></li>
            </ul>
            </div>
        </div>
    );
};

export default Navbar;