import React from "react";
import clsx from "clsx";

interface InsetTextProps {
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
}

const InsetText: React.FC<InsetTextProps> = ({ children, className, style }) => {
    return (
        <div className={clsx("goj-inset-text", className)} style={style}>
            {children}
        </div>
    );
}

export default InsetText;