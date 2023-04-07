const wordEl=document.getElementById('word');
const textEl=document.getElementById('text');
const scoreEl=document.getElementById('score');
const timeEl=document.getElementById('time');

const btnLevelEl=document.getElementById('level-btn');
const settingsEl=document.getElementById('settings');
const levelFormEl=document.getElementById('level-form');
const levelEl=document.getElementById('level');
const gameoverEl=document.getElementById('gameover-container');

const words =["เศรษฐี","แมว","หมู","ยาสีฟัน","แว่นตา","กระเป๋า"];

let randomText;
let score=0;
let time=10;

let level='medium';
const timeInterval=setInterval(updateTime,1000);

function getRandomWord(){
    return words[Math.floor(Math.random()*words.length)]
}

function displayWordToUI(){
    randomText=getRandomWord();
    wordEl.innerHTML = randomText;
    timeEl.innerHTML=time;
}
textEl.addEventListener('input',(e)=>{
    const inputText=e.target.value;

    if(inputText === randomText){
        displayWordToUI();
        time+=2;
        updateScore()
        e.target.value='';
    }
});

function updateScore(){
    score+=10
    scoreEl.innerHTML=score;
}

function updateTime(){
    time--;
    timeEl.innerHTML=time;
    if(time===0){
        clearInterval(timeInterval);
        gameOver();
    }
}
function gameOver(){
    gameoverEl.innerHTML=`
    <h1>Gameover</h1>
    <p>คะแนนของคุณ = ${score} แต้ม</p>
    <button onclick="location.reload()">เล่นอีกครั้ง</button>
    `;
    gameoverEl.style.display='flex';
}
displayWordToUI();
textEl.focus();