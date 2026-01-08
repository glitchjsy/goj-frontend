import clsx from "clsx";
import React from "react";

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "prefix" | "suffix"> {
    prefix?: React.ReactNode;
    suffix?: React.ReactNode;
    error?: boolean;
}

const Input: React.FC<InputProps> = ({
    prefix,
    suffix,
    className,
    error = false,
    ...rest
}) => {
    const input = (
        <input
            {...rest}
            className={clsx(
                "goj-input",
                { 
                    "goj-input--error": error !== false
                },
                className
            )}
        />
    );

    if (!prefix && !suffix) return input;

    return (
        <div className="goj-input-wrapper">
            {prefix && <div className="goj-input__prefix">{prefix}</div>}
            {input}
            {suffix && <div className="goj-input__suffix">{suffix}</div>}
        </div>
    );
}

export default Input;