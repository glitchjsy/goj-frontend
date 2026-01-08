import ComponentPage from "@/components/ComponentPage";
import Example from "@/components/ui/Example";
import dataList from "@/examples/data-list";

export default function DataListComponent() {
    return (
        <ComponentPage component="Data List">
            <h1 className="goj-heading goj-heading--xlarge">Data List</h1>

            <br />

            <Example example={dataList} />
        </ComponentPage>
    )
}
