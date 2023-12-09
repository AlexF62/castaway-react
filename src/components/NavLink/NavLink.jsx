import React from 'react';

const NavLink = ({ menuItems }) => {
    return (
        <>
            {menuItems.map((menu, index) => (
                <ul key={index} className='footer__menu-list'>
                    {menu.map((item, itemIndex) => (
                        <li key={itemIndex} className='footer__menu__list-item'>
                            <a
                                href={item.href}
                                className='footer__menu__list-link'
                            >
                                {item.text}
                            </a>
                        </li>
                    ))}
                </ul>
            ))}
        </>
    );
};

export default NavLink;
