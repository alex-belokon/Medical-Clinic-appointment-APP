export default class Form {
    constructor({ id, classes, action }) {
      this.id = id;
      this.action = action;
      this.classes = classes;
    }
    render() {
      let form = document.createElement("form");
      form.action = this.action;
      form.classes = this.classes;
      form.id = this.id;
      return form;
    }
}