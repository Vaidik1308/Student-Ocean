import React from 'react';
import {FaAlignCenter,FaMoon} from 'react-icons/fa';
// import {BiSearch} from 'react-icons/bi';
// import styled from 'styled-components';

const Header = () => {
  return (
    <div className='header-container'>
        <div className='header-left'>
            <div className='menu-bar'>
                <button><FaAlignCenter/></button>
            </div>
            <div className='header-heading'>
                <h1>Student Ocean</h1>
            </div>
            
        </div>
        <div className='header-right'>
            <div className='theme-change'>
                <button><FaMoon/></button>
            </div>
            {/* <div className='add-more'>
            <button><FaPlusCircle/></button>
            </div>
            <div className='notification-icon'>
            <button><FaBell/></button>
            </div> */}
            <div className='profile'>
                <p>Vaidik</p>
            </div>
        </div>
    </div>
  )
}

export default Header

