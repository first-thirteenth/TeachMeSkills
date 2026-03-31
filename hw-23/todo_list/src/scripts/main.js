//Function for adding tags, classes, text, and id.
function createElement(tagName, className = "", text = "", id = "") {
	const element = document.createElement(tagName);
    if (className) {
		element.className = className;
	}
    if (text) {
		element.textContent = text;
	}
    if (id) {
		element.id = id;
	}
    
    return element;
}

//Get root element from DOM
const root = document.getElementById("root");

if (root) {
	const container = createElement("div", "container");
	root.appendChild(container);
}
