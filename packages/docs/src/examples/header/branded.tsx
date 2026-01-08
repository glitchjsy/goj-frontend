const html = `
<header class="goj-header" style="background-color: #2B837C">
    <div class="goj-header__container">
        <a href="https://www.gov.je" title="gov.je home" class="goj-header__logo">
            <img id="M_Image2" src="https://cdn.gov.je/govje/images/Gov-Jersey-Crest.svg" alt="gov.je" />
            Love Jersey
        </a>
    </div>
</header>
<div class="goj-header__navigation-wrapper">
    <div class="goj-header__container goj-flex goj-flex__space-between">
        <div class="goj-header__navigation lovejersey">
            <a href="#" class="goj-header__navigation-item">Home</a>
            <a href="#" class="goj-header__navigation-item">Reports</a>
            <a href="#" class="goj-header__navigation-item">Add report</a>
            <a href="#" class="goj-header__navigation-item">Live map</a>
            <a href="#" class="goj-header__navigation-item">How it works</a>
        </div>
        <div class="goj-header__navigation lovejersey">
            <a href="#" class="goj-header__navigation-item">Log in</a>
            <a href="#" class="goj-header__navigation-item">Sign up</a>
        </div>
    </div>
</div>
`;

const react = `
 <Header 
    enableMobileNavigation
    brand={<Header.Brand brandName="Love Jersey" href="https://www.gov.je" />}
>
    <Header.Navigation>
        <Header.NavigationItem href="#">Home</Header.NavigationItem>
        <Header.NavigationItem href="#">Reports</Header.NavigationItem>
        <Header.NavigationItem href="#">Add report</Header.NavigationItem>
        <Header.NavigationItem href="#">Live map</Header.NavigationItem>
        <Header.NavigationItem href="#">How it works</Header.NavigationItem>
    </Header.Navigation>

    <Header.Navigation>
        <Header.NavigationItem href="#">Log in</Header.NavigationItem>
        <Header.NavigationItem href="#">Sign up</Header.NavigationItem>
    </Header.Navigation>
</Header>
`;

export default {
    title: "Branded Header",
    html,
    react
}