import React from 'react';
import hostImage from '../../images/host-image.png';
import './about.scss';
import Form from '../Form/Form';
import { IoIosArrowRoundForward } from 'react-icons/io';

const About = () => {
    return (
        <>
            <section id='section' className='section'>
                <div className='container'>
                    <div className='about__inner'>
                        <div className='about__main'>
                            <div className='about__main-circle'>
                                <IoIosArrowRoundForward
                                    style={{
                                        width: '600px',
                                        height: '400px',
                                    }}
                                />
                            </div>
                            <h3 className='about__main-subtitle'>
                                Meet your host
                            </h3>
                            <h2 className=' about__main-name'>
                                Jacob Paulaner
                            </h2>
                            <span className='about__main-text'>
                                Jacob has a background in audio engineering, and
                                has been podcasting since the early days.
                            </span>
                            <span className='about__main-desc'>
                                He’s here to help you level up your game by
                                sharing everything he’s learned along the way.
                            </span>
                        </div>

                        <div className='about__image'>
                            <img src={hostImage} alt='host_image' />
                        </div>
                    </div>
                    <Form />
                </div>
            </section>
        </>
    );
};

export default About;
