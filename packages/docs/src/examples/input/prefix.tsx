const html = `
<div class="goj-form-group" style="width: 100px">
    <label class="goj-label">
        Price
    </label>
    <div class="goj-input-wrapper">
        <div class="goj-input__prefix">£</div>
        <input class="goj-input" type="text" />
    </div>
</div>
`;

const react = `
<FormGroup 
    label="Price"
    style={{ width: "100px" }}
>
    <Input type="text" prefix="£" />
</FormGroup>
`;

export default {
    title: "Prefix",
    html,
    react
}