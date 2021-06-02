import putInfoToDB from "./putInfoToDB.js";
import deleteInfoFromDB from "./deleteInfoFromDB.js";
import createModalVisit from "./creatvisit.js";
import getInfoFromDB from "./getInfoFromDB.js";
import itemsAbsentAtDB from "./itemsAbsentAtDB.js";

export default function cardsBtnsHandler(card, content) {
    const editBtn = card.getElementsByClassName("cards-btn edit")[0];
    const showMoreBtn = card.getElementsByClassName("cards-btn showMore")[0];
    const statusDoneBtn = card.getElementsByClassName("cards-btn done")[0];
    
    if (content.status == "Open") {
        statusDoneBtn.addEventListener("click", function () {
            statusDoneBtn.disabled = true;
            content.status = "Done";
            putInfoToDB(card.id, content)
                .then((data) => {
                })
                .catch((err) => {
                    console.log(err.message);
                });
        });
    }

    showMoreBtn.addEventListener("click", function () {
        const cardElems = Array.from(card.getElementsByClassName("cardelem"));
        for (let index = 1; index < cardElems.length; index++) {
            cardElems[index].classList.toggle("active");
        }
    });

    editBtn.addEventListener("click", function (e) {
        const addBtnsWrapper = card.getElementsByClassName("cards-btn--additional-wrapper")[0];
        addBtnsWrapper.classList.toggle("active");
        const editBtnEdit = card.getElementsByClassName("editBtnEdit")[0];
        const editBtnDelete = card.getElementsByClassName("editBtnDelete")[0];

        editBtnEdit.addEventListener("click", function (e) {
            e.stopPropagation();
            addBtnsWrapper.classList.toggle("active");
            const doctorForm = document.querySelector('#doctorForm');
            if (doctorForm != null) {
                doctorForm.remove();
            }
            createModalVisit(false, card.id, content);
        });

        editBtnDelete.addEventListener("click", function (e) {
            e.stopPropagation();
            addBtnsWrapper.classList.toggle("active");
            deleteInfoFromDB(card.id)
                .then((data) => {
                    getInfoFromDB()
                        .then((data) => {
                            if (data.length == 0) {
                                itemsAbsentAtDB();
                            }
                    });
                })
                .catch((err) => {
                    console.log(err.message);
                });
            card.remove();
        });
    });
}
