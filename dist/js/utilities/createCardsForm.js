import { root } from "./constants.js";
import getInfoFromDB from "./getInfoFromDB.js";
import itemsAbsentAtDB from "./itemsAbsentAtDB.js";
import appendCards from "./appendCards.js";

export default function createCardsForm() {
    const divCards = document.createElement("div");
    divCards.id = "divCardsId";
    divCards.style.cssText = `display: grid; grid-template-columns: 300px repeat(auto-fit, 300px); grid-gap: 20px 25px; 
                              margin: 20px 150px; padding: 50px 30px; background-color: rgba(103, 128, 159, 0.7); 
                              border-radius: 15px; justify-content: center`;

    root.append(divCards);
    getInfoFromDB()
    .then((data) => {
        if (data.length == 0) {
            itemsAbsentAtDB();
        } else {
            appendCards();
        }
    })
    .catch((err) => {
        console.log(err.message);
    });

}