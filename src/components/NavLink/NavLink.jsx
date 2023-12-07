import { menuItems } from '../utils/menuItems.js';

const NavLink = () => {
    return (
        <>
            {menuItems.reduce((acc, menu, index) => {
                const menuList = menu.map((item, itemIndex) => (
                    <li key={itemIndex} className='footer__menu__list-item'>
                        <a href={item.href} className='footer__menu__list-link'>
                            {item.text}
                        </a>
                    </li>
                ));
                return acc.concat(
                    <ul key={index} className='footer__menu-list'>
                        {menuList}
                    </ul>
                );
            }, [])}
        </>
    );
};

export default NavLink;
