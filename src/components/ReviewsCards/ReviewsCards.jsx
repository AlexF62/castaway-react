import React from 'react';
import ReviewsItems from '../utils/ReviewsItems.js';

const ReviewCard = ({ id, title, name }) => (
    <div className='reviews__card' key={id}>
        <div className='reviews__card-grade'></div>
        <span className='reviews__card-title'>{title}</span>
        <span className='reviews__card-name'>{name}</span>
    </div>
);

const ReviewsCards = () => (
    <div className='reviews__inner'>
        {ReviewsItems.map((review) => (
            <ReviewCard {...review} />
        ))}
    </div>
);

export default ReviewsCards;
