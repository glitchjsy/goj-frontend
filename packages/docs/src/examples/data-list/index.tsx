const html = `
<div class="goj-data-list">
    <div class="goj-data-list__row">
        <p class="goj-data-list__key">Registration number</p>
        <p class="goj-data-list__value">J1</p>
    </div>
    <div class="goj-data-list__row">
        <p class="goj-data-list__key">Make</p>
        <p class="goj-data-list__value">ROLLS ROYCE</p>
    </div>
    <div class="goj-data-list__row">
        <p class="goj-data-list__key">Type</p>
        <p class="goj-data-list__value">Convertible</p>
    </div>
    <div class="goj-data-list__row">
        <p class="goj-data-list__key">Colour</p>
        <p class="goj-data-list__value">Silver</p>
    </div>
    <div class="goj-data-list__row">
        <p class="goj-data-list__key">Cylinder capacity</p>
        <p class="goj-data-list__value">6181 (cc)</p>
    </div>
    <div class="goj-data-list__row">
        <p class="goj-data-list__key">Weight</p>
        <p class="goj-data-list__value">Not known</p>
    </div>
    <div class="goj-data-list__row">
        <p class="goj-data-list__key">CO₂ emissions</p>
        <p class="goj-data-list__value">Not known</p>
    </div>
    <div class="goj-data-list__row">
        <p class="goj-data-list__key">Fuel type</p>
        <p class="goj-data-list__value">Petrol</p>
    </div>
    <div class="goj-data-list__row">
        <p class="goj-data-list__key">Date of first registration</p>
        <p class="goj-data-list__value">01 February 1921</p>
    </div>
    <div class="goj-data-list__row">
        <p class="goj-data-list__key">Date registered in Jersey</p>
        <p class="goj-data-list__value">25 May 2001</p>
    </div>
    <div class="goj-data-list__row">
        <p class="goj-data-list__key">Number of previous owners</p>
        <p class="goj-data-list__value">0</p>
    </div>
</div>
`;

const react = `
<DataList>
    <DataList.Item label="Registration number">J1</DataList.Item>
    <DataList.Item label="Make">ROLLS ROYCE</DataList.Item>
    <DataList.Item label="Type">Convertible</DataList.Item>
    <DataList.Item label="Colour">Silver</DataList.Item>
    <DataList.Item label="Cylinder capacity">6181 (cc)</DataList.Item>
    <DataList.Item label="Weight">Not known</DataList.Item>
    <DataList.Item label="CO₂ emissions">Not known</DataList.Item>
    <DataList.Item label="Fuel type">Petrol</DataList.Item>
    <DataList.Item label="Date of first registration">01 February 1921</DataList.Item>
    <DataList.Item label="Date registered in Jersey">25 May 2001</DataList.Item>
    <DataList.Item label="Number of previous owners">0</DataList.Item>
</DataList>
`;

export default {
    title: "data List",
    html,
    react
}