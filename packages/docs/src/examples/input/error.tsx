const html = `
<div class="goj-form-group goj-form-group--error">
    <label class="goj-label goj-label">
        What is the vehicle registration?
    </label>
    <span class="goj-hint">
        The number on the number plate
    </span>
    <input class="goj-input goj-input--error" type="text" />
    <div class="goj-form-group__error-message">
        The vehicle registration entered is invalid
    </div>
</div>
`;

const react = `
<FormGroup 
    label="What is the vehicle registration?"
    hint="The number on the number plate"
    error="The vehicle registration entered is invalid"
>
    <Input type="text" error />
</FormGroup>
`;

export default {
    title: "Error",
    html,
    react
}