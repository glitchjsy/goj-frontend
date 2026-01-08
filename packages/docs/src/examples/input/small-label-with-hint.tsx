const html = `
<div class="goj-form-group">
    <label class="goj-label">
        What is the vehicle registration?
    </label>
    <span class="goj-hint">
        The number on the number plate
    </span>
    <input class="goj-input" type="text" />
</div>
`;

const react = `
<FormGroup 
    label="What is the vehicle registration?"
    hint="The number on the number plate"
>
    <Input type="text" />
</FormGroup>
`;

export default {
    title: "Small label with hint",
    html,
    react
}