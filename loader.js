var myVar;

function myFunction() {
myVar = setTimeout(showPage, 3500);
}

function showPage() {
document.getElementById("preload").style.display = "none";
document.getElementById("postload").style.display = "block";
}
