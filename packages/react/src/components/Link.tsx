import React from "react";
import clsx from "clsx";

export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    noUnderline?: boolean;
    variant?: "default" | "charcoal" | "inverse";
}

const Link: React.FC<LinkProps> = ({
    noUnderline = false,
    variant = "default",
    className,
    children,
    ...rest
}) => {
    return (
        <a
            {...rest}
            className={clsx(
                "goj-link",
                {
                    "goj-link--charcoal": variant === "charcoal",
                    "goj-link--no-underline": noUnderline,
                    "goj-link--inverse": variant === "inverse"
                },
                className
            )}
        >
            {children}
        </a>
    );
}

export default Link;