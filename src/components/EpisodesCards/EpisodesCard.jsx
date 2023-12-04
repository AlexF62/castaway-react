import React from 'react';

// такие замоканные данные лучше выносить отдельно, создай папку utils и в файле c названием к примеру episodesMock
export const episodesData = [
  {
    id: 1,
    imageSrc: '/public/episode3-image.jpg',
    text: 'Gear',
    number: 'Episode 3',
    subtitle: 'Should you get outboard audio gear?',
    description:
      'Is hardware really worth it when it comes to podcasting? The answer is...it depends. Here’s our reasons on why you might want to consider picking something up.',
  },
  {
    id: 2,
    imageSrc: '/episode2-image.jpg',
    text: 'Tips&Tricks',
    number: 'Episode 2',
    subtitle: 'Mic tricks to take you to the next level',
    description:
      'Stop rolling with those default settings on your mic. These small tweaks will take you from sounding good to great.',
  },
  {
    id: 3,
    imageSrc: '/episode2-image.jpg',
    text: 'Gear',
    number: 'Episode 1',
    subtitle: 'The best microphone under $200',
    description:
      'With so many microphones on the market, how are you supposed to know what’s the best? Take a look at our top picks.',
  },
];

const EpisodesCard = ({ episode }) => (
  <div className="episodes">
    <div className="episodes__inner">
      <div className="episodes__item">
        <img className="episodes__image" src={episode.imageSrc} alt="episodes_image" />
      </div>
      <div className="episodes__main">
        <div className="episodes__main-text">{episode.text}</div>
        <div className="episodes__main-number">{episode.number}</div>
        <div className="episodes__main-subtitle">{episode.subtitle}</div>
        <div className="episodes__main-desc">{episode.description}</div>
        <button className="episodes__main-link">View Episode Details</button>
      </div>
    </div>
  </div>
);

export default EpisodesCard;
