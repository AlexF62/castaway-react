import React from 'react';

const SocialIcons = () => {
    const iconsObj = {
        spotify: {
            imgLink: '/public/icons/spotify.svg',
            name: 'spotify',
            href: '#',
            id: 1,
            class: 'home__social-link',
        },
        onesignal: {
            imgLink: '/public/icons/onesignal.svg',
            name: 'onesignal',
            href: '#',
            id: 2,
            class: 'home__social-link',
        },
        cloud: {
            imgLink: '/public/icons/cloud.svg',
            name: 'cloud',
            href: '#',
            id: 3,
            class: 'home__social-link',
        },
        applepodcast: {
            imgLink: '/public/icons/apple-podcast.svg',
            name: 'applePodcast',
            href: '#',
            id: 4,
            class: 'home__social-link',
        },
        aolradio: {
            imgLink: '/public/icons/aol-radio.svg',
            name: 'aolRadio',
            href: '#',
            id: 5,
            class: 'home__social-link',
        },
    };

    return (
        <>
            {Object.keys(iconsObj).map((socialKey) => {
                const social = iconsObj[socialKey];
                return (
                    <a
                        key={social.id}
                        className={social.class}
                        href={social.href}
                    >
                        <img src={social.imgLink} alt={social.name} />
                    </a>
                );
            })}
        </>
    );
};

export default SocialIcons;
