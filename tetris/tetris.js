document.addEventListener('DOMContentLoaded', ()=>{
const grid = document.querySelector('.grid');
let mytime = 500;
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

function canIcolorIt(){ //törli azokat az elemeket, amiken nincsen rajta a class
  squares.forEach(element => {
    if (!element.classList.contains("anyád")){
      element.style.backgroundColor = "" //szín reset, de csak ha az a szín még nem ért le.
    }
})}
//a lefelé mozgás
function inovelo(){
  if (i < 20 && squares[parseInt(`${i}${horizont}`)].style.backgroundColor != "black"){
    squares[parseInt(`${i}${horizont}`)].style.backgroundColor = "black"
    canIcolorIt()
  }
  else{
    squares[parseInt(`${i-1}${horizont}`)].style.backgroundColor = "black"//ez az előző blokk beszínezése miatt kell, fluidabb így
    squares[parseInt(`${i-1}${horizont}`)].classList.add("anyád")//ez már nem törölhető canicolorit-tel
    i = 0 //sorok, oszlopok resetelése
    horizont = 4 
  }
  squares[parseInt(`${i}${horizont}`)].style.backgroundColor = "black"
  i++
  return i
}
//különböző gomblenyomások esetén viselkedés
function left() {
  if (squares[parseInt(`${i}${horizont-1}`)].style.backgroundColor != "black"){
    horizont -= 1

  canIcolorIt()
  squares[parseInt(`${i-1}${horizont}`)].style.backgroundColor = "black"
  }
}
function right() {
  if (squares[parseInt(`${i}${horizont+1}`)].style.backgroundColor != "black"){
    horizont += 1
  
  canIcolorIt()
  squares[parseInt(`${i-1}${horizont}`)].style.backgroundColor = "black"
  }
}
function down() {
  i = inovelo();
}
function space() {
  while((i < 20 && squares[parseInt(`${i}${horizont}`)].style.backgroundColor != "black")){
    i = inovelo()
  }
  i = inovelo()
}
document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowLeft') left();
  if (event.key === 'ArrowRight') right();
  if (event.key === 'ArrowDown') down();
  if (event.key === ' ') space();
});

setInterval(() => {
  i = inovelo();//folyamatos futás 
}, mytime);
})
