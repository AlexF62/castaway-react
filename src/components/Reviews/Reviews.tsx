import React from 'react';
import './reviews.scss';
import ReviewsCards from '../ReviewsCards/ReviewsCards';
import {reviewsItems, Review} from '../utils/ReviewsItems';

const Reviews: React.FC = () => {
    return (
        <section className='reviews'>
            <div className='container'>
                <div className='reviews__inner'>
                    {reviewsItems.map((review: Review) => (
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


