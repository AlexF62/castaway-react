import React from 'react';

const Button = ({ className, children }) => {
    return (
        <div className=' latest__button'>
            <button className={className}>{children}</button>
        </div>
    );
};

export default Button;
