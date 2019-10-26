function getParametr (alert){
        if(alert=(new RegExp('[?&]'+encodeURIComponent(alert)+'=([^&]*)')).exec(location.search))
           return decodeURIComponent(alert[1]);
    }
    
    checkUrl();
    function checkUrl() {
       var parametr = getParametr ('alert');
       Showpopup(parametr);
    }
    
    function Showpopup (type, string) {
        var div = document.querySelector('div');
        div.removeAttribute('class', 'hidden');
        div.setAttribute('class', type);
    
        if (type === 'alert') {
            div.innerHTML = string || 'Hi, visitor!';
        }
        else if(type === 'error'){
            div.innerHTML = string || 'Error!';
        }
        else if(type === 'msg'){
            div.innerHTML = string || 'Your message has been successfully sent!';
        }
        setTimeout(function(){
             div.setAttribute('class', 'hidden');
        }, 5000);
    }
    