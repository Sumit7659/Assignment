import React from 'react';
import './Navbar.css'
import {Link} from 'react-router-dom'
function Navbar() {
  return (
    <>
    <nav className='navbar'>
        <div className='navbar-container'>
            <div className='section'>
            <div className='section01' >
                <Link to='/' className='navbar-link' ><i className="fa-solid fa-truck" /> <span>Free Delivery</span></Link> &nbsp;&#8739; &nbsp;
                <Link to='/'className='navbar-link'><span>Return Policy</span></Link> 
            </div> 
            <div className='section02'>
                <Link to='/' className='navbar-link'><span>Login</span></Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Link to='/' className='navbar-link'><span>Follow US</span> </Link>&nbsp;&nbsp;&nbsp;&nbsp;
                <Link to='/' className='navbar-link'><i className="fa-brands fa-facebook-f"/></Link>&nbsp;&nbsp;
                <Link to='/' className='navbar-link'><i className="fa-brands fa-linkedin-in"/></Link>&nbsp;&nbsp;
                <Link to='/' className='navbar-link'><i className="fa-brands fa-twitter"/></Link>&nbsp;&nbsp;
                <Link to='/' className='navbar-link'><i className="fa-brands fa-instagram"/></Link>&nbsp;&nbsp;
            </div>
            </div>
        </div>
    </nav>
    </>
)
}

export default Navbar
