import React, { Children, isValidElement, cloneElement } from "react";
import clsx from "clsx";

export interface CheckboxProps {
    id?: string;
    label: string;
    value?: string;
    disabled?: boolean;
    checked?: boolean;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    className?: string;
    name?: string;
}

const Checkbox: React.FC<CheckboxProps> = ({ 
    id, 
    label, 
    value, 
    checked, 
    onChange, 
    disabled, 
    className,
    name
}) => {
    const inputId = id || `checkbox-${value || label}`;
    return (
        <div className="goj-checkboxes__item">
            <input
                id={inputId}
                type="checkbox"
                className={clsx("goj-checkboxes__input", className)}
                value={value}
                checked={checked}
                onChange={onChange}
                disabled={disabled}
                name={name}
            />
            <label htmlFor={inputId} className="goj-checkboxes__label">
                {label}
            </label>
        </div>
    );
}

export default Checkbox;