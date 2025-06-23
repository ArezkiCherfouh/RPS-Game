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
document.querySelector('.godark').addEventListener('click',changetheme);
const socket = io('https://rps-backend-1pog.onrender.com');
// let currentRoom='';
// let currentUser='';
function joinRoom() {
    let currentRoom = document.querySelector('.roomid').value.trim();
    let currentUser = document.querySelector('.username').value.trim();
    if (!currentRoom || !currentUser) {
        alert('Please fill in both entries');
        return;
    } else {
        document.body.innerHTML+='<div class="loader" style="margin: auto auto 0; width: 50px; height: 50px; border: 5px solid #2ecc71; border-top: 5px solid transparent; border-radius: 50%; animation: spin 1s linear infinite;"></div>';

        socket.emit('joinRoom', { roomId:currentRoom, username:currentUser });
        socket.on('joined', (data) => {
            document.querySelector('.status').innerHTML=data.message;
            if (data.success) {
                document.body.innerHTML = `<style>.body {background-color: #333;color: rgb(255, 244, 230);display:flex;margin: 0;padding: 0;}@media (min-width:740px) {.playspace{display: grid;grid-template-rows: 55% 1fr;row-gap: 10px;background-color: rgb(173, 174, 175);border-radius: 10px;background-image: url(bg.png);background-size: 100px 100px;height: 97vh;}.buttons{display: flex;flex-direction: row;border-radius: 10px;padding: 50px;padding-left: 4%;padding-right: 4%;align-items: center;justify-content: space-between;}.rock {background-image: url(rock.png);  border-radius: 80px;height: 160px;width: 160px;cursor: pointer;transition: 0.15s;}.paper {background-image: url(paper.png);border-radius: 80px;height: 160px;width: 160px;cursor: pointer;transition: 0.15s;}.scissors {background-image: url(scissors.png);border-radius: 80px;height: 160px;width: 160px;cursor: pointer;transition: 0.15s;}.restart {background-image: url(restart.png);border-radius: 80px;background-size: 160px 160px;height: 160px;width: 160px;cursor: pointer;transition: 0.15s;}.rock:hover,.paper:hover,.scissors:hover,.restart:hover {opacity: 0.8;transform: scale(1.15);}.rock:active,.paper:active,.scissors:active,.restart:active {opacity: 0.9;transform: scale(0.85);}.score {background-color: rgb(185, 185, 185);display: grid;grid-template-rows: 50% 1fr;row-gap: 15px;padding-left: 10px;padding-right: 10px;}.vs {display: flex;flex-direction: row;padding-left: 5px;padding-right: 5px;}.computer,.player {display: grid;grid-template-columns: 25% 1fr;column-gap: 5px;align-items: center;width: 50%;}.computerpicture,.playerpicture {height: 90%;width: 90%;vertical-align: middle;border-radius: 50%;transition: 0.15s;}.computerpicture:hover,.playerpicture:hover {opacity: 0.8;box-shadow: 0 0 5px #fff;}.computermove,.playermove {font-family: Arial, Helvetica, sans-serif;font-weight: bold;font-size: 38px;}.results {display: flex;flex-direction: row;align-items: center;padding-left: 30px;padding-right: 30px;justify-content: space-between;}.wins,.losses,.ties {font-family: Arial, Helvetica, sans-serif;font-weight: bold;font-size: 38px;margin: 0;}.tellp,.tellc {display: flex;flex-direction: row;align-items: center;}.emoji {height: 100px;}  .godark {font-size: 35px;padding: 5px 10px;border-radius: 30px;background-color: #333;color: #fff;cursor: pointer;transition: 0.15s;}  .godark:hover {opacity: 0.8;transform: scale(1.1);}.godark:active {opacity: 0.9;transform: scale(0.9);}.golight {font-size: 35px;padding: 5px 10px;border-radius: 30px; background-color: #fff; color: black; cursor: pointer; transition: 0.15s; } .golight:hover { opacity: 0.8; transform: scale(1.1); } .golight:active { opacity: 0.9; transform: scale(0.9); } } @media (max-width:739px) { .playspace{ display: grid; grid-template-rows: 50% 1fr; row-gap: 10px; background-image: url(bg.png); border-radius: 10px; background-size: 70px 70px; height: 97vh; } .buttons{ display: flex; flex-direction: row; border-radius: 10px; padding: 50px; padding-left: 10px; padding-right: 10px; align-items: center; justify-content: space-between; } .rock { background-image: url(rock.png); border-radius: 50%; background-size: cover; aspect-ratio: 1 / 1; width: 20%; border: solid 1px; transition: 0.15s; } .paper { aspect-ratio: 1 / 1; background-image: url(paper.png); border-radius: 50%; background-size: cover; width: 20%; border: solid 1px; transition: 0.15s; } .scissors { aspect-ratio: 1 / 1; background-image: url(scissors.png); background-size: cover; border-radius: 50%; width: 20%; border: solid 1px; transition: 0.15s; } .restart { aspect-ratio: 1 / 1; background-image: url(restart.png); border-radius: 50%; background-size: cover; width: 20%; border: solid 1px; transition: 0.15s; } .rock:active,.paper:active,.scissors:active,.restart:active { opacity: 0.9; transform: scale(0.85); } .score { background-color: rgb(185, 185, 185); display: grid; grid-template-rows: 85% 1fr; row-gap: 5px; padding-left: 10px; padding-right: 10px; } .vs { display: flex; flex-direction: column; padding-left: 5px; padding-right: 5px; } .computer,.player { display: grid; grid-template-columns: 25% 1fr; column-gap: 5px; align-items: center; } .computerpicture,.playerpicture { height: 90%; width: 90%; vertical-align: middle; border-radius: 50%; transition: 0.15s; } .computerpicture:active,.playerpicture:active { opacity: 0.8; box-shadow: 0 0 5px #fff; } .computermove,.playermove { font-family: Arial, Helvetica, sans-serif; font-weight: bold; font-size: 28px; } .results { display: flex; flex-direction: row; align-items: center; padding-left: 5px; padding-right: 5px; justify-content: space-between; } .wins,.losses,.ties { font-family: Arial, Helvetica, sans-serif; font-weight: bold; font-size: 100%; margin: 0; } .tellp,.tellc { display: flex; flex-direction: row; align-items: center; } .emoji { height: 50px; } .godark { font-size: 130%; padding: 5px 10px; border-radius: 20px; background-color: #333; color: #fff; border-width: 1px; transition: 0.15s; } .godark:active { opacity: 0.9; transform: scale(0.9); } .golight { font-size: 130%; padding: 5px 10px; border-radius: 20px; background-color: #fff; color: black; border-width: 1px; transition: 0.15s; } .golight:active { opacity: 0.9; transform: scale(0.9); } } @media  (max-width:550px){ .playspace{ display: grid; grid-template-rows: 50% 1fr; row-gap: 10px; background-image: url(bg.png); border-radius: 10px; background-size: 70px 70px; height: 97vh; } .buttons{ display: flex; flex-direction: row; border-radius: 10px; padding: 50px; padding-left: 10px; padding-right: 10px; align-items: center; justify-content: space-between; } .rock { background-image: url(rock.png); border-radius: 50%; background-size: cover; aspect-ratio: 1 / 1; width: 20%; border: solid 1px; transition: 0.15s; } .paper { aspect-ratio: 1 / 1; background-image: url(paper.png); border-radius: 50%; background-size: cover; width: 20%; border: solid 1px; transition: 0.15s; } .scissors { aspect-ratio: 1 / 1; background-image: url(scissors.png); background-size: cover; border-radius: 50%; width: 20%; border: solid 1px; transition: 0.15s; } .restart { aspect-ratio: 1 / 1; background-image: url(restart.png); border-radius: 50%; background-size: cover; width: 20%; border: solid 1px; transition: 0.15s; } .rock:active,.paper:active,.scissors:active,.restart:active { opacity: 0.9; transform: scale(0.85); } .score { background-color: rgb(185, 185, 185); display: grid; grid-template-rows: 50%/*85%*/ 1fr; row-gap: 5px; padding-left: 10px; padding-right: 10px;}.vs {display: flex;flex-direction: column;padding-left: 5px;padding-right: 5px;}.computer,.player {display: grid;grid-template-columns: 25% 1fr;column-gap: 5px;align-items: center;}.computerpicture,.playerpicture {height: 90%;width: 90%;vertical-align: middle;border-radius: 50%;transition: 0.15s;}.computerpicture:active,.playerpicture:active {opacity: 0.8;box-shadow: 0 0 5px #fff;}.computermove,.playermove {font-family: Arial, Helvetica, sans-serif;font-weight: bold;font-size: 28px;}.results {display: flex;flex-direction: row;align-items: center;padding-left: 5px;padding-right: 5px;justify-content: space-between;}.wins,.losses,.ties {font-family: Arial, Helvetica, sans-serif;font-weight: bold;font-size: 100%;margin: 0;}.tellp,.tellc {display: flex;flex-direction: row;align-items: center;}.emoji {height: 50px;}  .godark {font-size: 130%;padding: 5px 10px;border-radius: 20px;background-color: #333;color: #fff;border-width: 1px;transition: 0.15s;}  .godark:active {opacity: 0.9;transform: scale(0.9);}.golight {font-size: 130%;padding: 5px 10px;border-radius: 20px;background-color: #fff;color: black;border-width: 1px;transition: 0.15s;}  .golight:active {opacity: 0.9;transform: scale(0.9);}}</style><div class="playspace"><div class="buttons"><button class="rock rock1" ></button><button class="paper paper1 b" ></button><button class="scissors scissors1" ></button><button class="restart" ></button></div><div class="score"><div class="vs"><div class="computer"><img src="you.png" class="computerpicture"><div class="tellc"><p class="computermove">${currentUser}: </p></div></div><div class="player"><img src="you2.png" class="playerpicture"><div class="tellp"><p class="playermove">Player2: </p></div></div></div><div class="results"><p class="wins">${currentUser}:</p><p class="losses">Player2:</p><p class="ties">Ties:</p><button class="godark" onclick="changetheme();">Dark</button></div></div></div>`;
                document.querySelector('.rock1').addEventListener('click', () => {
                    socket.emit('play', { move: 'rock', roomId: currentRoom, username: currentUser });
                });

                document.querySelector('.paper1').addEventListener('click', () => {
                    socket.emit('play', { move: 'paper', roomId: currentRoom, username: currentUser });
                });

                document.querySelector('.scissors1').addEventListener('click', () => {
                    socket.emit('play', { move: 'scissors', roomId: currentRoom, username: currentUser });
                });
                document.querySelector('.restart').addEventListener('click', () => {
                    socket.emit('resetScore');
                });

            }
            // } else {
            //     alert(data.message);
            // }
        });
        
        let p2;
        socket.on('opponent-joined', (data) => {
            document.querySelector('.playermove').innerHTML=`${data.message}:`;
            document.querySelector('.losses').innerHTML=`${data.message}:`;
            document.querySelector('.computermove').innerHTML=`${currentUser}:`;
            document.querySelector('.wins').innerHTML=`${currentUser}:`;
            p2=data.message;
        });
        socket.on('player2',(data)=> {
            p2=data.message
            document.querySelector('.playermove').innerHTML=`${data.message}:`;
            document.querySelector('.losses').innerHTML=`${data.message}:`;
            document.querySelector('.computermove').innerHTML=`${currentUser}:`;
            document.querySelector('.wins').innerHTML=`${currentUser}:`;
        });
        
        socket.on('scoreresult',(rs)=>{
            const scores = rs.message.scores;
            const move1 = rs.message.move1;
            const move2 = rs.message.move2;
            const users = Object.keys(scores);
            const opponent = users.find(u => u !== currentUser);
            const current = currentUser;
            if (!opponent || !scores[current] || !scores[opponent]) {
                console.error('Scoring error:', scores, current, opponent);
                return;
            }

            // Update emoji + names
            document.querySelector('.tellc').innerHTML = `
                <p class="computermove">${current}:</p>
                <img src="${move1}-emoji.png" class="emoji">`;
            document.querySelector('.tellp').innerHTML = `
                <p class="playermove">${opponent}:</p>
                <img src="${move2}-emoji.png" class="emoji">`;

            // Update score visually
            document.querySelector('.wins').innerHTML = `${current}: ${scores[current].win}`;
            document.querySelector('.losses').innerHTML = `${opponent}: ${scores[current].lose}`;
            document.querySelector('.ties').innerHTML = `Ties: ${scores[current].tie}`;
        });
        socket.on('scorereset', ({ scores }) => {
            const yourScore = scores[currentUser] || { win: 0, lose: 0, tie: 0 };
            const opponentScore = scores[p2] || { win: 0, lose: 0, tie: 0 };

            document.querySelector('.wins').innerHTML = `${currentUser}: ${yourScore.win}`;
            document.querySelector('.losses').innerHTML = `${p2}: ${yourScore.lose}`;
            document.querySelector('.ties').innerHTML = `Ties: ${yourScore.tie}`;
        });
        socket.on('message', (msg) => {
            alert(msg);
            window.location.reload();
        });
        
    }
    if (document.querySelector('.golight')) {
        document.querySelector('.golight').addEventListener('click',changetheme);
    } else {
        document.querySelector('.godark').addEventListener('click',changetheme);
    }
}
document.addEventListener("DOMContentLoaded", () => {
    document.querySelector('.join').addEventListener('click',joinRoom);
})
