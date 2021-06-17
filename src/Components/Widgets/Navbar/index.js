import { Search } from '@material-ui/icons';
import React from 'react';
import { Hero, Logo } from '../../../Assets';

import './style.css';


const Navbar = () => {

    return(
        <>
            <header>
                <nav className='navbar'>
                    <div>
                        <img src={Logo} alt='logo'/> 
                    </div>   
                    <div className='nav-links-container'>
                        <ul className='nav-links-list'>
                            <li className='nav-link-item'>HOME</li>
                            <li className='nav-link-item'>MOVIES</li>
                            <li className='nav-link-item'>TV SERIES</li>
                            <li className='nav-link-item'>DOCUMENTARIES</li>
                            <li className='nav-link-item'>MY LIST</li>
                        </ul>
                    </div>
                    <div className='nav-search-user-container'>
                        <ul className='nav-search-user-list'>
                            <li className='nav-search-user-item'>
                                <Search/>
                            </li>
                            <li className='nav-search-user-item'>
                                <img src={Hero} alt='hero'/>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        </>
    )

}

export {Navbar};