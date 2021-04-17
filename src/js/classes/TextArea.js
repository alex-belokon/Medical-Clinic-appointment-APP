export default class TextArea {
  constructor({ type, name, required, id, classes, placeholder, maxlength, value }) {
    this.type = type;
    this.name = name;
    this.required = required;
    this.id = id;
    this.classes = classes;
    this.placeholder = placeholder;
    this.maxlength = maxlength;
    this.value = value;
  }
  render() {
    let textarea = document.createElement("textarea");
    textarea.name = this.name;
    textarea.required = this.required;
    textarea.id = this.id;
    textarea.classList.add(...this.classes);
    textarea.placeholder = this.placeholder;
    textarea.maxlength = this.maxlength;
    textarea.value = this.value;

    this.textarea = textarea;

    return textarea;
  }
}
