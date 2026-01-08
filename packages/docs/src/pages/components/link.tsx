import ComponentPage from "@/components/ComponentPage";
import Example from "@/components/ui/Example";
import link from "@/examples/link/link";
import noUnderline from "@/examples/link/no-underline";
import charcoal from "@/examples/link/charcoal";
import charcoalNoUnderline from "@/examples/link/charcoal-no-underline";

export default function LinkComponent() {
    return (
        <ComponentPage component="Link">
            <h1 className="goj-heading goj-heading--xlarge">Link</h1>

            <br />

            <h2>Default</h2>
            <Example example={link} />

            <h2>No Underline</h2>
            <Example example={noUnderline} />

            <h2>Charcoal</h2>
            <Example example={charcoal} />

            <h2>Charcoal No Underline</h2>
            <Example example={charcoalNoUnderline} />
        </ComponentPage>
    )
}
