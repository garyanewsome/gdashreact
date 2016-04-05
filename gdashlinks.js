var store = localStorage;

function storeLinks() {
    var myLinks = document.getElementsByTagName("link").value;
    store.links[] = myLinks;

}

function recallLinks(){
	if(store.links[] !== undefined){
        for (i = 0; i < links.length; i++){
		  document.getElementsByTagName("link")[i].innerHTML = '<a href="+store.links[i]+" target="_blank">store.links[i]</a>';
	} else {
		document.getElementsByTagName("link")[0].innerHTML = "gDash Links";
	}
}

function createEventListeners() {
    var saveButton = document.getElementById("saveButton");
    if (saveButton.addEventListener) {
        saveButton.addEventListener("click", storeLinks, false);
    } else if (saveButton.attachEvent) {
        saveButton.attachEvent("onclick", storeLinks);
    }
}

if (window.addEventListener) {
    window.addEventListener("load", createEventListeners, false);
} else if (window.attachEvent) {
    window.attachEvent("onload", createEventListeners);
}

recallNotes();