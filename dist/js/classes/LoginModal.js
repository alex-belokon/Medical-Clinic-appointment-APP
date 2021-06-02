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
        const labelLogin = this.createElement({
            elem: "label",
            content: ["Email address", login],
            classes: ["autorization-label"],
        });

        const password = new Input({
            type: "password", 
            name: "password", 
            required: true, 
            id: "password", 
            classes: ["inputs"], 
            placeholder: "", 
            value: "5653235"}).render();
        const labelPassword = this.createElement({
            elem: "label",
            content: ["Password", password],
            classes: ["autorization-label"],
        });

        const submit = new Input({
            type: "submit", 
            name: "submit", 
            id: "submit", 
            classes: ["inputs", "submit"], 
            value: "SUBMIT"}).render();

            return [additionalInfo, labelLogin, labelPassword, submit];
    }

    closeModal() {
        super.closeModal();
        document.getElementById("addinfo").textContent = "";
    }
}