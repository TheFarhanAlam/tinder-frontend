import React from 'react'
import IconButton from "@mui/material/IconButton"
import ReplayIcon from '@mui/icons-material/Replay';
import CloseIcon from '@mui/icons-material/Close';
import StarRateIcon from '@mui/icons-material/StarRate';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import "./css/SwipeButtons.css"

function SwipeButtons() {
  return (
    <div className='swipeButtons fixed flex bottom-[10vh] w-full mt-10 justify-evenly'>
        <IconButton className='swipeButtons__repeat'>
            <ReplayIcon fontSize='large'/>
        </IconButton>
        <IconButton className='swipeButtons__left'>
            <CloseIcon fontSize='large'/>
        </IconButton>
        <IconButton className='swipeButtons__star'>
            <StarRateIcon fontSize='large'/>
        </IconButton>
        <IconButton className='swipeButtons__right'>
            <FavoriteIcon fontSize='large'/>
        </IconButton>
        <IconButton className='swipeButtons__lightning'>
            <FlashOnIcon fontSize='large'/>
        </IconButton>
    </div>
  )
}

export default SwipeButtons