import { createVisitBtn, root } from "./constants.js";
import VisitModal from "../classes/VisitModal.js";
import createDoctorForm from "./createDoctorForm.js";
// import clearModalFields from "./clearModalFields.js";

export default function createModalVisit(switcher, id, content) {
  if (switcher) {
    const visitModalForm = new VisitModal({
      id: "modalVisit",
      classes: ["modal", "visit"],
    });
    const visitModal = visitModalForm.modal;
    root.append(visitModal);
    
    createVisitBtn.addEventListener("click",  function (e) {
      e.stopPropagation();
      visitModalForm.openModal();
      const selectForm = document.querySelector("#visit-form");
      selectForm.style.display = "block";
      const select = document.querySelector(".form-select");
      // visitModal.scrollIntoView();
    
      select.addEventListener("change", () => {
        let index = select.options.selectedIndex;
        createDoctorForm(index, visitModal);
      });
    });
  } else {
    const visitModal = document.getElementById("modalVisit");
    visitModal.classList.add("active");
    const selectForm = document.querySelector("#visit-form");
    selectForm.style.display = "none";
    visitModal.scrollIntoView();
    
    let index;
    if (content.doctor == "Cardiologist") {
      index = 1;
    }
    if (content.doctor == "Dentist") {
      index = 2;
    }
    if (content.doctor == "Therapist") {
      index = 3;
    }
    createDoctorForm(index, visitModal, id, content, false);
  }
  
  const visitModal = document.getElementById("modalVisit");
  const closeBtn = document.querySelector(".close");
  document.addEventListener('click', function(e) {
    const target = e.target;
    const itsmodal = target == visitModal || visitModal.contains(target);
    const itsbtn = target == closeBtn;
    const modalIsActive = visitModal.classList.contains("active");
    
    if (!itsmodal && !itsbtn && modalIsActive) {
      visitModal.classList.remove("active");
      clearModalFields(visitModal);
    }
  });
}
