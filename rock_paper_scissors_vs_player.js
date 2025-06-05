let result="";
let player1="";
let player2="";
let c="";
let score = JSON.parse(localStorage.getItem('score')) || { win: 0, lose: 0, tie: 0 };
document.querySelector('.wins').innerHTML=`Player1: ${score.win}`;
document.querySelector('.losses').innerHTML=`Player2: ${score.lose}`;
document.querySelector('.ties').innerHTML=`Ties: ${score.tie}`;
//document.querySelector('.tellc').style.color="yellow";
document.querySelector('.rock').style.backgroundImage="url('start.png')";
document.querySelector('.rock').style.backgroundSize = 'cover';
document.querySelector('.paper').style.backgroundImage="url('start.png')";
document.querySelector('.paper').style.backgroundSize = 'cover';
document.querySelector('.scissors').style.backgroundImage="url('start.png')";
document.querySelector('.scissors').style.backgroundSize = 'cover';
if (!score) {
    score = { win: 0, lose: 0, tie: 0 };
    localStorage.setItem('score', JSON.stringify(score));
    document.querySelector('.wins').innerHTML=`Player1: ${score.win}`;
    document.querySelector('.losses').innerHTML=`Player2: ${score.lose}`;
    document.querySelector('.ties').innerHTML=`Ties: ${score.tie}`;
}
function gamelogic(killer,helper,move,other,other2) {
    if (player1) {
        player1=""
    }
    document.querySelector('.rock').style.backgroundImage="url('rock.png')";
    document.querySelector('.rock').style.backgroundSize = 'cover';
    document.querySelector('.paper').style.backgroundImage="url('paper.png')";
    document.querySelector('.paper').style.backgroundSize = 'cover';
    document.querySelector('.scissors').style.backgroundImage="url('scissors.png')";
    document.querySelector('.scissors').style.backgroundSize = 'cover';
    if (document.querySelector(`.${move}`).classList.contains(`${move}1`)) {
        player1=move;
        
        document.querySelector(`.${move}`).classList.add(`${move}2`);
        document.querySelector(`.${move}`).classList.remove(`${move}1`);
        document.querySelector(`.${other}`).classList.add(`${other}2`);
        document.querySelector(`.${other}`).classList.remove(`${other}1`);
        document.querySelector(`.${other2}`).classList.add(`${other2}2`);
        document.querySelector(`.${other2}`).classList.remove(`${other2}1`);
        document.querySelector('.tellc').style.color=c;
        document.querySelector('.tellp').style.color="yellow";
    } else if (document.querySelector(`.${move}`).classList.contains(`${move}2`)) {
        player2=move;
        
        document.querySelector(`.${move}`).classList.add(`${move}1`);
        document.querySelector(`.${move}`).classList.remove(`${move}2`);
        document.querySelector(`.${other}`).classList.add(`${other}1`);
        document.querySelector(`.${other}`).classList.remove(`${other}2`);
        document.querySelector(`.${other2}`).classList.add(`${other2}1`);
        document.querySelector(`.${other2}`).classList.remove(`${other2}2`);
        document.querySelector('.tellp').style.color=c;
        document.querySelector('.tellc').style.color="yellow";
    }
    if (player1&&player2 ) {
            if (player1===player2){
            result="Tie";
            score.tie++;
            document.querySelector('.tellc').innerHTML =`<p class="computermove">Player1: </p>
                <img src="${player1}-emoji.png" class="emoji">`;/**/
            document.querySelector('.tellp').
            innerHTML =`<p class="playermove">Player2: </p>
                <img src="${player2}-emoji.png" class="emoji">`;/**/
            document.querySelector('.wins').innerHTML=`Player1: ${score.win}`;
            document.querySelector('.losses').innerHTML=`Player2: ${score.lose}`;
            document.querySelector('.ties').innerHTML=`Ties: ${score.tie}`;
            
        } else if (player2===killer) {
            result="Lose";
            score.lose++;
            document.querySelector('.tellc').innerHTML =`<p class="computermove">Player1: </p>
                <img src="${player1}-emoji.png" class="emoji">`;/**/
            document.querySelector('.tellp').
            innerHTML =`<p class="playermove">Player2: </p>
                <img src="${player2}-emoji.png" class="emoji">`;/* */
            document.querySelector('.wins').innerHTML=`Player1: ${score.win}`;
            document.querySelector('.losses').innerHTML=`Player2: ${score.lose}`;
            document.querySelector('.ties').innerHTML=`Ties: ${score.tie}`;
            
        } else if (player2===helper) {
            score.win++;
            result="Win";
            document.querySelector('.tellc').innerHTML =`<p class="computermove">Player1: </p>
                <img src="${player1}-emoji.png" class="emoji">`;/**/
            document.querySelector('.tellp').
            innerHTML =`<p class="playermove">Player2: </p>
                <img src="${player2}-emoji.png" class="emoji">`;/**/
            document.querySelector('.wins').innerHTML=`Player1: ${score.win}`;
            document.querySelector('.losses').innerHTML=`Player2: ${score.lose}`;
            document.querySelector('.ties').innerHTML=`Ties: ${score.tie}`;
            
        }
        localStorage.setItem('score' , JSON.stringify(score));
    }
}

function resetscore (){ 
    score.tie=0;
    score.win=0;
    score.lose=0;
    player1="";
    player2="";
    document.querySelector('.tellc').innerHTML =`<p class="computermove">Player1: </p>`;
    document.querySelector('.tellp').
    innerHTML =`<p class="playermove">Player2: </p>`;
    document.querySelector('.wins').innerHTML=`Player1: ${score.win}`;
    document.querySelector('.losses').innerHTML=`Player2: ${score.lose}`;
    document.querySelector('.ties').innerHTML=`Ties: ${score.tie}`;
    localStorage.setItem('score' , JSON.stringify(score));
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
        c=scoreBox.style.color; 
    } else if (lightElement) {
        lightElement.classList.remove('golight');
        lightElement.classList.add('godark');
        scoreBox.style.backgroundColor = "rgb(185, 185, 185)"; 
        scoreBox.style.color = "black"; 
        document.body.style.backgroundColor = "#fff";
        lightElement.innerHTML="Dark";
        c=scoreBox.style.color ; 
    }
}
document.body.addEventListener('keydown',(event)=> {
    if (event.key==='Backspace') {
        resetscore ();
    }
});