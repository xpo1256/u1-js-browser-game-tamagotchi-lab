/*-------------------------------- Constants --------------------------------*/
const state = {
    boredom: 0,
    hunger: 0,
    sleepiness: 0,
}
/*---------------------------- Variables (state) ----------------------------*/
let timer;
let gameOver;

/*------------------------ Cached Element References ------------------------*/
let boredomStatEl1 = document.querySelector("#boredom-stat");
let hungerStatEl1 = document.querySelector("#hunger-stat");
let sleepinessStatEl1 = document.querySelector("#sleepiness-stat");
let playbtnEl1 = document.querySelector("#play");
let feedbtnEl1 = document.querySelector("#feed");
let sleepbtnEl1 = document.querySelector("#sleep");
let gameMessageEl1 = document.querySelector("#message");
let resetBtnEl1 = document.querySelector("#restart");
/*-------------------------------- Functions --------------------------------*/
playbtnEl1.addEventListener('click',playBtnClick);
resetBtnEl1.addEventListener('click',init);

/*----------------------------- Event Listeners -----------------------------*/
function updateStates(){
    state.boredom += Math.floor(Math.random()*4);
    state.hunger += Math.floor(Math.random()*4);
    state.sleepiness += Math.floor(Math.random()*4);
}

function init (){
    resetBtnEl1.classList.add('hidden');
    gameMessageEl1.classList.add('hidden');
    gameOver = false;

    state.boredom =0;
    state.hunger =0;
    state.sleepiness=0;

    render();
    timer = setInterval(runGame, 2000 );
}
function runGame(){
    updateStates();
    checkGameOver();
    render();
}
function render (){
         boredomStatEl1.textContent = state.boredom;
         hungerStatEl1.textContent = state.hunger;
         sleepinessStatEl1.textContent = state.sleepiness;
    if(gameOver == true){
         clearInterval(timer);
        gameMessageEl1.classList.remove('hidden');
        resetBtnEl1.classList.remove('hidden');
    }
}
function checkGameOver(){
    if(state.boredom >= 10 || state.hunger >= 10 || state.sleepiness >= 10){
        gameOver=true;
    }
}
function playBtnClick(){
    state.boredom = 0;
    render();
}
init();
