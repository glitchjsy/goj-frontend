import React, { Children, isValidElement, cloneElement } from "react";
import clsx from "clsx";
import Checkbox, { CheckboxProps } from "./Checkbox.js";

export interface CheckboxListProps {
    children: React.ReactNode;
    large?: boolean;
    name?: string;
    className?: string;
    values?: string[];
    onChange?: (value: string, checked: boolean) => void;
}

const CheckboxList: React.FC<CheckboxListProps> & {Item: typeof Checkbox } = ({
    children,
    large = false,
    className,
    name,
    values = [],
    onChange
}) => {
    const handleChange = (value: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!onChange) return;
        onChange(value, e.target.checked);
    }

    const clonedChildren = Children.map(children, child => {
        if (isValidElement<CheckboxProps>(child) && child.type) {
            const value = child.props.value || child.props.label;
            return cloneElement(child, {
                checked: values.includes(value),
                onChange: handleChange(value),
                name
            });
        }
        return child;
    });

    return (
        <div className={clsx("goj-checkboxes", { "goj-checkboxes--large": large }, className)}>
            {clonedChildren}
        </div>
    );
}

CheckboxList.Item = Checkbox;

export default CheckboxList;