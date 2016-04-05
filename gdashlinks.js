var store = localStorage;

function storeLinks() {
    var myLinks = document.getElementsByTagName("li").value;
    store.links[] = myLinks;

}

function recallLinks(){
	if(store.links[] !== undefined){
        for (i = 0; i < links.length; i++){
		  document.getElementsByTagName("li")[i].innerHTML = '<a href=" + store.links[i] + " target="_blank">store.links[i]</a>';
	} else {
		document.getElementsByTagName("li")[0].innerHTML = "gDash Links";
	}
}

function createEventListeners() {
    var saveButton = document.getElementById("saveButton");
    if (saveButton.addEventListener) {
        saveButton.addEventListener("click", storeNotes, false);
    } else if (saveButton.attachEvent) {
        saveButton.attachEvent("onclick", storeNotes);
    }
}

if (window.addEventListener) {
    window.addEventListener("load", createEventListeners, false);
} else if (window.attachEvent) {
    window.attachEvent("onload", createEventListeners);
}

recallNotes();