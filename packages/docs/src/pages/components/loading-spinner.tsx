import ComponentPage from "@/components/ComponentPage";
import Example from "@/components/ui/Example";
import defaultSpinner from "@/examples/loading-spinner/default";
import inverse from "@/examples/loading-spinner/inverse";

export default function LoadingSpinnerComponent() {
    return (
        <ComponentPage component="Loading Spinner">
            <h1 className="goj-heading goj-heading--xlarge">Loading Spinner</h1>

            <br />

            <h2>Default</h2>
            <Example example={defaultSpinner} />

             <h2>Inverse</h2>
            <Example example={inverse} />
        </ComponentPage>
    )
}
