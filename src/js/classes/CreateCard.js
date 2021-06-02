export default class CreateCard {
    constructor({ id, content, classes }) {
      this.id = id;
      this.content = content;
      this.classes = classes;
      this.output = this.render();
    }
    render() {
        const contentelems = this.createElements() || "";
        const editBtnEdit = this.createElement({
            elem: "button",
            content: "Edit card",
            classes: ["editBtns", "editBtnEdit"],
        });
        const editBtnDelete = this.createElement({
            elem: "button",
            content: "Delete card",
            classes: ["editBtns", "editBtnDelete"],
        });
        const addBtnWrapper = this.createElement({
            elem: "div",
            content: [editBtnEdit, editBtnDelete],
            classes: ["cards-btn--additional-wrapper"],
        });
        const editBtn = this.createElement({
            elem: "button",
            content: "EDIT",
            id: "editBtn",
            classes: ["cards-btn", "edit"],
        });
        const showMoreBtn = this.createElement({
            elem: "button",
            content: "SHOW/HIDE MORE",
            id: "showMoreBtn",
            classes: ["cards-btn", "showMore"],
        });
        const statusDoneBtn = this.createElement({
            elem: "button",
            content: ["Change status to \"DONE\""],
            id: "doneBtn",
            classes: ["cards-btn", "done"],
        });
        const divBtnWrapper = this.createElement({
            elem: "div",
            classes: ["card-btn-wrapper"],
            content: [editBtn, showMoreBtn, statusDoneBtn],
        });
        const wrapper = this.createElement({
            elem: "div",
            id: this.id,
            classes: ["card-wrapper"],
            content: [...contentelems, addBtnWrapper, divBtnWrapper],
        });

        return wrapper;
    }
  
    createElement({ elem, id, classes, content, attr, value }) {
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
        if (attr) {
            element.attr = value;
        }
        return element;
    }

    createElements() {
        let contentelems = [];
        for (let key in this.content) {
            if (key == "doctor" || key == "fullName") {
                contentelems.push(this.createElement({
                    elem: "p",
                    classes: ["cardelem", "defaultactive"],
                    content: [key, " - ", this.content[key]],
                }));
            } else {
                contentelems.push(this.createElement({
                    elem: "p",
                    classes: ["cardelem"],
                    content: [key, " - ", this.content[key]],
                }));
            }
        }
        return Array.from(contentelems);
    }
}