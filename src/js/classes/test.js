document.getElementById("#result");
button = document.getElementById('createCard');
let visitInput = document.getElementById('doctor-selector');
let dateInput = document.getElementById('visitDate');
let fullNameInput = document.getElementById('fullName');
let input = document.getElementById("formElem");
let div = document.getElementById('result');
let age = document.getElementById('age');
let title = document.getElementById('title');
let lastVisitDate = document.getElementById('lastDate');
let text = "";

class Visit {
    constructor(visitName, visitDate, fullName) {
        this.visitName = visitName.selectedOptions[0].value;
        this.fullName = fullName.value;
        this.visitDate = visitDate.value;
        this.age = age.value;
    }

    render() {

        let button = document.getElementById('deleteCard');

        div.innerText = text;
        div.innerHTML += `<li>${this.visitName}</li>` + `<li>ФИО: ${this.fullName}</li>` + `<li>Дата визита: ${this.visitDate}</li>`;
        div.append(button); //add delete button

        $('.note:first').clone().appendTo('.content').show().draggable({containment: '.content'}); //drag&drop
        $("#empty").hide();

        localStorage.setItem('visit', JSON.stringify(new Visit(visitInp, dateInp, fullNameInp)));
    }
}

class VisitCardio extends Visit {
    constructor(visitName, date, fullName, CardiovisitGoal, pressure, bodyMassIndex, pastDiseases, age) {
        super();
        this.CardiovisitGoal = CardiovisitGoal;
        this.pressure = pressure;
        this.bodyMassIndex = bodyMassIndex;
        this.pastDiseases = pastDiseases;
        this.age = age.value;
    }

    show() {
        let cardiologist = new VisitCardio(visitInp, dateInp, fullNameInp);

        return this.CardiovisitGoal;
    }

}

class VisitDentist extends Visit {
    constructor(fullName, lastVisitDate, title) {
        super();
        this.title = title.value;
        this.fullName = fullName.value;
        this.lastVisitDate = lastVisitDate.value;
    }
    render() {
        let dentist = new VisitDentist(visitInp, dateInp, fullNameInp);

        div.innerHTML += `<li>${dentist.title}</li>` + `<li>ФИО: ${dentist.fullName}</li>` + `<li>Дата визита: ${dentist.lastVisitDate}</li>`;
        div.append(button); //add delete button

        localStorage.setItem('dentist', JSON.stringify(new VisitDentist(fullNameInp, title, lastVisitDate)));
    }

}

class VisitTherapist extends Visit {
    constructor(fullName, age, title) {
        super(age, title);
        this.title = title.value;
        this.age = age.value;
    }
    render() {
        let therapist = new VisitTherapist(visitInp, dateInp, fullNameInp);

        div.innerHTML += `<li>${therapist.title}</li>` + `<li>ФИО: ${therapist.fullName}</li>` + `<li>Дата визита: ${therapist.age}</li>`;
        div.append(button); //add delete button

        localStorage.setItem('dentist', JSON.stringify(new VisitTherapist(age, title, fullNameInp)));
    }
}

button.addEventListener('click', function () {

    if (doctor.selectedOptions[0].value === "dentist") {
        let dentist = new VisitDentist(fullNameInp, title, lastVisitDate);
        dentist.render();
    }

    else if (doctor.selectedOptions[0].value === "cardiologist") {
        let cardiologist = new VisitCardio(visitInp, dateInp, fullNameInp);
        cardiologist.render();
    }

    else if (doctor.selectedOptions[0].value === "therapist") {
        let therapist = new VisitTherapist(age, title, fullNameInp);
        therapist.render();
    }

});

