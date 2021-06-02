export default function clearModalFields(particularModal) {
    const forms = Object.values(particularModal.getElementsByTagName("form"));
    forms.forEach((form) => {
        Object.values(form.children).forEach((element) => {
            if (element.tagName === "LABEL") {
                Object.values(element.children).forEach((subelem) => {
                    subelem.value = "";
                })
            } else {
                if (element.getAttribute("type") != "submit") {
                element.value = "";
                }
            }
            if (element.tagName === "SELECT") {
            element.value = element.firstElementChild.value;
            }
        });
    });
    const doctorForm = document.querySelector('#doctorForm');
    if (doctorForm != null) {
    doctorForm.remove();
    }
}