import ComponentPage from "@/components/ComponentPage";
import Example from "@/components/ui/Example";
import defaultButton from "@/examples/button/default";
import primaryButton from "@/examples/button/primary";
import secondaryButton from "@/examples/button/secondary";
import inverseButtons from "@/examples/button/inverse";
import disabledButtons from "@/examples/button/disabled";
import externalLinks from "@/examples/button/external-links";
import startButtons from "@/examples/button/start";

export default function ButtonComponent() {
    return (
        <ComponentPage component="Button">
            <h1 className="goj-heading goj-heading--xlarge">Button</h1>

            <br />

            <h2>Default</h2>
            <Example example={defaultButton} />

            <h2>Primary</h2>
            <Example example={primaryButton} />

            <h2>Secondary</h2>
            <Example example={secondaryButton} />

            <h2>External Links</h2>
            <Example example={externalLinks} />

            <h2>Start Action</h2>
            <Example example={startButtons} />

            <h2>Disabled</h2>
            <Example example={disabledButtons} />

            <h2>Inverse</h2>
            <Example example={inverseButtons} />
        </ComponentPage>
    )
}
