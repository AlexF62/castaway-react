import React from 'react';

const Button = ({ className, children, onClick }) => {
    return (
        <div className=' latest__button'>
            <button onClick={onClick} className={className}>
                {children}
            </button>
        </div>
    );
};

export default Button;
