import React from 'react';

import './latest.scss';

import EpisodesCard, { episodesData } from '../EpisodesCards/EpisodesCard.jsx';

const Latest = () => {
    return (
        <section id='latest' className='latest'>
            <div className='container'>
                <div className=' latest__inner'>
                    <div className=' latest__text'>
                        <div className=' latest__text-left'>
                            <div className=' latest__text-title'>
                                Latest episodes
                            </div>
                        </div>
                        <div className=' latest__button'>
                            <button className=' latest__button-text'>
                                View all episodes
                            </button>
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
