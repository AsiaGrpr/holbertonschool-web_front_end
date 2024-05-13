function createElement(data) {
	const paragraphe = document.createElement("p");
	paragraphe.textContent = data;
	document.body.appendChild(paragraphe);
}

function queryWikipedia(callback) {
	const xhr = new XMLHttpRequest();
	const url =
		"https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*";
	xhr.onreadystatechange = function () {
		if (xhr.readyState == 4 && xhr.status == 200) {
			const response = JSON.parse(xhr.responseText);
			const pageId = Object.keys(response.query.pages)[0];
			const text = response.query.pages[pageId].extract;
			callback(text);
		}
	};
	xhr.open("GET", url, true);
	xhr.send();
}

queryWikipedia(createElement);
