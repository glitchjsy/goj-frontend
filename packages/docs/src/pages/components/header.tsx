import ComponentPage from "@/components/ComponentPage";
import Example from "@/components/ui/Example";
import defaultHeader from "@/examples/header/default";
import search from "@/examples/header/search";
import branded from "@/examples/header/branded";
import navigationItems from "@/examples/header/navigation-items";

export default function HeaderComponent() {
    return (
        <ComponentPage component="Header">
            <h1 className="goj-heading goj-heading--xlarge">Header</h1>

            <br />

            <h2>Default</h2>
            <Example example={defaultHeader} />

            <h2>Search Bar</h2>
            <Example example={search} />

            <h2>Navigation</h2>
            <Example example={navigationItems} />

            <h2>Branded Example</h2>
            <Example example={branded} />
        </ComponentPage>
    )
}
