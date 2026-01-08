const html = `
<button class="goj-button goj-button--inverse">Test button</button>
<a href="#" class="goj-button goj-button--inverse goj-button--start">Start now</a>
<button class="goj-button goj-button--inverse" disabled>Disabled</button>
<a href="#" class="goj-button goj-button--inverse goj-button--external-link" disabled>External</a>
`;

const react = `
<Button variant="inverse">Test button</Button>
<Button variant="inverse" action="start" href="#">Start now</Button>
<Button variant="inverse" disabled>Disabled</Button>
<Button variant="inverse" action="external" href="#" disabled>External</Button>
`;

export default {
    title: "Inverse Button",
    inverse: true,
    html,
    react
}