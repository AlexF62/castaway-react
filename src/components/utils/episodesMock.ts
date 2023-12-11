 interface Episode {
    id: number;
    imageSrc: string;
    text: string;
    number: string
    subtitle: string;
    description: string;
 }
 
 const episodesData: Episode[] = [{
         id: 1,
         imageSrc: '/public/episode3-image.jpg',
         text: 'Gear',
         number: 'Episode 3',
         subtitle: 'Should you get outboard audio gear?',
         description: 'Is hardware really worth it when it comes to podcasting? The answer is...it depends. Here’s our reasons on why you might want to consider picking something up.',
     },
     {
         id: 2,
         imageSrc: '/public/episode2-image.jpg',
         text: 'Tips&Tricks',
         number: 'Episode 2',
         subtitle: 'Mic tricks to take you to the next level',
         description: 'Stop rolling with those default settings on your mic. These small tweaks will take you from sounding good to great.',
     },
     {
         id: 3,
         imageSrc: '/public/episode1-image.jpg',
         text: 'Gear',
         number: 'Episode 1',
         subtitle: 'The best microphone under $200',
         description: 'With so many microphones on the market, how are you supposed to know what’s the best? Take a look at our top picks.',
     },
 ];

 export default episodesData

