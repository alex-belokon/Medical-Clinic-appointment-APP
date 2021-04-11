import { loginBtn, createVisitBtn, root } from "./constants.js";
import LoginModal from "../classes/LoginModal.js";


export function createAutorizationWindow() {
	const loginForm = new LoginModal ({
		id: "modalLogin",
		classes: ["modal", "login"],
	});
	loginForm.createFormElements();
	loginForm.modal.style.width = "45vw";
	root.append(loginForm.modal);
	loginBtn.addEventListener("click", function() {
		loginForm.openModal();
		const submitBtn = document.getElementById('submit');
		submitBtn.addEventListener("click", signIn);
	});
}

let token, status;
function signIn(event) {
	event.preventDefault();
	const email = document.querySelector("#login");
	const password = document.querySelector("#password");
	const personalData = {
		"email": email.value,
		"password": password.value,
	};

	autorization(personalData)
	.then((data) => {
		token = data;
		const loginForm = document.getElementById('modalLogin');
		const span = document.getElementById('addinfo');
		let flag = true;
		if (status === 200) {
			localStorage.setItem("token", token);
			loginForm.remove();
			loginBtn.style.display = "none";
			createVisitBtn.style.display = "block";

			createSearchForm();
			createCardsForm();
			createModalVisit(true);
		} else {
			span.textContent = 'Incorrect username or password';
			span.style.color = "red";
			// span.style.marginBottom = "10px";
			flag = false;
		}
		if (!flag) {
			email.addEventListener("click", () => {
				span.textContent = '';
				flag = true;
			});
			password.addEventListener("click", () => {
				span.textContent = '';
				flag = true;
			});
		}
	})
	.catch((err) => {
		console.log(err.message);
	});
}

function autorization(personalData) {
	return fetch('https://ajax.test-danit.com/api/cards/login', {
		method: "POST",
		body: JSON.stringify(personalData),
		headers: {
			'Content-Type': 'application/json;charset=utf-8'
		},
	})
	.then((response) => {
		status = response.status;
		console.log("autorization", response);
		return response.text();
		})
	.catch((err) => {
		console.log("Autorization request message: ", err.message);
	});
}
