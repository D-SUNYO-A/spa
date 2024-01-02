export default class AboutComponent extends HTMLElement {
    constructor() {
        super();
        this.root = this.attachShadow({ mode: 'closed' });
        this.render();
    }

    render() {
        this.root.innerHTML = `
            <app-navbar></app-navbar>
            <h1>About us</h1>
        `
    }
}   

window.customElements.define('app-about', AboutComponent);