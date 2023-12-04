import React from 'react';

import './latest.scss';

import EpisodesCard, { episodesData } from '../EpisodesCards/EpisodesCard.jsx';

const Latest = () => {
  return (
    <section id="latest" className="latest">
      <div className="container">
        <div className=" latest__inner">
          <div className=" latest__text">
            <div className=" latest__text-left">
              <div className=" latest__text-title">Latest episodes</div>
            </div>
            {/* чтобы не было проблем с разметкой установи расширение prettier и в настройках включи опцию format on save */}
            <div className=" latest__button">
              {/* поскольку кнопка с такими стилями переиспользуется в нескольких местах, 
              лучше вынести ее в отдельный компонент который будет тупым, 
              то есть просто принимает пропсы и отображает кнопку, особой логики там не должно быть за некоторыми исключениями 
              создай папку "UI" и храни там просто юайные компоненты, которые часто переиспользуется, например кнопки, инпуты, чекбоксы и тд
              */}
              <button className=" latest__button-text">View all episodes</button>
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
