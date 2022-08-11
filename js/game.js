
const wrongLetterBox = document.querySelector("#wrong-words-box")
const rightWordsBox = document.querySelector("#right-words-box")

const newGameButton = document.querySelector("#new-game")
const desistButton = document.querySelector("#desist")

const finalMsg = document.querySelector("#final-msg-box")
const secretWordBox = document.querySelector("#secret-word-box")

const canvas = document.querySelector("canvas");
const pencil = canvas.getContext("2d")

newGameButton.addEventListener("click", () => {animation(createBoardGame)});
desistButton.addEventListener("click", () => {animation(mainMenu)});

const line1 = document.querySelector("#line1");
const line2 = document.querySelector("#line2");
const line3 = document.querySelector("#line3");

const arr1 = ["Q","W","E","R","T","Y","U","I","O","P"];
const arr2 = ["A","S","D","F","G","H","J","K","L","Ñ"];
const arr3 = ["Z","X","C","V","B","N","M"];

function createKeywoard(){
    line1.innerHTML = ""
    line2.innerHTML = ""
    line3.innerHTML = ""
    for(let i = 0; i < arr1.length; i++){
        let div = document.createElement("div")
        div.classList.add("keyboard-letter")
        div.classList.add("flex-col-center")
        div.textContent = arr1[i]
        div.id = arr1[i]
        div.addEventListener("click", checkLetterFromKeyboard)
        line1.appendChild(div)
    }

    for(let i = 0; i < arr2.length; i++){
        let div = document.createElement("div")
        div.classList.add("keyboard-letter")
        div.classList.add("flex-col-center")
        div.textContent = arr2[i]
        div.id = arr2[i]
        div.addEventListener("click", checkLetterFromKeyboard)
        line2.appendChild(div)
    }

    for(let i = 0; i< arr3.length; i++){
        let div = document.createElement("div")
        div.classList.add("keyboard-letter")
        div.classList.add("flex-col-center")
        div.textContent = arr3[i]
        div.id = arr3[i]
        div.addEventListener("click", checkLetterFromKeyboard)
        line3.appendChild(div)
    }
}
function createBoardGame(){
    beginSection.style.display = "none";
    gameSection.style.display = "flex";
    newWordSection.style.display = "none";
}