import React from 'react'
import Profile from './Profile'
import Bookmark from './Bookmark'
import logo from '../image/logo.svg';
import './Header.css';


export default function Header() {
  
  return (
    <div className='headerArea'>
      <div className='nav'>
        <img src={logo} alt='logo' />
        <Profile/>
      </div>
      <div>
        <Bookmark/>
      </div>
    </div>
  )
}
