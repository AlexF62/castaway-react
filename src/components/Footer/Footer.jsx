/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import instagramImage from '../icons/instagram.svg';
import twitterImage from '../icons/twitter.svg';
import facebookImage from '../icons/facebook.svg';
import footerSpotify from '../icons/spotify.svg';
import oneSignalfooter from '../icons/onesignal.svg';
import cloudFooter from '../icons/cloud.svg';
import appleFooter from '../icons/apple-podcast.svg';
import aolRadioFooter from '../icons/aol-radio.svg';
import './footer.scss';
import footerLogo from '../icons/logo.svg';
const Footer = () => {
  return (
    <footer id="contact" className="footer">
      <div className="container">
        <div className=" footer__inner">
          <div className=" footer__icons">
            <img className="footer__img" src={footerLogo} alt="logo" />
            <div className=" footer__icons-item">
              <a className="footer__social-link" href="#">
                <img src={instagramImage} alt="instagram" />
              </a>

              <a className="footer__social-link" href="#">
                <img src={twitterImage} alt="twitter" />
              </a>
              <a className="footer__social-link" href="#">
                <img src={facebookImage} alt="facebook" />
              </a>
            </div>
          </div>

          <div className="footer-header footer__header">
            <nav data-nav className="footer-nav footer__menu">
              <ul className=" footer__menu-list">
                {/* тут можно переиспользовать компонент навЛинк, который ты создашь */}
                <li className="footer__menu__list-item">
                  <a href="#home" className=" footer__menu__list-link">
                    Home
                  </a>
                </li>
                <li className="footer__menu__list-item">
                  <a href="#latest" className=" footer__menu__list-link">
                    Episodes
                  </a>
                </li>
                <li className="footer__menu__list-item">
                  <a href="#about" className="footer__menu__list-link">
                    About
                  </a>
                </li>
                <li className="footer__menu__list-item">
                  <a href="#contact" className=" footer__menu__list-link">
                    Contact
                  </a>
                </li>
              </ul>
              <ul className="footer__menu-list">
                <li className="footer__menu__list-item">
                  <a href="#" className=" footer__menu__list-link">
                    Style Guide
                  </a>
                </li>
                <li class="footer__menu__list-item">
                  <a href="#" className=" footer__menu__list-link">
                    Instructions
                  </a>
                </li>
                <li className="footer__menu__list-item">
                  <a href="#" className=" footer__menu__list-link">
                    Changelog
                  </a>
                </li>
                <li className="footer__menu__list-item">
                  <a href="#" className=" footer__menu__list-link">
                    Credit
                  </a>
                </li>
                <li className="footer__menu__list-item">
                  <a href="#" className=" footer__menu__list-link">
                    Powered by Webflow
                  </a>
                </li>
                <li className="footer__menu__list-item">
                  <a href="#" className=" footer__menu__list-link">
                    Licenses
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div className=" footer__social-icons">
            <a className="footer__social-link" href="#">
              <img src={footerSpotify} alt="spotify" />
            </a>
            <a className="footer__social-link" href="#">
              <img src={oneSignalfooter} alt="Onesignal push" />
            </a>
            <a className="footer__social-link" href="#">
              <img src={cloudFooter} alt="cloud" />
            </a>
            <a className="footer__social-link" href="#">
              <img src={appleFooter} alt="Apple_podcasts" />
            </a>
            <a className="footer__social-link" href="#">
              <img src={aolRadioFooter} alt="AOL Radio" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
