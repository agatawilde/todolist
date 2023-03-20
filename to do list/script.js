var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.getElementsByTagName("li");

function inputLength () {
	return input.value.length;
}

//creates a new item on a list; clears the input window
function createListElement () {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value="";
	var deletebtn = document.createElement("button");
	deletebtn.appendChild(document.createTextNode("X"));
	li.appendChild(deletebtn);
	deletebtn.classList.add("deletebtn");
}


function deleteListElement (clicktarget) {
	if (clicktarget.target.className == "deletebtn") {
		clicktarget.target.parentNode.remove();
	}
}
//parentNode (lub parenElement) - reads parent of the wanted element; 
// here - parent is Li, so it removes a whole li element!

function addListAfterClick () {
	if (inputLength()  > 0) {
		createListElement();
	}
}

//event as a parameter - important! the parameter must be named like that so the function can work
function addListAfterKeyPress(event) {
	if (inputLength()  > 0 && event.which === 13) {
	createListElement ();
}
}

//name task - just a name of the parameter - can be anything, needed to use .target


function markDone (task) {
	if (task.target.tagName == "LI") {
		task.target.classList.toggle("done");
	}
	// li.classList.toggle("done");
}

//'redirects' click to ul element (there are many li elements)
function ulClick (element) {
	markDone(element);
	deleteListElement (element);
}


button.addEventListener("click", addListAfterClick);

ul.addEventListener("click", ulClick);

input.addEventListener("keypress", addListAfterKeyPress);





