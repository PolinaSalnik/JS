var err = document.getElementById('notification_error')
console.log(err);

function showError() {
    var value = err.getAttribute('hidden');
    if (value != 'hidden') {
        err.setAttribute('hidden', 'hidden');
    } 
    else {
        err.setAttribute('hidden', 'notHidden');
    }
} 
setInterval (showError, 5000);



var mess = document.getElementById('notification_message')
console.log(mess);

function showMessage() {
    var value = mess.getAttribute('hidden');
    if (value != 'hidden') {
        mess.setAttribute('hidden', 'hidden');
    } 
    else {
        mess.setAttribute('hidden', 'notHidden');
    }
} 
setInterval (showMessage, 10000);




var hi = document.getElementById('notification_hello')
console.log(hi);

function showHi() {
    var value = hi.getAttribute('hidden');
    if (value != 'hidden') {
        hi.setAttribute('hidden', 'hidden');
    } 
    else {
        hi.setAttribute('hidden', 'notHidden');
    }
} 
setInterval (showHi, 15000);