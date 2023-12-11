import React, { useState } from 'react';
import logoImg from '../../images/logo.svg';
import './header.scss';

const Header: React.FC = () => {

           interface MenuItem{
             link: string;
             text: string;
           }

    const [isNavOpen, setNavOpen] = useState(false);

    const handleClick = () => {
        setNavOpen(!isNavOpen);
    };

    const handleNavLinkClick = () => {
        setNavOpen(!isNavOpen);
    };

    const mockedMenuItems: MenuItem[] = [
        {
            link: '#home',
            text: 'Home',
        },

        {
            link: '#latest',
            text: 'Episodes',
        },
        {
            link: '#about',
            text: 'About',
        },
        {
            link: '#contact',
            text: 'Contact',
        },
    ];

    return (
        <header className='header'>
            <div className='container'>
                <div className='nav-body header__top'>
                    <div className='logo'>
                        <img
                            src={logoImg}
                            alt='logo-images'
                            className='logo__img'
                        />
                    </div>
                    <nav
                        data-nav
                        className={`menu header-nav ${
                            isNavOpen ? 'header-nav--click' : ''
                        }`}
                    >
                        <ul className='menu__list'>
                            {mockedMenuItems.map((item, index) => (
                                <li
                                    className='menu__list-item'
                                    onClick={handleNavLinkClick}
                                    key={index}
                                >
                                    <a href={item.link} className='menu__link'>
                                        {item.text}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <button
                        className={`burger ${
                            isNavOpen ? 'burger--active' : ''
                        }`}
                        onClick={handleClick}
                        data-burger
                        aria-label='Open menu'
                        aria-expanded='false'
                    >
                        <span className='burger__burger-line'></span>
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;



