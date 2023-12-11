import React from 'react';
import './latest.scss';
import EpisodesCard from '../EpisodesCards/EpisodesCard';
import episodesData from '../utils/episodesMock';
import Text from '../UI/Text';
import Button from '../UI/Button';

interface Episode {
    imageSrc: string;
    id: number;
    text: string;
    number: string;
    subtitle: string;
    description: string;
}

const Latest: React.FC = () => {
    return (
        <section id='latest' className='latest'>
            <div className='container'>
                <div className=' latest__inner'>
                    <div className=' latest__text'>
                        <div className=' latest__text-left'>
                            <Text
                                children={'Latest episodes'}
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
                    {episodesData.map((episode:Episode) => (
                        <EpisodesCard key={episode.id} episode={episode} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Latest;

