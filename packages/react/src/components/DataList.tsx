import React from "react";
import clsx from "clsx";

export interface DataListProps {
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
}

export interface DataListItemProps {
    label: React.ReactNode;
    children: React.ReactNode;
    className?: string;
}

export const DataList: React.FC<DataListProps> & {
    Item: typeof DataListItem
} = ({
    children,
    className,
    style
}) => {
    return (
        <div className={clsx("goj-data-list", className)} style={style}>
            {children}
        </div>
    );
}

const DataListItem: React.FC<DataListItemProps> = ({
    label,
    children,
    className
}) => {
    return (
        <div className={clsx("goj-data-list__row", className)}>
            <p className="goj-data-list__key">{label}</p>
            <p className="goj-data-list__value">{children}</p>
        </div>
    );
}

DataList.Item = DataListItem;

export default DataList;