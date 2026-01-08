import { PropsWithChildren, useState } from "react";
import Header from "../ui/Header";
import Footer from "../ui/Footer";
import Sidebar, { SidebarItem } from "../ui/Sidebar";
import styles from "./styles.module.css";

export default function ComponentPage({ children, component }: PropsWithChildren<{ component?: string }>) {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="goj-full-screen-height-flex">
            <Header />

            <div className="goj-container">
                <div className={styles.sidebarPageLayout}>
                    <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)}>
                        <SidebarItem title="Alert" href="/components/alert" active={component === "Alert"} />
                        <SidebarItem title="Button" href="/components/button" active={component === "Button"} />
                        <SidebarItem title="Data List" href="/components/data-list" active={component === "Description List"} />
                        <SidebarItem title="Header" href="/components/header" active={component === "Header"} />
                        <SidebarItem title="Link" href="/components/link" active={component === "Link"} />
                        <SidebarItem title="Footer" href="/components/footer" active={component === "Footer"} />
                        <SidebarItem title="Input" href="/components/input" active={component === "Input"} />
                        <SidebarItem title="Checkboxes" href="/components/checkbox" active={component === "Checkbox"} />
                        <SidebarItem title="Inset Text" href="/components/inset-text" active={component === "Inset Text"} />
                        <SidebarItem title="Loading Spinner" href="/components/loading-spinner" active={component === "Loading Spinner"} />
                    </Sidebar>
        
                    <div className="goj-container">
                        <button
                            className={styles.menuButton}
                            onClick={() => setSidebarOpen(!sidebarOpen)}
                        >
                            Open sidebar
                        </button>

                        <ul className="goj-breadcrumbs">
                            <li className="goj-breadcrumbs__item">
                                <a href="/" className="goj-breadcrumbs__link">Home</a>
                            </li>
                            <li className="goj-breadcrumbs__item">
                                <a href="/components" className="goj-breadcrumbs__link">Components</a>
                            </li>
                            {component && (
                                <li className="goj-breadcrumbs__item">
                                    <a href="#" className="goj-breadcrumbs__link">{component}</a>
                                </li>
                            )}
                        </ul>
                        {children}
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}