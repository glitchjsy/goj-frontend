const html = `
<div class="goj-form-group" style="width: 100px">
    <label class="goj-label">
        Weight
    </label>
    <div class="goj-input-wrapper">
        <input class="goj-input" type="text" />
        <div class="goj-input__suffix">kg</div>
    </div>
</div>
`;

const react = `
<FormGroup 
    label="Weight"
    style={{ width: "100px" }}
>
    <Input type="text" suffix="kg" />
</FormGroup>
`;

export default {
    title: "Suffix",
    html,
    react
}