import React from "react";
import clsx from "clsx";

export type AlertVariant = "danger" | "warning" | "info" | "success";

interface AlertProps {
    variant?: AlertVariant;
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
}

const Alert: React.FC<AlertProps> = ({
    children, 
    variant = "info", 
    className, 
    style
}) => {
    return (
        <div
            className={clsx(
                "goj-alert",
                `goj-alert--${variant}`,
                className
            )}
            style={style}
        >
            {children}
        </div>
    );
}

export default Alert;