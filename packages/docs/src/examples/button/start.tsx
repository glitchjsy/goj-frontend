const html = `
<a href="#" class="goj-button goj-button--start">Start now</a>
<a href="#" class="goj-button goj-button--primary goj-button--start">Start now</a>
<a href="#" class="goj-button goj-button--secondary goj-button--start">Start now</a>
`

const react = `
<Button action="start" href"#">Start now</Button>
<Button action="start" variant="primary" href="#">Start now</Button>
<Button action="start" variant="secondary" href="#">Start now</Button>
`

export default {
    title: "Start Buttons",
    html,
    react
}