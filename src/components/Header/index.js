// Header.jsx
import React, { useState } from 'react';
import { HiMenu, HiOutlineUser, HiOutlineHeart, HiOutlineSearch,HiOutlineShoppingBag, HiChevronDown } from "react-icons/hi";
import './index.css';

const Header = () => {
    const [navOpen, setNavOpen] = useState(false);

    const toggleNav = () => {
        setNavOpen(!navOpen);
    };

    return (
        <header className="header">
            <picture>
              <source 
                media="(min-width: 768px)" 
                srcSet="https://res.cloudinary.com/dfxtnqgcz/image/upload/v1734010599/Desktop_Strip_vcvq4w.png" 
              />
              <source 
                media="(max-width: 768px)" 
                srcSet="https://res.cloudinary.com/dfxtnqgcz/image/upload/v1734010599/mobile_Strip_iggirt.png" 
              />
              <img 
                className="gray-strip" 
                src="https://res.cloudinary.com/dfxtnqgcz/image/upload/v1734010599/Desktop_Strip_vcvq4w.png" 
                alt="gray strip"
              />
            </picture>
            <div className="desktop-view">
                <div className="top-section">
                    <img className='logo-image' src='https://res.cloudinary.com/dfxtnqgcz/image/upload/v1734017022/Logo_npy9qg.png' alt='logo'/>
                    <div className="logo">LOGO</div>
                    <div className="header-icons">
                      <HiOutlineSearch size={25}/>
                      <HiOutlineHeart size={25} />
                      <HiOutlineShoppingBag size={25} />
                      <HiOutlineUser size={25} />
                        <span className="icon lang-dropdown">ENG <HiChevronDown size={16}/></span>
                    </div>
                </div>
                <nav className="nav-menu">
                    <a href="#shop">SHOP</a>
                    <a href="#skills">SKILLS</a>
                    <a href="#stories">STORIES</a>
                    <a href="#about">ABOUT</a>
                    <a href="#contact">CONTACT US</a>
                </nav>
            </div>
            <div className="mobile-view">
                <div className="top-section">
                    <div className="menu-icon" >
                      <button className="menu-button" onClick={toggleNav}>
                        <HiMenu size={20}/>
                      </button>
                    <img className='logo-image' src='https://res.cloudinary.com/dfxtnqgcz/image/upload/v1734017022/Logo_npy9qg.png' alt='logo'/>
                    </div>
                    
                    <div className="logo">LOGO</div>
                    <div className="header-icons">
                      <HiOutlineSearch size={20} />
                      <HiOutlineHeart size={20} />
                      <HiOutlineShoppingBag size={20} />
                    </div>
                </div>
                <nav className={`nav-menu ${navOpen ? 'open' : ''}`}>
                    <a href="#shop">SHOP</a>
                    <a href="#skills">SKILLS</a>
                    <a href="#stories">STORIES</a>
                    <a href="#about">ABOUT</a>
                    <a href="#contact">CONTACT US</a>
                </nav>
            </div>
        </header>
    );
}

export default Header;
