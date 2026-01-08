const html = `
<header class="goj-header">
    <div class="goj-header__container">
        <a href="https://www.gov.je" title="gov.je home" class="goj-header__logo">
            <img id="M_Image2" src="https://cdn.gov.je/govje/images/Gov-Jersey-Crest.svg" alt="gov.je" />
            gov.je
        </a>
        <div class="goj-header__actions">
            <div class="goj-input-wrapper goj-full-width">
                <input type="text" class="goj-input goj-header__search" placeholder="Search gov.je" />
                <button class="goj-input__suffix goj-header__search-icon"></button>
            </div>
        </div>
    </div>
</header>
<div class="goj-header__navigation-wrapper">
    <div class="goj-header__container goj-flex goj-flex__space-between">
        <div class="goj-header__navigation">
            <a href="#" class="goj-header__navigation-item">Home</a>
            <a href="#" class="goj-header__navigation-item">Reports</a>
            <a href="#" class="goj-header__navigation-item">Add report</a>
            <a href="#" class="goj-header__navigation-item">Live map</a>
            <a href="#" class="goj-header__navigation-item">How it works</a>
        </div>
        <div class="goj-header__navigation">
            <a href="#" class="goj-header__navigation-item">Log in</a>
            <a href="#" class="goj-header__navigation-item">Sign up</a>
        </div>
    </div>
</div>
`;

const react = `
<Header 
    enableMobileNavigation
    search={(
        <Header.Search 
            placeholder="Search gov.je" 
            onSearch={(term) => console.log("Search term:", term)} 
        /> 
    )}
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
    title: "Header with Navigation Items",
    html,
    react
}