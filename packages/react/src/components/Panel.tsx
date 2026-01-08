import clsx from "clsx";
import React from "react";

export interface PanelProps {
    variant?: "default" | "charcoal" | "success" | "danger";
    title: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
}

const Panel: React.FC<PanelProps> = ({
    variant = "default",
    title,
    className,
    style,
    children
}) => {
    return (
        <div
            className={clsx(
                "goj-panel",
                {
                    "goj-panel--charcoal": variant === "charcoal",
                    "goj-panel--success": variant === "success",
                    "goj-panel--danger": variant === "danger"
                },
                className
            )}
            style={style}
        >
            <div className="goj-panel__title">{title}</div>
            <div className="goj-panel__content">{children}</div>
        </div>
    );
}

export default Panel;