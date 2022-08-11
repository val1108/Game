const main = document.querySelector("main");

const beginSection = document.querySelector("#buttons-begin");
const newWordSection = document.querySelector("#new-word-section");
const gameSection = document.querySelector("#game-section");

const screen = document.querySelector("#screen")

function first() {
    mainMenu()
    setTimeout(() => {
        screen.classList.remove("screen-one")
    }, 1000);
}

function mainMenu(){
    // visualizaciones
    main.classList.add("flex-col-center")
    main.classList.remove("flex-col-start")

    beginSection.style.display = "flex";
    gameSection.style.display = "none";
    newWordSection.style.display = "none";


    // Botones del menú principal
    const buttonPlayGame = document.querySelector("#play-game");
    const buttonAddWord = document.querySelector("#add-new-word");

    buttonPlayGame.addEventListener("click", () => {animation(createBoardGame)});
    buttonAddWord.addEventListener("click", () => {animation(addNewWord)});
}

function animation(varFunction){
    screen.classList.add("screen-in")
    setTimeout(() => {
        varFunction()
    }, 500);    
    setTimeout(() => {
        screen.classList.remove("screen-in")
    }, 1000);
}

window.addEventListener("load", first)