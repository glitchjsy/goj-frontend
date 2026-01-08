const html = `
<div class="goj-form-group">
    <label class="goj-label">
        What is the vehicle registration?
    </label>
    <input class="goj-input" type="text" />
</div>
`;

const react = `
<FormGroup label="What is the vehicle registration?">
    <Input type="text" />
</FormGroup>
`;

export default {
    title: "Small label",
    html,
    react
}