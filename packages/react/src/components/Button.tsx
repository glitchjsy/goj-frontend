import React from "react";
import clsx from "clsx";

export type ButtonVariant = "default" | "primary" | "secondary" | "inverse";
export type ButtonAction = "external" | "start";

type CombinedElementAttributes = Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "onAbort"> & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "onAbort">;

export interface ButtonProps extends CombinedElementAttributes {
    href?: string;
    variant?: ButtonVariant;
    action?: ButtonAction;
    className?: string;
}

const Button: React.FC<ButtonProps> = ({
    href,
    variant = "default",
    action,
    className,
    disabled,
    children,
    ...rest
}) => {
    const classes = clsx(
        "goj-button",
        `goj-button--${variant}`,
        {
            "goj-button--external-link": action === "external",
            "goj-button--start": action === "start"
        },
        className
    );
    
    if (href && !disabled) {
        return (
            <a href={href} className={classes} {...rest}>
                {children}
            </a>
        );
    }

    return (
        <button 
            className={classes} 
            disabled={disabled}
            {...rest}
        >
            {children}
        </button>
    );
}

export default Button;