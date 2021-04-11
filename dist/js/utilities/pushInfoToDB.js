export default function pushInfoToDB(content) {
	let token = localStorage.getItem("token");
	return fetch('https://ajax.test-danit.com/api/cards', {
		method: "POST",
		body: JSON.stringify(content),
		headers: {
			'Authorization': `Bearer ${token}`,
			'Content-Type': 'application/json;charset=utf-8'
		},
	}).then((response) => response.text())
	.catch((err) => {
		console.log("message of Post request: ", err.message);
	});
}