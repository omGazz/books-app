class Book extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerText = 'myBook';
    }
}

customElements.define('book-component', Book);
