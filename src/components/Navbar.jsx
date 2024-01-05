import React from 'react'
import imgg4 from './images/logo.jpeg'; 


const Navbar = () => {
  return (
    <>
      <header className="showcase">
      <nav id="Navbar">
        <div className="logo">
          <img src={imgg4} alt="img" /><br />
          <i><b>BFC</b></i>
        </div>
        <div className="navbar">
          <a href="#">Home</a>
          <a href="#">Features</a>
          <a href="#">JoinUs</a>
          <a href="#">Contact</a>
        </div>
      </nav>
    </header>
    </>
  )
}

export default Navbar
