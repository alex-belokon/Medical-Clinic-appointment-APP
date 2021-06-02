import VisitDoctor from "./VisitDoctor.js";
import Input from "./Input.js";

export default class VisitTherapist extends VisitDoctor {
  constructor({ id, classes }) {
    super({ id, classes });
  }
  createFormElements() {
    const doctorFormElements = super.createFormElements();

    const age = new Input({
      type: "number",
      name: "therapistage",
      required: true,
      id: "therapistage",
      classes: ["inputs"],
      placeholder: "Patient's age",
      value: "",
    }).render();

    const submit = new Input({
      type: "submit", 
      name: "submit", 
      id: "submitvisit", 
      classes: ["inputs", "submit"], 
      value: "SUBMIT"}).render();

    return [...doctorFormElements, age, submit];
  }
}
