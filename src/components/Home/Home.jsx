/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

// если свгшки не являются компонентами и в них не прокидываются пропсы по типу ширины, высоты или цвет, то их лучше поместить в папку public
import spotify from '../icons/spotify.svg';
import oneSignal from '../icons/onesignal.svg';
import cloud from '../icons/cloud.svg';
import applePodcast from '../icons/apple-podcast.svg';
import aolRadio from '../icons/aol-radio.svg';
import homeBg from '../icons/top-img.png';

import './home.scss';

// обертка для иконок соц сетей помимо того, что здесь повторяется, так еще и переиспользуется в футере, поэтому лучше вынести в отдельный компонент
// будет компонент к примеру SocialIcons.jsx, который принимает массив строк соц сетей, иконки которых ты хочешь отобразить
// и внутри этого компонента ты уже будешь мапить этот массив и возвращать jsx элементы с иконками
// const SocialIcons: React.FC<{ socialNetworks: string[] }> = ({ socialNetworks }) => {
//   const iconsObj = {
//     spotify: {
//         imgLink: '',
//         name: '',
//         href: '',
//     },
//     ...
//   };

//   return (
//     <>
//       {socialNetworks.map((social) => (
//         <a key={} className="home__social-link" href={iconsObj[social].href}>
//           <img src={iconsObj[social].iconsObj} alt={iconsObj[social].iconsObj} />
//         </a>
//       ))}
//     </>
//   );
// };

const Home = () => {
  return (
    <section id="home" className="home">
      <div className="container">
        <div className="home__inner">
          <div className="home__img">
            <img src={homeBg} alt="" />
          </div>
          <div className="home__block">
            <div className="home__block-subtitle">
              Take your podcast to the <span className="next">next</span>{' '}
              <span className="level">level</span>
            </div>
            <div className="home__social">
              <div className="home__social-text">Listen on</div>
              <div className="home__social-items">
                <a className="home__social-link" href="#">
                  <img src={spotify} alt="spotify" />
                </a>
                <a className="home__social-link" href="#">
                  <img src={oneSignal} alt="One signal" />
                </a>
                <a className="home__social-link" href="#">
                  <img src={cloud} alt="cloud" />
                </a>
                <a className="home__social-link" href="#">
                  <img src={applePodcast} alt="Apple podcasts" />
                </a>
                <a className="home__social-link" href="#">
                  <img src={aolRadio} alt="AOL Radio" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
