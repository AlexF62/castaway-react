import React from 'react';
import ReviewsItems from '../ReviewsItems/ReviewsItems.js';

const ReviewsCards = () => {
    return (
        <div className='reviews__inner'>
            {ReviewsItems.map((review) => (
                <div className='reviews__card' key={review.id}>
                    <div className='reviews__card-grade'></div>
                    <span className='reviews__card-title'>{review.title}</span>
                    <span className='reviews__card-name'>{review.name}</span>
                </div>
            ))}
        </div>
    );
};

export default ReviewsCards;
