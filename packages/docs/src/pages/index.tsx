import Footer from "@/components/ui/Footer";
import Header from "@/components/ui/Header";

export default function Home() {
    return (
        <div className="goj-full-screen-height-flex">
            <Header />

            <div className="goj-container" style={{ marginTop: "10px" }}>
                <h1 className="goj-heading goj-heading--xlarge">Welcome</h1>

                <div className="goj-alert goj-alert--info" style={{ marginTop: "10px" }}>
                    This is not an official framework by the Government of Jersey, it is created by <a href="https://glitch.je" className="goj-link">Luke</a>.
                </div>

                <p className="goj-p">
                    goj-frontend is a lightweight CSS framework loosely based on the current gov.je stylesheet and inspired by govuk-frontend.
                </p>
                <p className="goj-p">
                    It introduces a range of enhancements, including new components and improvements to existing ones. The framework removes the dependency on Bootstrap, offers modern and accessible styling, and is fully responsive for mobile devices. All CSS classes are prefixed with <code>goj-</code>, making it easy to adopt gradually alongside existing styles.
                </p>
                <p className="goj-p">
                    The framework is designed to work gracefully even when JavaScript is disabled, ensuring a robust and accessible experience for all users. In addition, a React component library is in development to make prototyping and building interfaces faster and more efficient.
                </p>
            </div>

            <Footer />
        </div>
    );
}
