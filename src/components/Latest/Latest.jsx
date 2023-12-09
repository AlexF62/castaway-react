import React from 'react';
import './latest.scss';
import EpisodesCard from '../EpisodesCards/EpisodesCard';
import episodesData from '../utils/episodesMock.js';
import Text from '../UI/Text.jsx';
import Button from '../UI/Button.jsx';

const Latest = () => {
    return (
        <section id='latest' className='latest'>
            <div className='container'>
                <div className=' latest__inner'>
                    <div className=' latest__text'>
                        <div className=' latest__text-left'>
                            <Text
                                text={'Latest episodes'}
                                className={' latest__text-title'}
                            />
                        </div>
                        <div className=' latest__button'>
                            <Button
                                className={'latest__button-text'}
                                children={'View all episodes'}
                            />
                        </div>
                    </div>
                    {episodesData.map((episode) => (
                        <EpisodesCard key={episode.id} episode={episode} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Latest;
