import { PropsWithChildren } from "react";
import styles from "./styles.module.css";

export default function Sidebar({ children, open, onClose }: PropsWithChildren<{ open: boolean; onClose: () => void }>) {
    return (
        <div className={`${styles.sidebar} ${open ? styles.open : ""}`}>
            <div className={styles.mobileClose} onClick={onClose}>
                <i className="fa fa-x" />
            </div>
            {children}
        </div>
    )
}

export function SidebarItem({
    title,
    href,
    active
}: {
    title: string;
    href: string;
    active?: boolean;
}) {
    return (
        <a href={href} className={styles.sidebarItem + (active ? ` ${styles.sidebarItemActive}` : "")}>
            {title}
        </a>
    )
}