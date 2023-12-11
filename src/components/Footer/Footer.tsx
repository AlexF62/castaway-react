/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import instagramImage from '../../images/instagram.svg';
import twitterImage from '../../images/twitter.svg';
import facebookImage from '../../images/facebook.svg';
import './footer.scss';
import footerLogo from '../../images/logo.svg';
import NavLink from '../NavLink/NavLink';
import SocialIcons from '../SocialIcons/SocialIcons';
import { menuItems } from '../utils/menuItems';

const Footer: React.FC = () => {
    const socialNetworks:any[] = [
        'spotify',
        'apple',
        'cloud',
        'aolRadio',
        'oneSignal',
    ];

    return (
        <footer id='contact' className='footer'>
            <div className='container'>
                <div className=' footer__inner'>
                    <div className=' footer__icons'>
                        <img
                            className='footer__img'
                            src={footerLogo}
                            alt='logo'
                        />
                        <div className=' footer__icons-item'>
                            <a className='footer__social-link' href='#'>
                                <img src={instagramImage} alt='instagram' />
                            </a>

                            <a className='footer__social-link' href='#'>
                                <img src={twitterImage} alt='twitter' />
                            </a>
                            <a className='footer__social-link' href='#'>
                                <img src={facebookImage} alt='facebook' />
                            </a>
                        </div>
                    </div>

                    <div className='footer-header footer__header'>
                        <nav data-nav className='footer-nav footer__menu'>
                            <NavLink menuItems={menuItems} />
                        </nav>
                    </div>

                    <div className=' footer__social-icons'>
                        <SocialIcons socialNetworks={socialNetworks} />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;


