import VisitCardiologist from "../classes/VisitCardiologist.js";
import VisitDentist from "../classes/VisitDentist.js";
import VisitTherapist from "../classes/VisitTherapist.js";
import pushInfoToDB from "./pushInfoToDB.js";
import putInfoToDB from "./putInfoToDB.js";
import getInfoFromDB from "./getInfoFromDB.js";
import createNewCard from "./createNewCard.js";
import CreateCard from "../classes/CreateCard.js";
import cardsBtnsHandler from "./cardsBtnsHandler.js";
import clearModalFields from "./clearModalFields.js";

export default function createDoctorForm(index, visitModal, id = '', content = {}, switcher = true) {
    const cardiologistForm = new VisitCardiologist({
        classes: ["modal", "visit"],
    }).render();
    const dentistForm = new VisitDentist({
        classes: ["modal", "visit"],
    }).render();
    const therapistForm = new VisitTherapist({
        classes: ["modal", "visit"],
    }).render();

    const doctorForm = document.querySelector('#doctorForm');
    
    if (switcher) {
        if (doctorForm != null) {
            doctorForm.remove();
        }
        content = {
            status: "Open",
        };
    }

    let pressure, massIndex, diseases, age, age_, lastvisitdate;
    if (index === 1) {
        content.doctor = "Cardiologist";
        visitModal.append(cardiologistForm);

        pressure = document.querySelector('#pressure');
        massIndex = document.querySelector('#massindex');
        diseases = document.querySelector('#diseases');
        age = document.querySelector('#cardioage');
    }
    if (index === 2) {
        content.doctor = "Dentist";
        visitModal.append(dentistForm);

        lastvisitdate = document.querySelector('#lastvisitdate');
    }
    if (index === 3) {
        content.doctor = "Therapist";
        visitModal.append(therapistForm);

        age_ = document.querySelector('#therapistage');
    }

    const title = document.querySelector('#purpose');
    const description = document.querySelector('#description');
    const fullName = document.querySelector('#patient');
    const priority = Array.from(document.querySelector('.urgency').children);
    const addInfo = document.querySelector('#generaladdinfo');

    if (!switcher) {
        [title.value, description.value, fullName.value, addInfo.value] = [content.title, content.description, content.fullName, content.addInfo];
        priority.forEach((option) => {
            if (option.value == content.priority) {
                option.setAttribute("selected", "selected");
            }
        });
        if (index === 1) {
            [pressure.value, massIndex.value, diseases.value, age.value] = [content.pressure, content.massIndex, content.diseases, content.age];
        }
        if (index === 2) {
            lastvisitdate.value = content.lastvisitdate;
        }
        if (index === 3) {
            age_.value = content.age_;
        }
    }

    const submitBtn = document.getElementById("submitvisit");
    submitBtn.addEventListener("click", function(e) {
        e.preventDefault();
        const priority = document.querySelector('.urgency');
        let flag = true;
        content.title = title.value;
        content.description = description.value;
        content.fullName = fullName.value;
        content.priority = priority.value;
        content.addInfo = addInfo.value;
        if (!title.validity.valid || !description.validity.valid || !fullName.validity.valid || !priority.validity.valid) {
            flag = false;
        }
        if (index === 1) {
            content.pressure = pressure.value;
            content.massIndex = massIndex.value;
            content.diseases = diseases.value;
            content.age = age.value;
            if (!pressure.validity.valid || !massIndex.validity.valid || !diseases.validity.valid || !age.validity.valid) {
                flag = false;
            }
        }
        if (index === 2) {
            content.lastvisitdate = lastvisitdate.value;
            if (!lastvisitdate.validity.valid) {
                flag = false;
            }
        }
        if (index === 3) {
            content.age_ = age_.value;
            if (!age_.validity.valid) {
                flag = false;
            }
        }
        if (!flag) {
            console.log("Some field(s) do(es) not valid");
        } else {
            if (switcher) {
                getInfoFromDB()
                    .then((data) => {
                        if (data.length == 0) {
                            document.getElementById("noitems").remove();
                        }
                });
                pushInfoToDB(content)
                    .then((data) => {
                        const returnedid = JSON.parse(data).id;
                        createNewCard(returnedid, content);
                    })
                    .catch((err) => {
                        console.log(err.message);
                    });
            } else {
                putInfoToDB(id, content)
                    .then((data) => {
                        const oldCard = document.getElementById(id);
                        const returnedContent = JSON.parse(data).content;
                        const newCard = new CreateCard ({
                            id: id,
                            content: returnedContent,
                        }).render();
                        document.getElementById("divCardsId").replaceChild(newCard, oldCard);
                        if (content.status == "Done") {
                            const statusDoneBtn = newCard.getElementsByClassName("cards-btn done")[0];
                            statusDoneBtn.disabled = true;
                        }
                        cardsBtnsHandler(newCard, returnedContent);
                    })
                    .catch((err) => {
                        console.log(err.message);
                    });
            }
            visitModal.classList.remove("active");
            clearModalFields(visitModal);
        }
    });
}