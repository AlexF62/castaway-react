interface MenuItem {
    text: string;
    href: string;
}

type Menu = MenuItem[]

export const menuItems: Menu[] = [
    [{
            text: 'Home',
            href: '#home'
        },
        {
            text: 'Episodes',
            href: '#latest'
        },
        {
            text: 'About',
            href: '#about'
        },
        {
            text: 'Contact',
            href: '#contact'
        },
    ],
    [{
            text: 'Style Guide',
            href: '#'
        },
        {
            text: 'Instructions',
            href: '#'
        },
        {
            text: 'Changelog',
            href: '#'
        },
        {
            text: 'Credit',
            href: '#'
        },
        {
            text: 'Powered by Webflow',
            href: '#'
        },
        {
            text: 'Licenses',
            href: '#'
        },
    ],
];


