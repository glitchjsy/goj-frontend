const html = `
<button class="goj-button" disabled>Disabled</button>
<button class="goj-button goj-button--primary" disabled>Disabled</button>
<button class="goj-button goj-button--secondary" disabled>Disabled</button>
<button class="goj-button goj-button--primary goj-button--start" disabled>Disabled</button>
<button class="goj-button goj-button--secondary goj-button--external-link" disabled>Disabled</button>
`

const react = `
<Button disabled>Disabled</button>
<Button variant="primary" disabled>Disabled</button>
<Button variant="secondary" disabled>Disabled</button>
<Button variant="primary" action="start" disabled>Disabled</button>
<Button variant="secondary" action="external" disabled>Disabled</button>
`

export default {
    title: "Disabled Buttons",
    html,
    react
}