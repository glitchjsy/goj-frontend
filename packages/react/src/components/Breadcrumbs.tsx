import clsx from "clsx";
import React from "react";

export interface BreadcrumbsProps {
    children?: React.ReactNode;
    className?: string;
    inverse?: boolean;
}

export interface BreadcrumbsItemProps {
    children?: React.ReactNode;
    className?: string;
    href?: string;
}

const Breadcrumbs: React.FC<BreadcrumbsProps> & {
    Item: typeof BreadcrumbsItem;
} = ({ children, inverse, className }) => {
    const classes = clsx(
        "goj-breadcrumbs",
        {
            "goj-breadcrumbs--inverse": inverse
        },
        className
    );

    return <ul className={classes}>{children}</ul>;
}

const BreadcrumbsItem: React.FC<BreadcrumbsItemProps> = ({
    children,
    className,
    href,
}) => {
    return (
        <li className={clsx("goj-breadcrumbs__item", className)}>
            {href ? (
                <a href={href} className="goj-breadcrumbs__link">
                    {children}
                </a>
            ) : (
                <span className="goj-breadcrumbs__link">{children}</span>
            )}
        </li>
    );
}

Breadcrumbs.Item = BreadcrumbsItem;

export default Breadcrumbs;