//choose options depends of doctor
//1

let doctor = document.getElementById('doctor-selector');
let showFields = ["age", "pulse", "weight", "cardio-deceases"];
doctor.onclick = function () {
    if (doctor && doctor.selectedOptions[0].selected === true) {
        if (doctor.selectedOptions[0].value === "choose-doctor") {
            console.log("Do nothing");
        }
        if (doctor.selectedOptions[0].value === "cardiologist") {
            // console.log(doctor.selectedOptions[0].selected);
            document.getElementById("doctors").style.display = 'block';
            for (let index = 0; index < showFields.length; index++) {
                console.log(showFields[index]);
                let showField = document.getElementById(showFields[index]);
                showField.style.display = "block";
                document.getElementById("lastDate").style.display = 'none';
                // document.getElementById("age").style.display = 'block';
                console.log(showField);
            }
        } else if (doctor.selectedOptions[0].value === "dentist") {
            document.getElementById("doctors").style.display = 'block';
            document.getElementById("lastDate").style.display = 'block';
            document.getElementById("age").style.display = 'none';
            document.getElementById("pulse").style.display = 'none';
            document.getElementById("weight").style.display = 'none';
            document.getElementById("cardio-deceases").style.display = 'none';

        } else if (doctor.selectedOptions[0].value === "therapist") {
            document.getElementById("doctors").style.display = 'block';
            document.getElementById("lastDate").style.display = 'none';
            document.getElementById("age").style.display = 'block';

        }


    }
};

//Modal window body
let modal = document.getElementById("myModal");
// Get the button that opens the modal
let button = document.getElementById("createVisit");
// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];
let createCard = document.getElementById("createCard");
//при создании карточки после нажатия на createCard скрыть модальное окно
createCard.onclick = function () {
    modal.style.display = "none";
};
//при нажатии на кнопку Create назначить модальному окну блок
button.onclick = function () {
    modal.style.display = "block";
};
//при нажатии на крестик в модальном окне скрыть его
span.onclick = function () {
    modal.style.display = "none";
};
window.onclick = function (event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
};
// select tabs content
$('doctor-selector').change(function () {
    let selected = $(this).find('selected');

    $('.doctor-selector').hide();
    $('.' + selected.value()).show();
    $('.optionvalue').html(selected.html());
});

//create card after click on button


