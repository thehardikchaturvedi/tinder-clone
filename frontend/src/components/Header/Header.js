import React from 'react'
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';
import IconButton from '@material-ui/core/IconButton';
import './Header.css'
const Header = () => {
    return (

        <div className='header'>
            <IconButton>
                <PersonIcon fontSize="large" className='header__icon'></PersonIcon>    
            </IconButton>
            <img className='header__logo' src='https://1000logos.net/wp-content/uploads/2018/07/tinder-logo.png' alt='tinder-logo'/>
            <IconButton>
                <ForumIcon fontSize="large" className='header__icon'></ForumIcon>    
            </IconButton>        
        </div>
    )
}

export default Header
