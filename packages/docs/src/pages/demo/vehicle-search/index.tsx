import ExitDemoToolbar from "@/components/ui/ExitDemoToolbar";
import { Alert, Breadcrumbs, Button, DataList, Footer, FormGroup, Grid, Header, Heading, Input, Sidebar } from "@goj-frontend/react";
import { useState } from "react"

export default function VehicleSearch() {
    const [data, setData] = useState<any>();
    const [plate, setPlate] = useState<string>("");

    return (
        <>
            <div className="goj-full-screen-height-flex" style={{ minHeight: "80vh" }}>
                <ExitDemoToolbar />
                <Header />

                <div className="goj-container">
                    <Breadcrumbs>
                        <Breadcrumbs.Item href="/">Home</Breadcrumbs.Item>
                        <Breadcrumbs.Item href="/">Travel and transport</Breadcrumbs.Item>
                        <Breadcrumbs.Item href="/">Motoring</Breadcrumbs.Item>
                        <Breadcrumbs.Item>Vehicle search</Breadcrumbs.Item>
                    </Breadcrumbs>

                    {!data ? <SearchPage setData={setData} plate={plate} setPlate={setPlate} /> : <InfoPage plate={plate} data={data} />}
                </div>
            </div>

            <Footer />
        </>
    )
}

function SearchPage({ setData, setPlate, plate }: any) {
    const [error, setError] = useState<string>("");
    const [fetchError, setFetchError] = useState<string>("");

    const onSubmit = async () => {
        try {
            const response = await fetch(`https://api.opendata.je/v1/vehicles/lookup/${plate}`);
            const data = await response.json();

            if (data?.message === "Invalid plate") {
                setError("Invalid vehicle registration");
            } else {
                setData(data.results);
            }
        } catch (e: any) {
            setFetchError(e.message);
        }
    }

    return (
        <Grid.Row>
            <Grid.Col full lgTwoThirds>
                <Heading as="h1" size="large">Vehicle Search</Heading>

                <p className="gojk-p">Check online to find out what information Driver and Vehicle Standards (DVS) holds about a vehicle.</p>
                <br />
                {fetchError && <Alert variant="danger">{fetchError}</Alert>}
                <br />
                <FormGroup
                    inputId="vehicleReg"
                    label="Vehicle Registration Number"
                    hint="For example, J199582"
                    error={error}
                >
                    <Input value={plate} onChange={(e) => setPlate(e.target.value)} error={error !== ""} />
                </FormGroup>

                <br />

                <Button variant="primary" onClick={onSubmit} style={{ width: "fit-content" }}>
                    Search
                </Button>
            </Grid.Col>

            <Grid.Col full lgOneThird>
                <Sidebar style={{ marginTop: "5px", marginBottom: "15px" }}>
                    <Sidebar.Panel title="Contact">
                        <Sidebar.Contact
                            organisation="Driver & Vehicle Standards"
                            phone="01534448600"
                            email="dvsinfo@gov.je"
                            hours="Monday to Friday 8.30am to 4pm"
                            addressLines={[
                                "Driver and Vehicle Standards",
                                "La Route De Veulle",
                                "La Collette",
                                "St Helier",
                                "Jersey",
                                "JE1 3UE",
                            ]}
                            signVideo
                        />
                    </Sidebar.Panel>
                </Sidebar>
            </Grid.Col>
        </Grid.Row>
    )
}

function InfoPage({ plate, data }: any) {
    return (
        <Grid.Row>
            <Grid.Col full lgTwoThirds>
                <Heading size="large">Vehicle Details</Heading>

                <br />

                <div style={{ background: "#00703C", padding: "6px 40px", color: "white", width: "fit-content", fontFamily: "Arial,sans-serif", textAlign: "center" }}>
                    <p style={{ fontSize: "24px", marginBottom: "10px" }}>PTI Status</p>
                    <p>N/A over 40 years old</p>
                </div>

                <br />

                <DataList style={{ marginBottom: "35px" }}>
                    <DataList.Item label="Registration number">{plate}</DataList.Item>
                    <DataList.Item label="Make">{data?.make}</DataList.Item>
                    <DataList.Item label="Type">{data?.type}</DataList.Item>
                    <DataList.Item label="Colour">{data?.color}</DataList.Item>
                    <DataList.Item label="Cylinder capacity">{data?.cylinderCapacity}</DataList.Item>
                    <DataList.Item label="CO₂ emissions">{data?.co2Emissions}</DataList.Item>
                    <DataList.Item label="Fuel type">{data?.fuelType}</DataList.Item>
                    <DataList.Item label="Date of first registration">{data?.firstRegisteredAt}</DataList.Item>
                    <DataList.Item label="Date registered in Jersey">{data?.firstRegistedInJerseyAt}</DataList.Item>
                    <DataList.Item label="Number of previous owners">{data?.previousOwner}</DataList.Item>
                </DataList>
            </Grid.Col>

            <Grid.Col full lgOneThird>
                <Sidebar style={{ marginTop: "5px", marginBottom: "15px" }}>
                    <Sidebar.Panel title="Contact">
                        <Sidebar.Contact
                            organisation="Driver & Vehicle Standards"
                            phone="01534448600"
                            email="dvsinfo@gov.je"
                            hours="Monday to Friday 8.30am to 4pm"
                            addressLines={[
                                "Driver and Vehicle Standards",
                                "La Route De Veulle",
                                "La Collette",
                                "St Helier",
                                "Jersey",
                                "JE1 3UE",
                            ]}
                            signVideo
                        />
                    </Sidebar.Panel>
                </Sidebar>
            </Grid.Col>
        </Grid.Row>
    )
}