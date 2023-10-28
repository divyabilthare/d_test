// import React from 'react';
// import "./NavbarStyles.css"
// import inurumLogo from '../image/inurum logo.jpeg';
// import { Link } from 'react-router-dom';

// function Navbar() {
//     const logoStyle = {
//         width: '100px', 
//         height: 'auto',
//     };
//     return (
       
//         <div className="nav">
//             <a href="/">
//                 <img src={inurumLogo} alt="Inurum Logo" style={logoStyle} />
//             </a>
//             <div className="topnav">
//                 <ul id="navbar">
                   
//                     <li><Link to="/">Home</Link></li>
//                     <li><Link to="/services">Services</Link></li>
//                     <li><Link to="/Contact">Contact Us</Link></li>
//                     <li><Link to="/about">About Us</Link></li>
//                     <li><Link to="/Blog">Blog</Link></li>
//                     <li><Link to="/Projects">Projects</Link></li>
//                     <li><a href="index.html"><button className="button">Schedule a Call</button></a></li>
//                 </ul>
//             </div>
//         </div>
       




//     );
// }

// export default Navbar;

import React, { useState } from 'react';
import './NavbarStyles.css';
import inurumLogo from '../image/inurum logo.jpeg';
import { Link } from 'react-router-dom';

function Navbar() {
  const logoStyle = {
    width: '100px',
    height: 'auto',
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="nav">
      <a href="/">
        <img src={inurumLogo} alt="Inurum Logo" style={logoStyle} />
      </a>
      <button onClick={toggleNavbar} className="menu-button">
        <div className={`menu-icon ${isOpen ? 'open' : ''}`}></div>
      </button>
      <div className={`topnav ${isOpen ? 'open' : ''}`}>
        <ul id="navbar">
          <li><Link to="/">Home</Link></li>
          <li  class="dropdown-toggle" data-toggle="dropdown" ><Link to="/services">Services</Link> <span class="caret"></span>
        
          <ul className="dropdown-menu">
            <li><Link to="/services/service1">Flutter Development</Link></li>
            <li><Link to="/services/service2">Andiord Developement</Link></li>
            <li><Link to="/services/service3">Web Development</Link></li>
            <li><Link to="/services/service4">IOT </Link></li>
          </ul>
        </li>
        

          <li><Link to="/Contact">Contact Us</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/Blog">Blog</Link></li>
          <li><Link to="/Projects">Projects</Link></li>
          <li><a href="index.html"><button className="button">Schedule a Call</button></a></li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
