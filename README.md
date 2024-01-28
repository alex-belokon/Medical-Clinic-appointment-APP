The application is in the form of a page for the medical center as a tool for the administrator to create cards describing the planned visits to the doctor.

The project was carried out by the student of the group FE-24 Belokon Alexander.

The page consists of 3 parts:

Header (cap) of the page: logo and button "Login". After successful authorization it changes to button "Create visit". Click on the "Create Visit" button and a modal window appears where you can create a new card.
Main part: a form for filtering visits and a list of established visits. At the first visit, as well as when deleting all cards on the board, write "No items have been added". Modal window Create a visit In the modal window there is a drop-down list (select) with the choice of doctor. Depending on the chosen doctor under this drop-down list there are fields that need to be filled up for a visit to this doctor. There should be three options in the drop-down list - Cardiologist, Dentist, Therapist. Next you need to click Create. When clicking on the button, an AJAX-request is sent to the appropriate router, and if the answer came information about the newly created card - a card is created in the Board of visits on the page and the modal window closes. The Close button closes the modal window without saving the information and creating a card. All input fields, regardless of the selected option, except for the additional comment field, are required for data entry. When successfully created, the card appears, it has: name, which were entered at the creation of the card. The doctor, to whom the person is registered for an appointment. The Show More button. Click on it expands the card, and the rest of the information that was introduced when you created the visit appears. Edit button - when you click on it, a drop-down list of what you can do with the card appears: Edit - instead of the card’s text content, a form appears where you can edit the fields you enter. Same as in the modal window when you create a card. Remove - the card is removed. When you click on Search, you search and filter cards according to the specified search criteria.
Footer.
To start a project assembly, you must enter the npm i command in the terminal, then run gulp, and specify the gulp command.

List of technologies used:

HTML, SCSS,
Javascript
ES6 syntax was used to create classes.
For AJAX queries - fetch.
The project is divided into modules using ES6 modules.
To build the Node.js project
Github
