import React from 'react';

const Text = ({ className, text, style, width }) => {
    return (
        <span className={className} style={style} width={width}>
            {text}
        </span>
    );
};

export default Text;
