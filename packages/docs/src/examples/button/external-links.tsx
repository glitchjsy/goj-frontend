const html = `
<a href="#" class="goj-button goj-button--external-link">Apply now on external site</a>
<a href="#" class="goj-button goj-button--primary goj-button--external-link">External</a>
<a href="#" class="goj-button goj-button--secondary goj-button--external-link">External</a>
`

const react = `
<Button action="external" href="#">Apply now on external site</Button>
<Button action="external" variant="primary" href="#">External</Button>
<Button action="external" variant="secondary" href="#">External</Button>
`

export default {
    title: "External Links",
    html,
    react
}