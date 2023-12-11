import React, { CSSProperties } from 'react';

interface TextProps {
    className?: string;
    children: string;
    style?: CSSProperties;
    weight?: string | number;

}

const Text: React.FC<TextProps> = ({ className, children, style, weight }) => {
    return (
        <span className={className} style={style} data-weight={weight}>
            {children}
        </span>
    );
};

export default Text;
