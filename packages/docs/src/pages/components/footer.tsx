import ComponentPage from "@/components/ComponentPage";
import Example from "@/components/ui/Example";
import defaultFooter from "@/examples/footer/default";

export default function FooterComponent() {
    return (
        <ComponentPage component="Footer">
            <h1 className="goj-heading goj-heading--xlarge">Footer</h1>

            <br />

            <h2>Default</h2>
            <Example example={defaultFooter} />
        </ComponentPage>
    )
}
