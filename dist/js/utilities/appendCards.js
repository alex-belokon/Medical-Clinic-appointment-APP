import CreateCard from "../classes/CreateCard.js";
import cardsBtnsHandler from "./cardsBtnsHandler.js";
import getInfoFromDB from "./getInfoFromDB.js";

export default function appendCards() {
    const divCards = document.getElementById("divCardsId");
    getInfoFromDB()
        .then((data) => {
            data.forEach(({id, content}) => {            
                const card = new CreateCard ({
                    id: id,
                    content: content,
                }).render();

                if (content.status == "Done") {
                    const statusDoneBtn = card.getElementsByClassName("cards-btn done")[0];
                    statusDoneBtn.disabled = true;
                }
                divCards.append(card);
                cardsBtnsHandler(card, content);
            });
        });
}