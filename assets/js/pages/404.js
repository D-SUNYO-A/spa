export default class NotFoundComponent extends HTMLElement {
    constructor() {
        super();
        this.root = this.attachShadow({ mode: 'closed' });
        this.render();
    }

    render() {
        this.root.innerHTML = `
            <app-navbar></app-navbar>
            <h1>Error 404</h1>
        `
    }
}   

window.customElements.define('app-notfound', NotFoundComponent);