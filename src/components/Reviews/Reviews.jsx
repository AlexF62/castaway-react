import React from 'react';
import './reviews.scss';
import ReviewsCards from '../ReviewsCards/ReviewsCards';

const Reviews = () => {
    return (
        <section className='reviews'>
            <div className='container'>
                <ReviewsCards />
            </div>
        </section>
    );
};

export default Reviews;
