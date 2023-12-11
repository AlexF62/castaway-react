import React from 'react';
import hostImage from '../../images/host-image.png';
import './about.scss';
import Form from '../Form/Form';
import { IoIosArrowRoundForward } from 'react-icons/io';
import Text from '../UI/Text';

const About: React.FC = () => {
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

                            <Text
                                className={'about__main-text'}
                                children={`Jacob has a background in audio engineering, and
                                has been podcasting since the early days.`}
                                style={{
                                    fontSize: '22px',
                                    fontWeight: '400',
                                    color: 'rgba(255, 255, 255, 0.70)',
                                }}
                            />

                            <Text
                                className={'about__main-desc'}
                                children={`He’s here to help you level up your game by
                                sharing everything he’s learned along the way.`}
                                style={{
                                    fontSize: '22px',
                                    fontWeight: '400',
                                    color: 'rgba(255, 255, 255, 0.70)',
                                }}
                            />
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
