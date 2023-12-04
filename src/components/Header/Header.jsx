import { useState } from 'react';
import logoImg from '../icons/logo.svg';
import './header.scss';

const Header = () => {
  const [isNavOpen, setNavOpen] = useState(false);

  const handleClick = () => {
    setNavOpen(!isNavOpen);
  };

  const handleNavLinkClick = () => {
    setNavOpen(!isNavOpen);
  };

  // когда есть повторяющиеся элементы и не будет использоваться где то еще, то можешь просто создать jsx элемент внутри компонента, но этот компонент можно будет использовать в футере
  // что то на подобии этого:
  //   const NavLink = ({....}) => {
  //    const array = [...];
  //     return (
  //       <>
  //         {array.map((item) => (
  //           <li key={...} className="menu__list-item" onClick={handleNavLinkClick}>
  //             <a href={ссылка} className="menu__link">
  //               {текст}
  //             </a>
  //           </li>
  //         ))}
  //       </>
  //     );
  //   };

  // и там где array сделай массив объектов, которые буду содержать в себе текст и ссылку [{text: 'Home', link: '#home'}, ...}]
  // так же может принимать классы для элементов в виде пропсов
  return (
    <header className="header">
      <div className="container">
        <div className="nav-body header__top">
          <div className="logo">
            <img src={logoImg} alt="logo-images" className="logo__img" />
          </div>
          <nav data-nav className={`menu header-nav ${isNavOpen ? 'header-nav--click' : ''}`}>
            <ul className="menu__list">
              <li className="menu__list-item" onClick={handleNavLinkClick}>
                <a href="#home" className="menu__link">
                  Home
                </a>
              </li>
              <li className="menu__list-item" onClick={handleNavLinkClick}>
                <a href="#latest" className="menu__link">
                  Episodes
                </a>
              </li>
              <li className="menu__list-item" onClick={handleNavLinkClick}>
                <a href="#about" className="menu__link">
                  About
                </a>
              </li>
              <li className="menu__list-item" onClick={handleNavLinkClick}>
                <a href="#contact" className="menu__link">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
          <button
            className={`burger ${isNavOpen ? 'burger--active' : ''}`}
            onClick={handleClick}
            // для чего то еще нужен атрибут data-burger?
            data-burger
            aria-label="Open menu"
            aria-expanded="false">
            <span className="burger__burger-line"></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
