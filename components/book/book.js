class Book extends HTMLElement {

    static get observedAttributes() {
        return ['title', 'cover', 'description'];
      }

  constructor() {
    super();
    this.title = this.getAttribute('title');
    this.cover = this.getAttribute('cover');
    this.description = this.getAttribute('description');
  }

  connectedCallback() {
    const shadow = this.attachShadow({ mode: "closed" });
    shadow.innerHTML = `<div class="book">
                            <h4>${this.title}</h4>
                            <img class="image" src="${this.cover}"/>
                            <p class="description">${this.description}</p>
                        </div>
                        
                        <style>
                            .book {
                                padding: 15px;
                                width: 250px;
                                height: 300px;
                                border-radius: 10px;
                                background-color: #F9F9F9;
                            }
                        </style>`;
  }
}

customElements.define("book-component", Book);
