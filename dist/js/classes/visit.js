let buttonCreate = document.getElementById('createVisit');
let visitInput = document.getElementById('doctor-selector');
let dateInput = document.getElementById('visitDate');
let lastDate = document.getElementById('lastDate');
let fullNameInput = document.getElementById('fullName');
let input = document.getElementById("formElem");
let div = document.getElementById('result');
let title = document.getElementById('title');

let pressure = document.getElementById('pulse');
let bodyMassIndex = document.getElementById('pulse');
let pastDiseases = document.getElementById('cardio-deceases');
let age = document.getElementById('age');

let text = "";

const data = {
    email: 'marvelichkovkiy@gmail.com',
    password: "1234567890",
};


class Visit {
    constructor(visitName, visitDate, fullName) {
        this.visitName = visitName.selectedOptions[0].value;
        this.fullName = fullName.value;
        this.visitDate = visitDate.value;
        this.token = this.getData();
        this.sendData = this.postData();
        this.card = this.createCard();
    }

    getData(url = '', data = {}) { //Динамический шаблон, который получает два параметра url и объект
        return fetch(url, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, cors, *same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json',
            },
            redirect: 'follow', // manual, *follow, error
            referrer: 'no-referrer', // no-referrer, *client
            body: JSON.stringify(data), // тип данных в body должен соответвовать значению заголовка "Content-Type"
        })
            .then(response => response.json());
        // парсит JSON ответ в Javascript объект
        // Значения по умолчанию обозначены знаком *
    }

    postData(url = '', card = {}) {

        // Значения по умолчанию обозначены знаком *
        return fetch(url, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, cors, *same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: 'follow', // manual, *follow, error
            referrer: 'no-referrer', // no-referrer, *client
            body: JSON.stringify(card), // тип данных в body должен соответвовать значению заголовка "Content-Type"
        })
            .then(response => response.json()); // парсит JSON ответ в Javascript объект
    }

    deleteData(url = '', card = {}) {
        // Значения по умолчанию обозначены знаком *
        return fetch(url, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, cors, *same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
                'Content-Type': 'application/json',
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: 'follow', // manual, *follow, error
            referrer: 'no-referrer', // no-referrer, *client
            body: `${localStorage.getItem('token')}`, // тип данных в body должен соответвовать значению заголовка "Content-Type"
        })
            .then(response => response); // парсит JSON ответ в Javascript объект
    }


    createCard() {
        let card = {
            Доктор: document.querySelector("[name=doctor]").value,
            Цель: document.querySelector("[name=title]").value,
            Описание: document.querySelector("[name=description]").value,
            Статус: "open",
            Приоритет: "Приоритет",
        };
        return Object.entries(card);
    }


    render() {
        this.getData('http://cards.danit.com.ua/login', data) //Возвращает токен
            .then(data => localStorage.setItem('token', data.token)) // JSON-строка полученная после вызова `response.json()`
            .catch(error => console.error(error));

        this.postData('http://cards.danit.com.ua/cards', this.createCard()) //Отправляет карточку на сервер в качестве объекта используется метод createCard который создает именно объект нужнонго доктора
            .then(card => localStorage.setItem('id', card.id)) // В ответ от сервера получаем id который сохраняем в local storage
            .catch(error => console.error(error));

        let obj = this.createCard();

        console.log(obj);

        let buttonDelete = document.getElementById('deleteCard');
        let ul = document.getElementById('result');
        ul.innerHTML = '';

        for (let i = 0; i < obj.length; i++) {
            let li = document.createElement('li');
            li.innerHTML = obj[i];
            ul.append(li);
            ul.append(buttonDelete);
        }

        $('.note:first').clone().appendTo('.content').show().draggable({containment: '.content'}); //drag&drop
        $("#empty").hide();
    }
}

class VisitCardio extends Visit {
    constructor(visitName, visitDate, fullName, title, pressure, bodyMassIndex, pastDiseases, age) {
        super(visitName, visitDate, fullName); // super
        this.titile = title.value;
        this.pressure = pressure.value;
        this.bodyMassIndex = bodyMassIndex.value;
        this.pastDiseases = pastDiseases.value;
        this.age = age.value;
    }

    getData(url = '', data = {}) {
        return super.getData(url, data);
    }

    postData(url = '', card = {}) {
        return super.postData(url, card);
    }

    deleteData(url = '', card = {}) {
        return super.deleteData(url, card);
    }

    render() {
        super.render();
    }

}

class VisitDentist extends Visit {
    constructor(visitName, visitDate, fullName, title, lastDate) {
        super(visitName, visitDate, fullName);
        this.titile = title.value;
        this.lastDate = lastDate.value;
        this.visitName = visitName.selectedOptions[0].value;
        this.visitDate = visitDate.value;
    }

    getData(url = '', data = {}) {
        return super.getData(url, data);
    }

    postData(url = '', card = {}) {
        return super.postData(url, card);
    }

    deleteData(url = '', card = {}) {
        return super.deleteData(url, card);
    }

    render() {
        super.render();
    }

}

class VisitTherapist extends Visit {
    constructor(visitName, visitDate, fullName, title, age) {
        super(visitName, visitDate, fullName);
        this.title = title.value;
        this.age = age.value;
    }

    getData(url = '', data = {}) {
        return super.getData(url, data);
    }

    postData(url = '', card = {}) {
        return super.postData(url, card);
    }

    deleteData(url = '', card = {}) {
        return super.deleteData(url, card);
    }

    render() {
        super.render();
    }

}


buttonCreate.addEventListener('click', function () {
    if (doctor.selectedOptions[0].value === "cardiologist") {
        let cardiologist = new VisitCardio(visitInput, dateInput, fullNameInput, title, pressure, bodyMassIndex, pastDiseases, age);
        buttonCreate.addEventListener('click', cardiologist.render);
        cardiologist.render();
        console.log(cardiologist);

    } else if (doctor.selectedOptions[0].value === "dentist") {
        let dentist = new VisitDentist(visitInput, dateInput, fullNameInput, title, lastDate);
        buttonCreate.addEventListener('click', dentist.render);
        dentist.render();
        console.log(dentist);

    } else if (doctor.selectedOptions[0].value === "therapist") {
        let therapist = new VisitTherapist(visitInput, dateInput, fullNameInput, title, age);
        buttonCreate.addEventListener('click', therapist.render);
        therapist.render();
        console.log(therapist);
    }
});

$(".content").on("click", ".delete_card", function () {
    $(this).parent().remove();
});

let buttonDelete = document.getElementById('deleteCard');

buttonDelete.addEventListener('click', function () {
    if (doctor.selectedOptions[0].value === "cardiologist") {
        let cardiologist = new VisitCardio(visitInput, dateInput, fullNameInput, title, pressure, bodyMassIndex, pastDiseases, age);
        buttonDelete.addEventListener('click', cardiologist.deleteData);
        cardiologist.deleteData(`http://cards.danit.com.ua/cards/${localStorage.getItem('id')}`, data)
            .then(data => data.json()) // JSON-строка полученная после вызова `response.json()`
            .catch(error => console.error(error));

        cardiologist.deleteData();
        console.log(cardiologist);

    } else if (doctor.selectedOptions[0].value === "dentist") {
        let dentist = new VisitDentist(visitInput, dateInput, fullNameInput, title, lastDate);
        buttonDelete.addEventListener('click', dentist.deleteData);
        dentist.deleteData(`http://cards.danit.com.ua/cards/${localStorage.getItem('id')}`, data)
            .then(data => data.json()) // JSON-строка полученная после вызова `response.json()`
            .catch(error => console.error(error));
        dentist.deleteData();
        console.log(dentist);

    } else if (doctor.selectedOptions[0].value === "therapist") {
        let therapist = new VisitTherapist(visitInput, dateInput, fullNameInput, title, age);
        buttonDelete.addEventListener('click', therapist.deleteData);
        therapist.deleteData(`http://cards.danit.com.ua/cards/${localStorage.getItem('id')}`, data)
            .then(data => data.json()) // JSON-строка полученная после вызова `response.json()`
            .catch(error => console.error(error));
        therapist.deleteData();
        console.log(therapist);
    }
});
