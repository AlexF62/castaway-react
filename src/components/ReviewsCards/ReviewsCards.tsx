import React from 'react';
import Text from '../UI/Text';

interface ReviewsCardsProps {
    id: number;
    title: string;
    name: string;
}

const ReviewsCards: React.FC<ReviewsCardsProps> = ({ id, title, name }) => (
    <div className='reviews__card' key={id}>
        <div className='reviews__card-grade'></div>
        <Text className={'reviews__card-title'} children={title} />
        <Text className={'reviews__card-name'} children={name} />
    </div>
);

export default ReviewsCards;

