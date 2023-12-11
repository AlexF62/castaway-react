import React, { MouseEventHandler } from 'react';

interface ButtonProps {
    className?: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    children: string;
}

const Button: React.FC<ButtonProps> = ({ className, children, onClick }) => {
    return (
        <div className=' latest__button'>
            <button onClick={onClick} className={className}>
                {children}
            </button>
        </div>
    );
};

export default Button;


