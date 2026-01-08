import React from "react";
import clsx from "clsx";

export interface SidebarProps {
    children?: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
}

export interface SidePanelProps {
    title?: string;
    children?: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
}

export interface SidePanelLinksProps {
    children?: React.ReactNode;
}

export interface ContactDetails {
    organisation?: string;
    phone?: string;
    email?: string;
    hours?: string;
    addressLines?: string[];
    signVideo?: boolean;
}

const Sidebar: React.FC<SidebarProps> & {
    Panel: typeof SidePanel;
    Contact: typeof SidePanelContact;
} = ({ children, className, style }) => {
    return <div className={clsx("goj-sidebar", className)} style={style}>{children}</div>;
}

const SidePanel: React.FC<SidePanelProps> = ({ title, children, className, style }) => (
    <div className={clsx("goj-side-panel", className)} style={style}>
        {title && <h3 className="goj-side-panel__title">{title}</h3>}
        <div className="goj-side-panel__links">{children}</div>
    </div>
)

const SidePanelContact: React.FC<ContactDetails> = ({
    organisation,
    phone,
    email,
    hours,
    addressLines = [],
    signVideo
}) => {
    return (
        <>
            {organisation && (
                <div className="goj-side-panel__contact-item">{organisation}</div>
            )}

            {(phone || email) && (
                <div className="goj-side-panel__contact-item">
                    {phone && (
                        <div className="goj-side-panel__contact-item">
                            <i className="fa-solid fa-phone" />
                            <a className="goj-link goj-link--charcoal" href={`tel:${phone}`}>
                                {phone}
                            </a>
                        </div>
                    )}
                    {email && (
                        <div className="goj-side-panel__contact-item">
                            <i className="fa-solid fa-envelope" />
                            <a className="goj-link goj-link--charcoal" href={`mailto:${email}`}>
                                {email}
                            </a>
                        </div>
                    )}
                </div>
            )}

            {hours && <div className="goj-side-panel__contact-item">{hours}</div>}

            {addressLines.length > 0 && (
                <div className="goj-side-panel__contact-item">
                    {addressLines.map((line, idx) => (
                        <>{line}<br key={idx} /></>
                    ))}
                </div>
            )}

            {signVideo && (
                <div className="goj-side-panel__contact-item">
                    <button className="goj-button goj-button--primary goj-button--slim">
                        Connect to SignVideo
                    </button>
                </div>
            )}
        </>
    );
};

Sidebar.Panel = SidePanel;
Sidebar.Contact = SidePanelContact;

export default Sidebar;