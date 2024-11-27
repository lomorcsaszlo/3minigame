document.addEventListener('DOMContentLoaded', ()=>{
const grid = document.querySelector('.grid');

const ScoreDisplay = document.querySelector("#score")

const StartBtn = document.querySelector("#start-button")
  for (let i = 0; i < 200; i++) {
    const div = document.createElement('div');  // Create a diveket
    grid.appendChild(div);  
    div.style.border = "1px solid black"
    
}

let squares = document.querySelectorAll(".grid div")
let i = 0 //19 sor van, ez az sorok száma
var horizont = 4 //9 oszlop van 
let protectedsquares = [];

function canIcolorIt(){
  squares.forEach(element => {
  
    if (!element.classList.contains("anyád")){
    
      element.style.backgroundColor = "" //szín reset, de csak ha az a szín még nem ért le.
        
    }

})}


function inovelo(){
  if (i < 20){
    squares[parseInt(`${i}${horizont}`)].style.backgroundColor = "black"
    canIcolorIt()
  }
  else{
    squares[parseInt(`${i-1}${horizont}`)].style.backgroundColor = "black"

    squares[parseInt(`${i-1}${horizont}`)].classList.add("anyád")
    i = 0 //sorok, oszlopok resetelése
    horizont = 4 
  }
  squares[parseInt(`${i}${horizont}`)].style.backgroundColor = "black"
  i++
  return i
}

function left() {
  horizont -= 1
  canIcolorIt()
  squares[parseInt(`${i-1}${horizont}`)].style.backgroundColor = "black"
}
function right() {
  horizont += 1
  canIcolorIt()
  squares[parseInt(`${i-1}${horizont}`)].style.backgroundColor = "black"
}

document.addEventListener('keydown', function(event) {
  if (event.key === 'ArrowLeft') {
      left()
      //a balra meg lett nyomva
  }
});
document.addEventListener('keydown', function(event) {
  if (event.key === 'ArrowRight') {
      right()
      //a jobbra meg lett nyomva
  }
});


  setInterval(() => {
      i = inovelo();//folyamatos futás 
  }, 100);


})
