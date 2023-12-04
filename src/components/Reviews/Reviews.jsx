import React from 'react';
import './reviews.scss';
import reviewsData from '../Reviewscard/ReviewsCards';

const Reviews = () => {
  return (
    <section className="reviews">
      <div className="container">
        <div className="reviews__inner">
          {reviewsData.map((review) => (
            // эту часть можно вынести в отдельный компонент
            <div className="reviews__card" key={review.id}>
              <div className="reviews__card-grade"></div>
              <span className="reviews__card-title">{review.title}</span>
              <span className="reviews__card-name">{review.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
