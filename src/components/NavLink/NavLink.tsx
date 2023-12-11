import React from 'react';

interface MenuItem {
    href: string;
    text: string
}

interface NavLinkProps {
        menuItems: MenuItem[][];
    }

const NavLink: React.FC<NavLinkProps> = ({ menuItems }) => {
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


