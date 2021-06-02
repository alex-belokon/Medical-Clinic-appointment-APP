import VisitDoctor from "./VisitDoctor.js";
import Input from "./Input.js";

export default class VisitDentist extends VisitDoctor {
  constructor({ id, classes }) {
    super({ id, classes });
  }

  createFormElements() {
    const doctorFormElements = super.createFormElements();
    
    const lastVisit = new Input({
      type: "date",
      name: "date",
      required: true,
      id: "lastvisitdate",
      classes: ["inputs"],
      placeholder: "Last visit date",
      value: "",
    }).render();
    
    const submit = new Input({
      type: "submit", 
      name: "submit", 
      id: "submitvisit", 
      classes: ["inputs", "submit"], 
      value: "SUBMIT"}).render();

    return [...doctorFormElements, lastVisit, submit];
  }
}
