document.addEventListener('DOMContentLoaded', ()=>{
const grid = document.querySelector('.grid');
const mytime = 380;
for (let i = 0; i < 200; i++) {
    const div = document.createElement('div');  // Create a diveket
    grid.appendChild(div);  
    div.style.border = "1px solid black";
}
let squares = document.querySelectorAll(".grid div");
let i = 0; //19 sor van, ez az sorok száma
let horizont = 4; //9 oszlop van 
const ScoreDisplay = document.querySelector("#score");
const StartBtn = document.querySelector("#start-button");

function deleterow() {
  for (let sor1 = 19; sor1 >= 0; sor1--) { // Az alsó sortól felfelé csekkol
    let isFullRow = true;
    // megnézi megvan e az egész sor
    for (let oszlop = 0; oszlop < 10; oszlop++) {
      if (squares[sor1 * 10 + oszlop].style.backgroundColor !== "black") {
        isFullRow = false;
        break;
      }
    }
    // Ha egy sor kigyűlik akkor eltávolítja
    if (isFullRow) {
      for (let r = sor1; r > 0; r--) {
        for (let c = 0; c < 10; c++) {
          squares[r * 10 + c].style.backgroundColor = squares[(r - 1) * 10 + c].style.backgroundColor;
          squares[r * 10 + c].className = squares[(r - 1) * 10 + c].className;
        }
      }
      //folytatja a következő sorral
      sor1++;
    }
  }
}
function canIcolorIt(){ //törli azokat az elemeket, amiken nincsen rajta a class
  squares.forEach(element => {
    if (!element.classList.contains("anyád")){
      element.style.backgroundColor = ""; //szín reset, de csak ha az a szín még nem ért le.
    }
})};
let myhorizont = 4;
let myi = 0;
function slectedarea(){ //az adott elem alatt kijelöli a helyet, ahová esni fog.
    if (myi < 20 && squares[parseInt(`${myi}${myhorizont}`)].style.backgroundColor != "black"){
      for (let index = myi; index <20 ; index++) {
        if (squares[parseInt(`${index}${myhorizont}`)].style.backgroundColor != "black"){// csak akor lesz fehér az alatta lévő elemek színe, ha az nem fekete 
          squares[parseInt(`${index}${myhorizont}`)].style.backgroundColor = "floralwhite";
        }       
      }
      myi = i; //sorok, oszlopok resetelése
      myhorizont = horizont;
    }
    squares[parseInt(`${i}${myhorizont}`)].style.backgroundColor = "floralwhite";
    myi++;
};
function resetposition(){ //visszaállítja az eredeti állapotokat miután leér az elem
  i = 0; //sorok, oszlopok resetelése
  horizont = 4 ;
  myi = 0 ;//sorok, oszlopok resetelése
  myhorizont = 4;
};
//a lefelé mozgás
function inovelo(i,horizont){
  let tempi = 0;
  if (i < 20 && squares[parseInt(`${i}${horizont}`)].style.backgroundColor != "black"){
    squares[parseInt(`${i}${horizont}`)].style.backgroundColor = "black";
    canIcolorIt();
    slectedarea();
    tempi = i;
    tempi++;
  }
  else{
    squares[parseInt(`${i-1}${horizont}`)].style.backgroundColor = "black";//ez az előző blokk beszínezése miatt kell, fluidabb így
    squares[parseInt(`${i-1}${horizont}`)].classList.add("anyád");//ez már nem törölhető canicolorit-tel
    resetposition()
  }
  squares[parseInt(`${i}${horizont}`)].style.backgroundColor = "black";
  return tempi;
};
//különböző gomblenyomások esetén viselkedés
function left() {
  if (squares[parseInt(`${i}${horizont-1}`)].style.backgroundColor != "black" && horizont != 0){ //1x ne legyen védett mező, illetve ne is legyen a szélén hogy oldalra menjen.
    horizont -= 1;
    slectedarea();
  canIcolorIt();
  squares[parseInt(`${i-1}${horizont}`)].style.backgroundColor = "black";
  }
};
function right() {
  if (squares[parseInt(`${i}${horizont+1}`)].style.backgroundColor != "black" && horizont!=9){ //ugyan az, csak a másik oldal.
    horizont += 1;
    slectedarea();
  canIcolorIt();
  squares[parseInt(`${i-1}${horizont}`)].style.backgroundColor = "black";
  }
};
function space() {
  while((i < 20 && squares[parseInt(`${i}${horizont}`)].style.backgroundColor != "black")){
    i = inovelo(i, horizont)
  }
  i = inovelo(i, horizont);
  resetposition();
};
let clicked = false;

StartBtn.addEventListener("click", function(event){ //a start megnyomására indul minden-
  clicked = true;
  if (!StartBtn.classList.contains("hidden")){
    StartBtn.classList.add("hidden"); //szín reset, de csak ha az a szín még nem ért le.
  }
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowLeft') left();
  if (event.key === 'ArrowRight') right();
  if (event.key === ' ') space();
});
grid.addEventListener('click', () => {
  space(); // Mouse click
});

setInterval(() => {
  if (clicked == true){
  deleterow();
  i = inovelo(i, horizont);//folyamatos futás 
  
}
}, mytime);
})