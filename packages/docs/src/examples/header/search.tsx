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
`;

const react = `
<Header
    search={(
        <Header.Search 
            placeholder="Search reports" 
            onSearch={(term) => console.log("Search term:", term)} 
        /> 
    )}
/>
`;

export default {
    title: "Header with Search",
    html,
    react
}