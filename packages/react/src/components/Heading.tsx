import React from "react";
import clsx from "clsx";

type HeadingSize = "small" | "medium" | "large" | "xlarge";
type HeadingTags = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

type HeadingProps<T extends HeadingTags = "h2"> = {
    size?: HeadingSize;
    as?: T;
    className?: string;
    children: React.ReactNode;
} & Omit<React.ComponentPropsWithoutRef<T>, "children" | "className">;

const defaultTags: Record<HeadingSize, HeadingTags> = {
    small: "h4",
    medium: "h3",
    large: "h2",
    xlarge: "h1"
}

const Heading = <T extends HeadingTags = "h2">({
    size = "medium",
    as,
    className,
    children,
    ...rest
}: HeadingProps<T>) => {
    const Tag = as ?? defaultTags[size];

    return (
        <Tag
            className={clsx(
                "goj-heading",
                `goj-heading--${size}`,
                className
            )} 
            {...rest}
        >
            {children}
        </Tag>
    );
}


export default Heading;