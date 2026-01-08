import ComponentPage from "@/components/ComponentPage";
import Example from "@/components/ui/Example";
import insetText from "@/examples/inset-text";

export default function InsetTextComponent() {
    return (
        <ComponentPage component="Inset Text">
            <h1 className="goj-heading goj-heading--xlarge">Inset Text</h1>

            <br />

            <Example example={insetText} />
        </ComponentPage>
    )
}
