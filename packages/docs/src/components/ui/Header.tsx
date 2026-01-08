export default function Header() {
    return (
        <>
            <header className="goj-header" style={{ backgroundColor: "#104fbb" }}>
                <div className="goj-header__container">
                    <a href="/" title="gov.je home" className="goj-header__logo">
                        <img id="M_Image2" src="https://cdn.gov.je/govje/images/Gov-Jersey-Crest.svg" alt="gov.je" />
                        goj-frontend
                    </a>
                </div>
            </header>
            <div className="goj-header__navigation-wrapper">
                <div className="goj-header__container goj-flex goj-flex__space-between">
                    <div className="goj-header__navigation">
                        <a href="/" className="goj-header__navigation-item">Home</a>
                        <a href="/components" className="goj-header__navigation-item">Components</a>
                        <a href="/demo/vehicle-search" className="goj-header__navigation-item">Demo</a>
                    </div>
                </div>
            </div>
        </>
    )
}