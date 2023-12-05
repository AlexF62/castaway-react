/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import homeBg from '../../images/top-img.png';

import './home.scss';
import SocialIcons from '../SocialIcons/SocialIcons';
const Home = () => {
    return (
        <section id='home' className='home'>
            <div className='container'>
                <div className='home__inner'>
                    <div className='home__img'>
                        <img src={homeBg} alt='' />
                    </div>
                    <div className='home__block'>
                        <div className='home__block-subtitle'>
                            Take your podcast to the{' '}
                            <span className='next'>next</span>{' '}
                            <span className='level'>level</span>
                        </div>
                        <div className='home__social'>
                            <div className='home__social-text'>Listen on</div>
                            <div className='home__social-items'>
                                <SocialIcons />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;
