import Select from "./Select.js";
import Input from "./Input.js";
import TextArea from "./TextArea.js";
import Form from "./Form.js";

export default class VisitDoctor {
  constructor({ id, classes }) {
    this.id = id;
    this.classes = classes;
    this.visit = this.render();
  }
  render() {
    const contentelems = this.createFormElements() || "";

    const formDoctor = new Form({
      id: "doctorForm",
      classes: this.classes,
      content: [...contentelems],
      action: "",
    }).render();
    formDoctor.append(...contentelems);
    return formDoctor;
  }

  createFormElements() {
    const purposeVisit = new Input ({
      type: "text",
      name: "purpose",
      required: true,
      id: "purpose",
      classes: ["inputs"],
      placeholder: "Purpose of visit",
      value: "",
    }).render();

    const shortDescription = new TextArea({
      maxlength: "300",
      name: "description",
      required: true,
      id: "description",
      classes: ["textarea"],
      placeholder: "Short description of visit",
      value: "",
    }).render();

    const patient = new Input ({
      type: "text",
      name: "patient",
      required: true,
      id: "patient",
      classes: ["inputs"],
      placeholder: "Patient's full name",
      value: "",
    }).render();

    const urgency = new Select({
      id: "urgency",
      required: true,
      classes: ["form-select", "urgency"],
      options: ["Priority", "High", "Normal", "Low"],
    }).render();

    const additionalInfo = new TextArea({
      maxlength: "300",
      name: "addinfo",
      required: false,
      id: "generaladdinfo",
      classes: ["textarea"],
      placeholder: "Additional information",
      value: "",
    }).render();

    return [purposeVisit, shortDescription, patient, urgency, additionalInfo];
  }
}
