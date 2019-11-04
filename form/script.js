var form = document.querySelector('.contactForm');
var requireInputs = document.querySelectorAll('.require');


form.addEventListener('submit', function(event) {  
    event.preventDefault();
    removeAlerts(); 
   
    if (checkInputs() && checkEmails() ) {
        debugger
    }

})

function checkInputs() {
 var emptyInputs = 0; 
   for (var i = 0; i < requireInputs.length; i++) {
       if(!requireInputs[i].value) {
        emptyInputs++;
        var errorMsg = document.createElement('span');
        errorMsg.classList.add('help-block');
        errorMsg.innerHTML = 'Введите текст'; 
        requireInputs[i].classList.add('errorMsg');
        requireInputs[i].parentElement.insertBefore(errorMsg, null);
       } 
          }
          if (emptyInputs === 0) {
          return true; 
        } else {
            return false;
        }
}

function  checkEmails() {
    var email = document.querySelector('#email');
    var confirmEmail = document.querySelector('#confirmEmail');
    if(email.value === confirmEmail.value) {
        return true;
    } else if (email.value && confirmEmail.value) {
        var errorMsg = document.createElement('span');
        errorMsg.classList.add('help-block');
        errorMsg.innerHTML = 'Email не совпадает';
        email.classList.add('errorMsg');
        confirmEmail.classList.add('errorMsg');
        email.parentElement.insertBefore(errorMsg,null);
        return false;
    }
}

function removeAlerts() {
    var alerts = document.querySelectorAll('.help-block');
for(var i = 0; i < alerts.length; i++) {
    alerts[i].remove();
}
for(var i = 0; i < requireInputs.length; i++) {
    requireInputs[i].classList.remove('errorMsg');
}
}