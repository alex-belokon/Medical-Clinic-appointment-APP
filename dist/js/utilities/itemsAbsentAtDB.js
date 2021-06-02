export default function itemsAbsentAtDB() {
    const divCards = document.querySelector("#divCardsId");
    const noItems = document.createElement('p');
    noItems.id = "noitems";
    noItems.style.cssText = `font-size: 28px; font-weight: bold; text-align: center; 
                                color: blue; padding: 10px 0`;
    noItems.textContent = "No items have been added";
    divCards.append(noItems);
}