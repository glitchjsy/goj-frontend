import React from "react";
import clsx from "clsx";

interface ParagraphProps {
    children: React.ReactNode;
    bold?: boolean;
    className?: string;
    style?: React.CSSProperties;
}

const Paragraph: React.FC<ParagraphProps> = ({
    children,
    bold = false,
    className,
    style
}) => {
    return (
        <p
            className={clsx(
                "goj-p",
                { "goj-bold": bold },
                className
            )}
            style={style}
        >
            {children}
        </p>
    );
}

export default Paragraph;