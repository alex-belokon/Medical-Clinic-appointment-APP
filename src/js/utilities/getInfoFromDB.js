export default function getInfoFromDB() {
	let token = localStorage.getItem("token");
	return fetch('https://ajax.test-danit.com/api/cards', {
		headers: {
			'Authorization': `Bearer ${token}`,
		},
	})
	.then((data) => data.json())
	.catch((err) => {
		console.log("message of Get request: ", err.message);
	});
}