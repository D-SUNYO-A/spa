export default class ContactComponent extends HTMLElement {
    constructor() {
        super();
        this.root = this.attachShadow({ mode: 'closed' });
        this.render();
    }

    render() {
        this.root.innerHTML = `
            <app-navbar></app-navbar>
            <h1>Let's get in touch</h1>
        `
    }
}   

window.customElements.define('app-contact', ContactComponent);