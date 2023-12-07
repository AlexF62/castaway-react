import React from 'react';

const EpisodesCard = ({ episode }) => (
    <div className='episodes'>
        <div className='episodes__inner'>
            <div className='episodes__item'>
                <img
                    className='episodes__image'
                    src={episode.imageSrc}
                    alt='episodes_image'
                />
            </div>
            <div className='episodes__main'>
                <span className='episodes__main-text'>{episode.text}</span>
                <span className='episodes__main-number'>{episode.number}</span>
                <span className='episodes__main-subtitle'>
                    {episode.subtitle}
                </span>
                <span className='episodes__main-desc'>
                    {episode.description}
                </span>
                <button className='episodes__main-link'>
                    View Episode Details
                </button>
            </div>
        </div>
    </div>
);

export default EpisodesCard;
