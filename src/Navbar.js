import React from 'react';
import {BiHomeAlt} from 'react-icons/bi';
import {FaStickyNote} from 'react-icons/fa';
import {BsPersonCircle} from 'react-icons/bs'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='Navbar'>
        <Link to='/'><button><BiHomeAlt/></button></Link>
        <Link to='/blog'><button><FaStickyNote/></button></Link>
        <button><BsPersonCircle/></button>
    </div>
  )
}

export default Navbar