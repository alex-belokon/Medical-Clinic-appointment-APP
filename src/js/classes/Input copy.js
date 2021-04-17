export default class Input {
	constructor({type, name, required, id, classes, placeholder, value}) {
		this.type = type;
		this.name = name; 
		this.required = required;
		this.id = id;
		this.classes = classes;
		this.placeholder = placeholder;
		this.value = value;
	}
	render() {
		let input = document.createElement("input");
		input.type = this.type;
		input.name = this.name;
		input.required = this.required;
		input.id = this.id;
		input.classList.add(...this.classes);
		input.placeholder = this.placeholder;
		input.value = this.value;
		
		this.input = input;

		return input;
	}
}
