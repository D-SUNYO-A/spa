import { eventBus } from "./services/EventBus.js";
import { routes } from "./utils/routes.js";
import NavbarComponent from "./components/Navbar.js";
import HomeComponent  from "./pages/Home.js";
import AboutComponent  from "./pages/About.js";
import ContactComponent  from "./pages/Contact.js";
import NotFoundComponent  from "./pages/404.js";

export default class AppComponent extends HTMLElement {
    constructor() {
        super();
        this.root = this.attachShadow({ mode: 'closed' });
        
        this.render();
        
        // Gestionnaire pour l'événement popstate
        window.addEventListener('popstate', () => {
            this.handleLocation();
        });

        // Appel de handleLocation au chargement initial
        this.handleLocation();
        
        // Enregistrement de l'événement urlChanged
        eventBus.register('urlChanged', () => {
            this.handleLocation();
        });
    }

    handleLocation() {
        const path = window.location.pathname;
        const routeRender = routes[path] || routes[404];
        const app = this.root.getElementById("app");
        app.innerHTML = "";
        app.appendChild(document.createElement(routeRender));
    }

    render() {
        this.root.innerHTML = `
            <div id="app"></div>
        `
    }
}

window.customElements.define('app-app', AppComponent);