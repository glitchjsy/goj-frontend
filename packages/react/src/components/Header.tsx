import clsx from "clsx";
import React, { useState } from "react";

export interface HeaderProps {
    brand?: React.ReactNode;
    search?: React.ReactNode;
    children?: React.ReactNode;
    enableMobileNavigation?: boolean;
}

export interface HeaderBrandProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    brandName?: string;
    iconSrc?: string;
    iconAlt?: string;
    href?: string;
}

export interface HeaderSearchProps {
    placeholder?: string;
    onSearch?: (searchTerm: string) => void;
}

const Header: React.FC<HeaderProps> & {
    Brand: typeof HeaderBrand;
    Search: typeof HeaderSearch;
    Navigation: typeof HeaderNavigation;
    NavigationItem: typeof HeaderNavigationItem;
} = ({
    brand,
    search,
    children,
    enableMobileNavigation
}) => {
        const [mobileNavOpen, setMobileNavOpen] = useState(false);

        const navWrapperClasses = clsx(
            "goj-header__navigation-wrapper",
            { "goj-header--enable-mobile-navigation": enableMobileNavigation },
            { "goj-header--mobile-navigation-open": mobileNavOpen }
        );

        return (
            <>
                <header className="goj-header">
                    <div className="goj-header__container">
                        {brand ?? <HeaderBrand />}
                        {search && <div className="goj-header__actions">{search}</div>}
                    </div>
                </header>

                {children && (
                    <div className={navWrapperClasses}>
                        {enableMobileNavigation && (
                            <button 
                                className="goj-header__menu-button" 
                                aria-label="Toggle menu"
                                onClick={() => setMobileNavOpen(!mobileNavOpen)}
                            >
                                {" Menu "}
                            </button>
                        )}
                        <div className="goj-header__container goj-flex goj-flex__space-between">
                            {children}
                        </div>
                    </div>
                )}
            </>
        )
    }

const HeaderBrand: React.FC<HeaderBrandProps> = ({
    brandName = "gov.je",
    iconSrc = "https://cdn.gov.je/govje/images/Gov-Jersey-Crest.svg",
    iconAlt = "gov.je logo",
    href,
    ...rest
}) => (
    <a href={href} className="goj-header__logo" {...rest}>
        {iconSrc && <img src={iconSrc} alt={iconAlt} />}
        {brandName}
    </a>
);

// This component contains basic search term handling functionality.
// If you need access to other props, please create your own component.
const HeaderSearch: React.FC<HeaderSearchProps> = ({
    placeholder = "Search gov.je",
    onSearch
}) => {
    const [searchTerm, setSearchTerm] = useState<string>("");

    return (
        <div className={clsx("goj-input-wrapper", "goj-full-width")}>
            <input
                type="text"
                className="goj-input goj-header__search"
                placeholder={placeholder}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button
                className="goj-input__suffix goj-header__search-icon"
                onClick={() => onSearch?.(searchTerm)}
            />
        </div>
    );
}

const HeaderNavigation: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div className="goj-header__navigation">
        {children}
    </div>
);

const HeaderNavigationItem: React.FC<{ href?: string; children?: React.ReactNode }> = ({
    href = "#",
    children,
}) => (
    <a href={href} className="goj-header__navigation-item">
        {children}
    </a>
);

Header.Brand = HeaderBrand;
Header.Search = HeaderSearch;
Header.Navigation = HeaderNavigation;
Header.NavigationItem = HeaderNavigationItem;

export default Header;