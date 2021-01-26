export default class Library {

    supportsTemplate = () => {
        return 'content' in document.createElement('template');
    }

    getSiteURL = () => {
        let siteUrl = "http://127.0.0.1:5500/";
        return siteUrl;
    }

    setPageTitle = (document, title) => {
        document.title = title;
    }
}