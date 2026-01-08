import ComponentPage from "@/components/ComponentPage";
import Example from "@/components/ui/Example";
import danger from "@/examples/alert/danger";
import warning from "@/examples/alert/warning";
import info from "@/examples/alert/info";
import success from "@/examples/alert/success";

export default function AlertComponent() {
    return (
        <ComponentPage component="Alert">
            <h1 className="goj-heading goj-heading--xlarge">Alert</h1>

            <br />

            <h2>Info</h2>
            <Example example={info} />

            <h2>Success</h2>
            <Example example={success} />

            <h2>Warning</h2>
            <Example example={warning} />

            <h2>Danger</h2>
            <Example example={danger} />
        </ComponentPage>
    )
}
