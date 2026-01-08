import clsx from "clsx";
import React from "react";

export interface RowProps {
    children?: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
}

export interface ColProps {
    children?: React.ReactNode;
    className?: string;

    full?: boolean;
    threeQuarters?: boolean;
    twoThirds?: boolean;
    half?: boolean;
    oneThird?: boolean;
    oneQuarter?: boolean;

    smFull?: boolean;
    smThreeQuarters?: boolean;
    smTwoThirds?: boolean;
    smHalf?: boolean;
    smOneThird?: boolean;
    smOneQuarter?: boolean;

    mdFull?: boolean;
    mdThreeQuarters?: boolean;
    mdTwoThirds?: boolean;
    mdHalf?: boolean;
    mdOneThird?: boolean;
    mdOneQuarter?: boolean;

    lgFull?: boolean;
    lgThreeQuarters?: boolean;
    lgTwoThirds?: boolean;
    lgHalf?: boolean;
    lgOneThird?: boolean;
    lgOneQuarter?: boolean;
}

const Grid: React.FC & {
    Row: typeof Row;
    Col: typeof Col;
} = () => null;

const Row: React.FC<RowProps> = ({ children, className, style }) => (
    <div className={clsx("goj-row", className)} style={style}>
        {children}
    </div>
)

const Col: React.FC<ColProps> = ({
    children,
    className,
    full,
    threeQuarters,
    twoThirds,
    half,
    oneThird,
    oneQuarter,

    smFull,
    smThreeQuarters,
    smTwoThirds,
    smHalf,
    smOneThird,
    smOneQuarter,

    mdFull,
    mdThreeQuarters,
    mdTwoThirds,
    mdHalf,
    mdOneThird,
    mdOneQuarter,

    lgFull,
    lgThreeQuarters,
    lgTwoThirds,
    lgHalf,
    lgOneThird,
    lgOneQuarter,
}) => {
    const classes = clsx(
        "goj-col",
        {
            "goj-col--full": full,
            "goj-col--three-quarters": threeQuarters,
            "goj-col--two-thirds": twoThirds,
            "goj-col--half": half,
            "goj-col--one-third": oneThird,
            "goj-col--one-quarter": oneQuarter,

            "goj-col--sm-full": smFull,
            "goj-col--sm-three-quarters": smThreeQuarters,
            "goj-col--sm-two-thirds": smTwoThirds,
            "goj-col--sm-half": smHalf,
            "goj-col--sm-one-third": smOneThird,
            "goj-col--sm-one-quarter": smOneQuarter,

            "goj-col--md-full": mdFull,
            "goj-col--md-three-quarters": mdThreeQuarters,
            "goj-col--md-two-thirds": mdTwoThirds,
            "goj-col--md-half": mdHalf,
            "goj-col--md-one-third": mdOneThird,
            "goj-col--md-one-quarter": mdOneQuarter,

            "goj-col--lg-full": lgFull,
            "goj-col--lg-three-quarters": lgThreeQuarters,
            "goj-col--lg-two-thirds": lgTwoThirds,
            "goj-col--lg-half": lgHalf,
            "goj-col--lg-one-third": lgOneThird,
            "goj-col--lg-one-quarter": lgOneQuarter,
        },
        className
    );

    return <div className={classes}>{children}</div>;
}

Grid.Row = Row;
Grid.Col = Col;

export default Grid;