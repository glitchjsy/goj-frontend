import React from "react";
import clsx from "clsx";

interface LoadingSpinnerProps {
    text?: string;
    inverse?: boolean;
    className?: string;
    style?: React.CSSProperties;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
    text = "Loading...",
    inverse = false,
    className,
    style
}) => {
    return (
        <div
            className={clsx(
                "goj-loading-spinner",
                { "goj-loading-spinner--inverse": inverse },
                className
            )}
            style={style}
        >
            <div className="goj-loading-spinner__spinner"></div>
            <div className="goj-loading-spinner__text">{text}</div>
        </div>
    );
}

export default LoadingSpinner;