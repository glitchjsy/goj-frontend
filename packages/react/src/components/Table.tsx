import clsx from "clsx";
import React from "react";

export interface TableProps extends React.TableHTMLAttributes<HTMLTableElement> {
    striped?: boolean;
}

export interface TableHeaderProps extends React.HTMLAttributes<HTMLTableSectionElement> { }
export interface TableBodyProps extends React.HTMLAttributes<HTMLTableSectionElement> { }
export interface TableRowProps extends React.HTMLAttributes<HTMLTableRowElement> { }

export interface TableHeaderCellProps extends React.ThHTMLAttributes<HTMLTableCellElement> {
    equalWidth?: boolean;
}

export interface TableCellProps extends React.TdHTMLAttributes<HTMLTableCellElement> {
    numeric?: boolean;
    firstRow?: boolean;
    equalWidth?: boolean;
}

const Table: React.FC<TableProps> & {
    Header: typeof TableHeader;
    Body: typeof TableBody;
    Row: typeof TableRow;
    HeaderCell: typeof TableHeaderCell;
    Cell: typeof TableCell;
} = ({ striped, className, ...rest }) => {
    return (
        <table
            {...rest}
            className={clsx(
                "goj-table",
                { "goj-table--striped": striped },
                className
            )}
        />
    );
}

const TableHeader: React.FC<TableHeaderProps> = ({ className, ...rest }) => (
    <thead {...rest} className={clsx("goj-table__header", className)} />
);

const TableBody: React.FC<TableBodyProps> = ({ className, ...rest }) => (
    <tbody {...rest} className={clsx("goj-table__body", className)} />
);

const TableRow: React.FC<TableRowProps> = ({ className, ...rest }) => (
    <tr {...rest} className={clsx("goj-table__row", className)} />
);

const TableHeaderCell: React.FC<TableHeaderCellProps> = ({ equalWidth, className, ...rest }) => (
    <th
        {...rest}
        className={clsx(
            "goj-table__header-cell",
            { "goj-table--equal-width": equalWidth },
            className
        )}
    />
);

const TableCell: React.FC<TableCellProps> = ({ numeric, firstRow, equalWidth, className, ...rest }) => (
    <td
        {...rest}
        className={clsx(
            "goj-table__cell",
            {
                "goj-table--numeric": numeric,
                "goj-table__first-row": firstRow,
                "goj-table--equal-width": equalWidth,
            },
            className
        )}
    />
);

Table.Header = TableHeader;
Table.Body = TableBody;
Table.Row = TableRow;
Table.HeaderCell = TableHeaderCell;
Table.Cell = TableCell;

export default Table;