import ComponentPage from "@/components/ComponentPage";
import Example from "@/components/ui/Example";
import smallLabel from "@/examples/input/small-label";
import smallLabelWithHint from "@/examples/input/small-label-with-hint";
import prefix from "@/examples/input/prefix";
import suffix from "@/examples/input/suffix";
import error from "@/examples/input/error";

export default function InputComponent() {
    return (
        <ComponentPage component="Input">
            <h1 className="goj-heading goj-heading--large">Input</h1>

            <br />

            <h2>Small Label</h2>
            <Example example={smallLabel} />

            <h2>Small Label with Hint</h2>
            <Example example={smallLabelWithHint} />

            <hr />

            <h2>Prefix</h2>
            <Example example={prefix} />

            <h2>Suffix</h2>
            <Example example={suffix} />

            <h2>Error</h2>
            <Example example={error} />
        </ComponentPage>
    )
}
