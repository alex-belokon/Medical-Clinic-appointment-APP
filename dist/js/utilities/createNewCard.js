import CreateCard from "../classes/CreateCard.js";
import cardsBtnsHandler from "./cardsBtnsHandler.js";

export default function createNewCard(returnedid, contentin) {
    const doctorForm = document.querySelector('#doctorForm');
    if (doctorForm != null) {
        doctorForm.remove();
    }
    const card = new CreateCard ({
		id: returnedid,
        status: "Open",
        content: contentin,
	}).render();

    const divCards = document.querySelector("#divCardsId");
    divCards.append(card);
    cardsBtnsHandler(card, contentin);
}