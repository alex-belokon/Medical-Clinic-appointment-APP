export default function deleteInfoFromDB(id) {
	let token = localStorage.getItem("token");
	return fetch(`https://ajax.test-danit.com/api/cards/${id}`, {
		method: "DELETE",
		headers: {
			'Authorization': `Bearer ${token}`,
			'Content-Type': 'application/json;charset=utf-8'
		},
	}).then((response) => {
		response.text();
	})
	.catch((err) => {
		console.log("message of Delete request: ", err.message);
	});
}