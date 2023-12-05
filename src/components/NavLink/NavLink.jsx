const NavLink = () => {
    const menuItems = [
        [
            { text: 'Home', href: '#home' },
            { text: 'Episodes', href: '#latest' },
            { text: 'About', href: '#about' },
            { text: 'Contact', href: '#contact' },
        ],
        [
            { text: 'Style Guide', href: '#' },
            { text: 'Instructions', href: '#' },
            { text: 'Changelog', href: '#' },
            { text: 'Credit', href: '#' },
            { text: 'Powered by Webflow', href: '#' },
            { text: 'Licenses', href: '#' },
        ],
    ];

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
