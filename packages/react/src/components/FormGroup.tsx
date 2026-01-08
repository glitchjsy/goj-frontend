import clsx from "clsx";
import React from "react";

export interface FormGroupProps {
    children?: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
    label?: string;
    hint?: string;
    error?: string;
    size?: "small" | "large";
    inputId: string;
}

const FormGroup: React.FC<FormGroupProps> = ({
    children,
    className,
    style,
    label,
    hint,
    error,
    size = "small",
    inputId
}) => {
    const classes = clsx(
        "goj-form-group",
        {
            "goj-form-group--error": error
        },
        className
    );

    return (
        <div className={classes} style={style}>
            {label && (
                size === "large" ? (
                    <h1 className="goj-label-wrapper">
                        <label
                            className={clsx("goj-label", "goj-label--l")}
                            htmlFor={inputId}
                        >
                            {label}
                        </label>
                    </h1>
                ) : (
                    <label
                        className="goj-label"
                        htmlFor={inputId}
                    >
                        {label}
                    </label>
                )
            )}

            {hint && (
                <span className="goj-hint">
                    {hint}
                </span>
            )}

            {React.isValidElement(children)
                ? React.cloneElement(children as any, {
                    id: inputId
                })
                : children}

            {error && (
                <div className="goj-form-group__error-message">
                    {error}
                </div>
            )}
        </div>
    );
}

export default FormGroup;