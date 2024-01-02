import { eventBus } from "../services/EventBus.js";


export default class NavbarComponent extends HTMLElement {
    constructor() {
        super();
        this.root = this.attachShadow({ mode: 'closed' });
        this.render();
        this.handleLinkClick();
    }

    handleLinkClick() {
        const links = this.root.querySelectorAll('a');

        links.forEach(link => {
            link.addEventListener('click', event => {
                event.preventDefault(); 
                this.navigate(link.href);
            });
        })
    }

    navigate(url) {
        window.history.pushState({}, "", url);
        eventBus.fire("urlChanged", url);
    }

    render() {
        this.root.innerHTML =  `
            <link rel="stylesheet" href="./assets/css/index.css">
            <link rel="stylesheet" href="./assets/css/navbar.css">
            
            <nav id="main-nav">
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/contact">Contact</a>
            </nav>
        `
    }
}   
window.customElements.define('app-navbar', NavbarComponent)