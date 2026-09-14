window.addEventListener('scroll', () => {
    let content = document.querySelector('.slideIn');
    let contentPosition = content.getBoundingClientRect().top;
    let screenPosition = window.innerHeight;
    if(contentPosition < screenPosition){
        content.classList.add('active');
    }else{
        content.classList.remove('active');
    }
});

window.addEventListener('scroll', () => {
    let content = document.querySelector('.slideInn');
    let contentPosition = content.getBoundingClientRect().top;
    let screenPosition = window.innerHeight;
    if(contentPosition < screenPosition){
        content.classList.add('active');
    }else{
        content.classList.remove('active');
    }
});

window.addEventListener('scroll', () => {
    let content = document.querySelector('.slideInnn');
    let contentPosition = content.getBoundingClientRect().top;
    let screenPosition = window.innerHeight;
    if(contentPosition < screenPosition){
        content.classList.add('active');
    }else{
        content.classList.remove('active');
    }
});

window.addEventListener('scroll', () => {
    let content = document.querySelector('.slideInnnn');
    let contentPosition = content.getBoundingClientRect().top;
    let screenPosition = window.innerHeight;
    if(contentPosition < screenPosition){
        content.classList.add('active');
    }else{
        content.classList.remove('active');
    }
});

window.addEventListener('scroll', () => {
    let content = document.querySelector('.slideInnnnn');
    let contentPosition = content.getBoundingClientRect().top;
    let screenPosition = window.innerHeight;
    if(contentPosition < screenPosition){
        content.classList.add('active');
    }else{
        content.classList.remove('active');
    }
});

function next(){
    alert("could not send message please try sending direct email to info@greyshrew.co.za or call 0681563657 or whatsapp 0845420054");
}

/*window.onload = function(){
    var stop = setInterval(gogogo, 1);
    var place = -500;
    var roll = document.getElementById("slideIn");
    
    function gogogo(){
        if(place >= 10){
            clearInterval(stop);
        }
        else{
            place+= 1;
            roll.style.left = place+"px";
        }
    }
}
    


window.onmouseover = function(){
    var stop = setInterval(gogogo, 1);
    var place = -500;
    var roll = document.getElementById("slideInn");
    
    function gogogo(){
        if(place >= 10){
            clearInterval(stop);
        }
        else{
            place+= 1;
            roll.style.right = place+"px";
        }
    }  
}

*/