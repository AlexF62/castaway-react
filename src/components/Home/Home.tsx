import React from 'react';
import homeBg from '../../images/top-img.png';
import './home.scss';
import SocialIcons from '../SocialIcons/SocialIcons';
import Text from '../UI/Text';

const Home: React.FC = () => {
    const socialNetworks:any[] = [
        'spotify',
        'apple',
        'cloud',
        'aolRadio',
        'oneSignal',
    ];
    return (
        <section id='home' className='home'>
            <div className='container'>
                <div className='home__inner'>
                    <div className='home__img'>
                        <img src={homeBg} alt='' />
                    </div>
                    <div className='home__block'>
                        <div className='home__block-subtitle'>
                            Take your podcast to the
                            <span className='next'>next</span>
                            <span className='level'>level</span>
                        </div>
                        <div className='home__social'>
                            <Text
                                className={'home__social-text'}
                                children={'Listen on'}
                            />
                            <div className='home__social-items'>
                                <SocialIcons socialNetworks={socialNetworks} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;



