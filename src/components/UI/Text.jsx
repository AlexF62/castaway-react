import React from 'react';

const Text = ({ className, children, style, weight }) => {
    return (
        <span className={className} style={style} weight={weight}>
            {children}
        </span>
    );
};

export default Text;
