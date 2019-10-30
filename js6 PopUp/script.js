var popUp = document.getElementById('myPopUp');
var btn = document.getElementById('myBtn');
var span = document.getElementsByClassName('close')[0];

btn.onclick = function () {
    popUp.style.display = "block";
}
span.onclick = function () {
    popUp.style.display = "none";
}
window.onclick = function (event) {
    if(event.target == popUP) {
    popUp.style.display = "none";
    }
}
/*button.addEventListener('click', function(){
    popUp.classList.remove('hidden');
})

span.addEventListener('click', function(){
    popUp.classList.add('hidden');
})*/