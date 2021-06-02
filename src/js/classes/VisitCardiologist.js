import VisitDoctor from "./VisitDoctor.js";
import Input from "./Input.js";
import TextArea from "./TextArea.js";

export default class VisitCardiologist extends VisitDoctor {
  constructor({ id, classes }) {
    super({ id, classes });
  }
  createFormElements() {
    const doctorFormElements = super.createFormElements();

    const pressure = new Input({
      type: "number",
      name: "pressure",
      required: true,
      id: "pressure",
      classes: ["inputs"],
      placeholder: "Usual pressure",
      value: "",
    }).render();

    const massIndex = new Input({
      type: "number",
      name: "massindex",
      required: true,
      id: "massindex",
      classes: ["inputs"],
      placeholder: "Body mass index",
      value: "",
    }).render();

    const heartDiseases = new TextArea({
      maxlength: "300", 
      name: "diseases",
      required: true,
      id: "diseases",
      classes: ["textarea"],
      placeholder: "Diseases of the cardiovascular system",
      value: "",
    }).render();

    const age = new Input({
      type: "number",
      name: "cardioage",
      required: true,
      id: "cardioage",
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

    return [...doctorFormElements, pressure, massIndex, heartDiseases, age, submit];
  }
}
