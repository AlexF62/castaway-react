import React from 'react';
import './reviews.scss';
import ReviewsCards from '../ReviewsCards/ReviewsCards.jsx';
import reviewsItems from '../utils/ReviewsItems.js';

const Reviews = () => {
    return (
        <section className='reviews'>
            <div className='container'>
                <div className='reviews__inner'>
                    {reviewsItems.map((review) => (
                        <ReviewsCards
                            key={review.id}
                            id={review.id}
                            name={review.name}
                            title={review.title}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Reviews;
