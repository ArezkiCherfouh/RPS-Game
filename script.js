let addsound=new Audio('create.wav');
addsound.preload='auto';
function playaddsound() {
    addsound.currentTime=0;
    addsound.play();
}
function changetheme() {
    const darkElement = document.querySelector('.godark');
    const lightElement = document.querySelector('.golight');
    const scoreBox = document.body;
    if (darkElement) {
        darkElement.classList.remove('godark');
        darkElement.classList.add('golight');
        scoreBox.style.backgroundColor = "#333";
        scoreBox.style.color = "white"; 
        darkElement.innerHTML="Light";
    } else if (lightElement) {
        lightElement.classList.remove('golight');
        lightElement.classList.add('godark');
        scoreBox.style.backgroundColor = "#fff"; 
        scoreBox.style.color = "black"; 
        
        lightElement.innerHTML="Dark";
        /*TODO: set theme to local storage*/
    }
    playaddsound();
}
document.querySelector('.godark').addEventListener('click',changetheme);
