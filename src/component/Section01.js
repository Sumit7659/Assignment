import React, { useState, useEffect } from 'react';
// import { Button } from './button';
import { Link } from 'react-router-dom';
import './Section01.css';

function Section01() {
  const [click, setClick] = useState(false);
  // const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  // const showButton = () => {
  //   if (window.innerWidth <= 960) {
  //     setButton(false);
  //   } else {
  //     setButton(true);
  //   }
  // };

  // useEffect(() => {
  //   // showButton();
  // }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='Section01'>
        <div className='Section01-container'>
          <Link to='/' className='Section01-logo' onClick={closeMobileMenu}>
            ShopKart
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ?<i class="fa-solid fa-xmark"/> : <i class="fa-solid fa-bars"/>} />
          </div>
          <ul className={click ? 'Section01-menu active' : 'Section01-menu'}>
            <li className='Section01-item'>
              <Link to='/' className='Section01-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='Section01-item'>
              <Link
                to='/'
                className='Section01-links'
                onClick={closeMobileMenu}
              >
                Services
              </Link>
            </li>
            {/* <div class="Section01-items">
  <Link class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Our Products
  </Link>
  
</div> */}
            <li className='Section01-item'>
              <Link
                to='/'
                className='Section01-links'
                onClick={closeMobileMenu}
              >
                Our Products
                
              </Link>
            </li>
            <li className='Section01-item'>
              <Link
                to='/'
                className='Section01-links'
                onClick={closeMobileMenu}
              >
                Contact Us
              </Link>
            </li>
            <li className='Section01-item'>
              <Link
                to='/'
                className='Section01-links'
                onClick={closeMobileMenu}
              >
                WishList(0)
              </Link>
            </li>
            <li className='Section01-item'>
              <Link
                to='/'
                className='Section01-links'
                onClick={closeMobileMenu}
              >
                Bag(0)
              </Link>
            </li>
          </ul>
          {/* {button && <Button buttonStyle='btn--outline'></Button>} */}
        </div>
      </nav>
    </>
  );
}

export default Section01;