addEventListener("DOMContentLoaded", function(){
    isThereAnyHS()
})



const startBut = document.querySelector(".but");
const text = document.querySelector(".textIGuess");

startBut.addEventListener("click", function() {
    text.style.display = "none";
    StartGame();
});

function isThereAnyHS(){
    if(localStorage.getItem("High Score") != undefined){
        highScore();
    }
}

function StartGame() {
    const startBut = document.querySelector(".but");
    startBut.style.display = "none"
    count = 0; 
    circleAppearing(); 
    CircleDissapear();
    timer();
    
}


function randomColor() {
    return `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`; /* Color check not to be same as background */
}


function randomPositionTop() {
    return `${Math.floor(Math.random() * 90)}%`;
}

function circleAppearing() {
    const circle = document.querySelector(".circle");
    
    circle.style.display = "block";
    circle.style.top = randomPositionTop();
    circle.style.left = randomPositionTop();
}


let count = 0;

function CircleDissapear() {
    const circle = document.querySelector(".circle");
    const countWrite = document.querySelector(".count");
    countWrite.innerHTML = count;


    circle.addEventListener("click", function() {
        if (circle.style.display === "none") return;

        circle.style.display = "none";
        count += 1;
        countWrite.innerHTML = count;
        circleAppearing();
    });
}


function end() {
    alert("Score: " + count);
    if (count > localStorage.getItem("High Score")){
        localStorage.setItem("High Score", count);
    }

    
    const circle = document.querySelector(".circle");
    circle.style.display = "none";  

    
    const newCircle = circle.cloneNode(true); 
    circle.parentNode.replaceChild(newCircle, circle);  

    const startBut = document.querySelector(".but");
    startBut.style.display = "block"
}

function timer() {
    setTimeout(() => {
        end();  
        highScore();  
    }, 4000); 
}


function highScore() {
    const Hs = document.querySelector("#HS");
    const paste = document.querySelector(".paste");
    Hs.style.display = "block";
    Hs.innerHTML = "High Score: " + localStorage.getItem("High Score");
    paste.style.display = "block";
}




const pasteHs =  document.querySelector(".paste")
pasteHs.addEventListener("click", function(){
    navigator.clipboard.writeText("My high score is: " + localStorage.getItem("High Score"))
})