export default class HomeComponent extends HTMLElement {
    constructor() {
        super();
        this.root = this.attachShadow({ mode: 'closed' });
        this.render();
    }

    render() {
        this.root.innerHTML = `
            <app-navbar></app-navbar>
            <h1>Welcome !</h1>
        `
    }
}   

window.customElements.define('app-home', HomeComponent);