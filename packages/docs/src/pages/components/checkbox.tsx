import ComponentPage from "@/components/ComponentPage";
import Example from "@/components/ui/Example";
import small from "@/examples/checkbox/small";
import error from "@/examples/checkbox/error";

export default function CheckboxComponent() {
    return (
        <ComponentPage component="Checkbox">
            <h1 className="goj-heading goj-heading--xlarge">Checkbox</h1>

            <br />

            <h2>Default</h2>
            <Example example={small} />

            <h2>Error</h2>
            <Example example={error} />
        </ComponentPage>
    )
}
