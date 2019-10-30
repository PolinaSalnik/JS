var myPopUp = document.getElementById('myPopUp');
var btn = document.getElementById('myBtn');
var span = document.getElementsByClassName('close')[0];

btn.onclick = function () {
    myPopUp.style.display = "block";
}
span.onclick = function () {
    myPopUp.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == myPopUp ) {
        myPopUp.style.display = "none";
    }
}

