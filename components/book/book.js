class Book extends HTMLElement {
  static get observedAttributes() {
    return ["cover"];
  }

  constructor() {
    super();
    this.cover = this.getAttribute("cover");
  }

  connectedCallback() {
    const shadow = this.attachShadow({ mode: "closed" });
    shadow.innerHTML = `<div class="book">
                            <div class="cover-container">
                              <img class="cover" src="${this.cover}"/>
                            </div>
                        </div>
                        
                        <style>
                            .book {
                                display: flex;
                                align-items: center;
                                flex-direction: column;
                                padding: 15px;
                                margin: 5px;
                                width: 300px;
                             
                                border-radius: 10px;
                                background-color: #333333;
                            }

                            .cover {
                                width: 100%;
                            }

                            .cover-container {
                              overflow: hidden;
                              height: 460px;
                            }
                        </style>`;
  }
}

customElements.define("book-component", Book);
