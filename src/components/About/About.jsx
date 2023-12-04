import React from 'react';
import hostImage from '../icons/host-image.png';
import './about.scss';
import Form from '../Form/Form';
import { IoIosArrowRoundForward } from 'react-icons/io';

const About = () => {
  return (
    <>
      <section id="section" className="section">
        <div className="container">
          <div className=" about__inner ">
            <div className=" about__main">
              <div className=" about__main-circle">
                <IoIosArrowRoundForward
                  style={{
                    width: '600px',
                    height: '400px',
                  }}
                />
              </div>
              {/* это h3 */}
              <div className=" about__main-subtitle">Meet your host</div>
              {/* это h2  */}
              <div className=" about__main-name">Jacob Paulaner</div>
              {/* это span */}
              <div className=" about__main-text ">
                Jacob has a background in audio engineering, and has been podcasting since the early
                days.
              </div>
              <div className=" about__main-desc">
                He’s here to help you level up your game by sharing everything he’s learned along
                the way.
              </div>
            </div>

            <div className=" about__image">
              <img src={hostImage} alt="host_image" />
            </div>
          </div>
          <Form />
        </div>
      </section>
    </>
  );
};

export default About;
