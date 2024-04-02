import React from 'react';
import '../styles/Navbar.css'
const NavBar = () => {
    return (
        <>
            <nav>
                <div className="logo">
                    <img src="/Images/nike.jpg" alt="" />
                </div>
                <ul>
                    <li href='#'>Home</li>
                    <li href='#'>Services</li>
                    <li href='#'>About</li>
                    <li href='#'>Contact</li>
                </ul>
                <button>Login</button>
            </nav>
            <div />
        </>
    )
}

export default NavBar
