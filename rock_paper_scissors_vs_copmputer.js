let choice="";
let result="";
let computer="";
const possibilities = ["Rock","Paper","Scissors"];

let score = JSON.parse(localStorage.getItem('score')) || { win: 0, lose: 0, tie: 0 };
document.querySelector('.wins').innerHTML=`Wins:${score.win}`;
document.querySelector('.losses').innerHTML=`Losses:${score.lose}`;
document.querySelector('.ties').innerHTML=`Ties:${score.tie}`;
if (!score) {
    score = { win: 0, lose: 0, tie: 0 };
    localStorage.setItem('score', JSON.stringify(score));
    document.querySelector('.wins').innerHTML=`Wins:${score.win}`;
    document.querySelector('.losses').innerHTML=`Losses:${score.lose}`;
    document.querySelector('.ties').innerHTML=`Ties:${score.tie}`;
}
document.body.addEventListener('keydown',(event)=> {
    if (event.key==='Backspace') {
        resetscore ();
    }
});
/*
let scoreBox = document.querySelector('.score');
let lightElement = document.querySelector('.golight');
let darkElement = document.querySelector('.godark');
let savedtheme=JSON.parse(localStorage.getItem('theme')) || 'golight';
if (savedtheme==='golight'){
    darkElement.classList.remove('godark');
    darkElement.classList.add('golight');
    scoreBox.style.backgroundColor = "#333";
    scoreBox.style.color = "white"; 
    darkElement.innerHTML="Light";
    document.body.style.backgroundColor = "#0e0f0f"; 
} else if (savedtheme==='godark') {
    lightElement.classList.remove('golight');
    lightElement.classList.add('godark');
    scoreBox.style.backgroundColor = "rgb(185, 185, 185)"; 
    scoreBox.style.color = "black"; 
    document.body.style.backgroundColor = "#fff";
    lightElement.innerHTML="Dark";
    
}*/
/*Remember this:
    document.title
    document.body
    Use textareaelement.value to extract it's value
    element.classList.contains('classname')
*/ 
function playgame (killer,helper) {
    if (computer===choice){
        result="Tie";
        score.tie++;
        document.querySelector('.tellc').innerHTML =`<p class="computermove">Computer: </p>
            <img src="${choice}-emoji.png" class="emoji">`;
        document.querySelector('.tellp').
        innerHTML =`<p class="playermove">Player: </p>
            <img src="${choice}-emoji.png" class="emoji">`;
        document.querySelector('.wins').innerHTML=`Wins:${score.win}`;
        document.querySelector('.losses').innerHTML=`Losses:${score.lose}`;
        document.querySelector('.ties').innerHTML=`Ties:${score.tie}`;
    } else if (computer===killer) {
        result="Lose";
        score.lose++;
        document.querySelector('.tellc').innerHTML =`<p class="computermove">Computer: </p>
            <img src="${killer}-emoji.png" class="emoji">`;
        document.querySelector('.tellp').
        innerHTML =`<p class="playermove">Player: </p>
            <img src="${choice}-emoji.png" class="emoji">`;
        document.querySelector('.wins').innerHTML=`Wins:${score.win}`;
        document.querySelector('.losses').innerHTML=`Losses:${score.lose}`;
        document.querySelector('.ties').innerHTML=`Ties:${score.tie}`;
    } else if (computer===helper) {
        score.win++;
        result="Win";
        document.querySelector('.tellc').innerHTML =`<p class="computermove">Computer: </p>
            <img src="${helper}-emoji.png" class="emoji">`;
        document.querySelector('.tellp').
        innerHTML =`<p class="playermove">Player: </p>
            <img src="${choice}-emoji.png" class="emoji">`;
        document.querySelector('.wins').innerHTML=`Wins:${score.win}`;
        document.querySelector('.losses').innerHTML=`Losses:${score.lose}`;
        document.querySelector('.ties').innerHTML=`Ties:${score.tie}`;
    }
    localStorage.setItem('score' , JSON.stringify(score));
}
function resetscore (){ 
    score.tie=0;
    score.win=0;
    score.lose=0;
    document.querySelector('.computermove').innerHTML =`Computer: `;
    document.querySelector('.playermove').innerHTML =`Player: `;
    document.querySelector('.wins').innerHTML=`Wins:${score.win}`;
    document.querySelector('.losses').innerHTML=`Losses:${score.lose}`;
    document.querySelector('.ties').innerHTML=`Ties:${score.tie}`;
    localStorage.setItem('score' , JSON.stringify(score))
}
function changetheme() {
    const darkElement = document.querySelector('.godark');
    const lightElement = document.querySelector('.golight');
    const scoreBox = document.querySelector('.score');
    if (darkElement) {
        darkElement.classList.remove('godark');
        darkElement.classList.add('golight');
        scoreBox.style.backgroundColor = "#333";
        scoreBox.style.color = "white"; 
        darkElement.innerHTML="Light";
        document.body.style.backgroundColor = "#0e0f0f"; 
    } else if (lightElement) {
        lightElement.classList.remove('golight');
        lightElement.classList.add('godark');
        scoreBox.style.backgroundColor = "rgb(185, 185, 185)"; 
        scoreBox.style.color = "black"; 
        document.body.style.backgroundColor = "#fff";
        lightElement.innerHTML="Dark";
        /*TODO: set theme to local storage*/
    }
}
document.querySelector('.godark').addEventListener('click',changetheme);
