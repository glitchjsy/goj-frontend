const html = `
<div class="goj-form-group goj-form-group--error">
    <label class="goj-label">
        What department do you need?
    </label>
    <span class="goj-hint">
        Select all that apply
    </span>
    <div class="goj-checkboxes">
        <div class="goj-checkboxes__item">
            <input id="test" class="goj-checkboxes__input" type="checkbox" value="yes">
            <label for="test" class="goj-checkboxes__label">HM Revenue and Customs (HMRC)</label>
        </div>
        <div class="goj-checkboxes__item">
            <input class="goj-checkboxes__input" type="checkbox" value="yes">
            <label class="goj-checkboxes__label">Employment Tribunal</label>
        </div>
        <div class="goj-checkboxes__item">
            <input class="goj-checkboxes__input" type="checkbox" value="yes">
            <label class="goj-checkboxes__label">Ministry of Defence</label>
        </div>
    </div>
    <div class="goj-form-group__error-message">
        Invalid selection
    </div>
</div>
`;

export default {
    title: "Error",
    html
}