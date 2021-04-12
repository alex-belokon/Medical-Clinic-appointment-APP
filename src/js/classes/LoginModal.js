import Modal from "./Modal.js";
import Form from "./Form.js";
import Input from "./Input.js";

export default class LoginModal extends Modal {
	constructor({ id, classes }) {
		super ({ id, classes });
    }
    createForm(formElements = []) {
        const form = new Form({
            id: "register-form",
            classes: ["formclasses"],
            action: "",
        }).render();
        form.append(...formElements);
        return [form];
    }

    createFormElements () {	
        const additionalInfo = this.createElement({
            elem: "div",
            content: "",
            classes: ["addinfo"],
            id: "addinfo",
        });

        const login = new Input({
            type: "email", 
            name: "login", 
            required: true, 
            id: "login", 
            classes: ["inputs"], 
            placeholder: "", 
            value: "CRAZY_NURSE@DANIT.COM"}).render();
            // value: ""}).render();
        const labelLogin = this.createElement({
            elem: "label",
            content: ["Email address", login],
            classes: ["autorization-label"],
            // forlabel: "login",
            // value: "Email address" + login,
            // id: "addinfo",
        });

        const password = new Input({
            type: "password", 
            name: "password", 
            required: true, 
            id: "password", 
            classes: ["inputs"], 
            placeholder: "", 
            value: "5653235"}).render();
            // value: ""}).render();
        const labelPassword = this.createElement({
            elem: "label",
            content: ["Password", password],
            classes: ["autorization-label"],
            // forlabel: "password",
            // value: "Password",
            // id: "addinfo",
        });

        const submit = new Input({
            type: "submit", 
            name: "submit", 
            id: "submit", 
            classes: ["inputs", "submit"], 
            value: "SUBMIT"}).render();

            // return [additionalInfo, login, password, submit];
            return [additionalInfo, labelLogin, labelPassword, submit];
            // return this.createForm([login, password, submit]);
    }

    closeModal() {
        super.closeModal();
        document.getElementById("addinfo").textContent = "";
    }
}