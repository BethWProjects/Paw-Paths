import React from 'react'
import './Nav.css'
import pawLogo from '../../pawLogo.png'
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
      <div className="nav-container">
        <img className="pawLogo" src={pawLogo} alt="tree and path logo" />
        <div className="title-div">
          <h1 className="title">Paw Paths</h1>
          <p className="tagline">For the walks you haven't taken yet...</p>
        </div>       
      </div>
    );
}

export default Nav