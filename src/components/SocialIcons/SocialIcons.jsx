import React from 'react';

const SocialIcons = ({ socialNetworks }) => {
    const iconsObj = {
        spotify: {
            imgLink: '/public/icons/spotify.svg',
            name: 'spotify',
            href: '#',
            id: 1,
        },
        apple: {
            imgLink: '/public/icons/apple-podcast.svg',
            name: 'apple',
            href: '#',
            id: 2,
        },
        aolRadio: {
            imgLink: '/public/icons/aol-radio.svg',
            name: 'aolRadio',
            href: '#',
            id: 3,
        },
        cloud: {
            imgLink: '/public/icons/cloud.svg',
            name: 'cloud',
            href: '#',
            id: 4,
        },
        oneSignal: {
            imgLink: '/public/icons/onesignal.svg',
            name: 'oneSignal',
            href: '#',
            id: 5,
        },
    };
    return (
        <>
            {socialNetworks.map((social) => (
                <a
                    key={iconsObj[social].id}
                    className='home__social-link'
                    href={iconsObj[social].href}
                >
                    <img
                        src={iconsObj[social].imgLink}
                        alt={iconsObj[social].href}
                    />
                </a>
            ))}
        </>
    );
};

export default SocialIcons;
