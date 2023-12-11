import React from 'react';
import Text from '../UI/Text';


interface EpisodeCardProps {
    episode: {
        imageSrc: string;
        text: string;
        number:string;
        subtitle: string;
        description: string
    }
}

const EpisodesCard: React.FC<EpisodeCardProps> = ({ episode }) => (
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
                <Text
                    className={'episodes__main-text'}
                    children={episode.text}
                />
                <Text
                    className={'episodes__main-number'}
                    children={episode.number}
                />
                <Text
                    className={'episodes__main-subtitle'}
                    children={episode.subtitle}
                />
                <Text
                    className={'episode.description'}
                    children={episode.description}
                />
                <button className='episodes__main-link'>
                    View Episode Details
                </button>
            </div>
        </div>
    </div>
);

export default EpisodesCard;




