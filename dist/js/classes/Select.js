export default class Select {
	constructor({ id, classes, options, required }) {
	  this.id = id;
	  this.classes = classes;
	  this.options = options;
	  this.required = required;
	}
	render() {
	  const selectList = document.createElement("select");
	  this.options.forEach((optionId, index) => {
		const opt = document.createElement("option");
		opt.textContent = optionId;
		opt.setAttribute("value", optionId);
		if (index === 0){
			opt.setAttribute("disabled", "disabled");
			opt.setAttribute("selected", "selected");
		}
		selectList.appendChild(opt);
	  });
	  
	  selectList.classList.add(...this.classes);
	  selectList.required = this.required;
	  this.selectList = selectList;
	  return selectList;
	}
  }