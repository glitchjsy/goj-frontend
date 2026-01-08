import React from "react";

const Footer: React.FC = () => {
    return (
        <footer className="goj-footer">
            <div className="goj-footer__container">
                <div className="goj-footer__social-links">
                    <a href="#" className="goj-footer__social-link"><i className="fa-brands fa-facebook-f" /></a>
                    <a href="#" className="goj-footer__social-link"><i className="fa-brands fa-instagram" /></a>
                    <a href="#" className="goj-footer__social-link"><i className="fa-brands fa-x-twitter" /></a>
                    <a href="#" className="goj-footer__social-link"><i className="fa-brands fa-linkedin-in" /></a>
                    <a href="#" className="goj-footer__social-link"><i className="fa-brands fa-youtube" /></a>
                </div>
                <div className="goj-footer__links">
                    <a href="#" className="goj-footer__link">Accessibility</a>
                    <a href="#" className="goj-footer__link">Contact us</a>
                    <a href="#" className="goj-footer__link">Privacy</a>
                    <a href="#" className="goj-footer__link">Terms & Conditions</a>
                    <a href="#" className="goj-footer__link">Sitemap</a>
                    <a href="#" className="goj-footer__link">Translate</a>
                    <div className="goj-footer__copyright">&copy; Government of Jersey</div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
