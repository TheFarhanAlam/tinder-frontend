import React from 'react'
import PersonIcon from '@mui/icons-material/Person'
import AddIcon from '@mui/icons-material/Add';
import { IconButton } from '@mui/material'
import "./css/Header.css"
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className='header flex items-center justify-between z-[100] border-b-[1px] border-[#f9f9f9] '>
        <IconButton>
          <Link to="/">
        <PersonIcon fontSize="large" className="header__icon"/>
          </Link>
        </IconButton>
        <img className='header__logo object-contain h-[40px]' src="https://logos-world.net/wp-content/uploads/2020/09/Tinder-Emblem.png" alt="" />
        <IconButton>

        <Link to="/add"><AddIcon fontSize='large' className='header__icon'/>
        </Link>
        </IconButton>
    </div>
  )
}

export default Header