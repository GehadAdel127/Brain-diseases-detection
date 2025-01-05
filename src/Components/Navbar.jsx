import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <div className='navbar'>
            <Link to='/'>
                <div className="icon">
                    <img src="../images/icon.png" alt="icon" />
                    <h2>Storyline Haven</h2>
                </div>
            </Link>
            <div className="links">
                <Link to='/'>Home</Link>
                <Link to='/blogs'>Blogs</Link>
                <Link to='/add-article'>Add New Blog</Link>
                <Link to='/signup'>SignUp</Link>
            </div>
        </div>
    )
}

export default Navbar