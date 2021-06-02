import clearModalFields from "../utilities/clearModalFields.js";

export default class Modal {
    constructor({ id, classes }) {
      this.id = id;
      this.classes = classes;
      this.modal = this.render();
    }
    render() {
      const contentelems = this.createForm(this.createFormElements()) || "";
      
      const span = this.createElement({
        elem: "span",
        content: "X",
        classes: ["close"],
      });
      
      const divModal = this.createElement({
        elem: "div",
        classes: this.classes,
        content: [span, ...contentelems],
        id: this.id,
      });

      span.addEventListener("click", () => this.closeModal());

      return divModal;
    }
  
    createElement({ elem, id, classes, content }) {
      const element = document.createElement(elem);
      if (id) {
        element.id = id;
      }
      if (classes) {
        element.classList.add(...classes);
      }
      if (content) {
        element.append(...content);
      }
  
      return element;
    }
  
    createForm(formElements = []) {
      return formElements;
    }
    
    openModal() {
      this.modal.classList.add("active");
    }
    closeModal() {
      this.modal.classList.remove("active");
      clearModalFields(this.modal);
    }
  }
  