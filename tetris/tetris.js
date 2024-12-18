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
const maxScore = document.querySelector("#max_score")
const StartBtn = document.querySelector("#start-button");
let scorecount = 25;
let rowclearpoints = 125;

function makescorebigger(numbertomakebigger){
  ScoreDisplay.innerHTML = `${(parseInt(ScoreDisplay.innerHTML,10)+numbertomakebigger).toString()}`
  
}

function pointreset(){
  maxScore.innerHTML = `${(parseInt(ScoreDisplay.innerHTML,10)).toString()}`
  ScoreDisplay.innerHTML = "0";
}
//////////////////////////////////////////////////
//shapes

function generateNewShape() {
  // Példa: véletlenszerű alakzat választása
  const randomShape = Math.floor(Math.random() * 7);
  switch (randomShape) {
      case 0:
          createZShape(i, horizont);
          return createZShape
          break;
      case 1:
          createTShape(i, horizont);
          return createTShape
          break;
      case 2:
          createSShape(i, horizont);
          return createSShape
          break;
      case 3:
          createJShape(i, horizont);
          return createJShape
          break;
      case 4:
          createLShape(i, horizont);
          return createLShape
          break;
      case 5:
          createIShape(i, horizont);
          return createIShape
          break;
      case 6:
          createOShape(i, horizont);
          return createOShape
          break;
    
  }
}function createIShape(i, horizont) {
  for (let row = 0; row < 4; row++) {
      squares[parseInt(`${i + row}${horizont}`)].style.backgroundColor = "black";
  }
}

function createOShape(i, horizont) {
  squares[parseInt(`${i}${horizont}`)].style.backgroundColor = "black";
  squares[parseInt(`${i}${horizont + 1}`)].style.backgroundColor = "black";
  squares[parseInt(`${i + 1}${horizont}`)].style.backgroundColor = "black";
  squares[parseInt(`${i + 1}${horizont + 1}`)].style.backgroundColor = "black";
}

function createTShape(i, horizont) {
  squares[parseInt(`${i}${horizont}`)].style.backgroundColor = "black";
  squares[parseInt(`${i}${horizont + 1}`)].style.backgroundColor = "black";
  squares[parseInt(`${i}${horizont + 2}`)].style.backgroundColor = "black";
  squares[parseInt(`${i + 1}${horizont + 1}`)].style.backgroundColor = "black";
}

function createSShape(i, horizont) {
  squares[parseInt(`${i}${horizont + 1}`)].style.backgroundColor = "black";
  squares[parseInt(`${i}${horizont + 2}`)].style.backgroundColor = "black";
  squares[parseInt(`${i + 1}${horizont}`)].style.backgroundColor = "black";
  squares[parseInt(`${i + 1}${horizont + 1}`)].style.backgroundColor = "black";
}
function createZShape(i, horizont) {
  squares[parseInt(`${i}${horizont}`)].style.backgroundColor = "black";
  squares[parseInt(`${i}${horizont + 1}`)].style.backgroundColor = "black";
  squares[parseInt(`${i + 1}${horizont + 1}`)].style.backgroundColor = "black";
  squares[parseInt(`${i + 1}${horizont + 2}`)].style.backgroundColor = "black";
}

function createJShape(i, horizont) {
  squares[parseInt(`${i}${horizont}`)].style.backgroundColor = "black";
  squares[parseInt(`${i + 1}${horizont}`)].style.backgroundColor = "black";
  squares[parseInt(`${i + 1}${horizont + 1}`)].style.backgroundColor = "black";
  squares[parseInt(`${i + 1}${horizont + 2}`)].style.backgroundColor = "black";
}

function createLShape(i, horizont) {
  squares[parseInt(`${i}${horizont + 2}`)].style.backgroundColor = "black";
  squares[parseInt(`${i + 1}${horizont}`)].style.backgroundColor = "black";
  squares[parseInt(`${i + 1}${horizont + 1}`)].style.backgroundColor = "black";
  squares[parseInt(`${i + 1}${horizont + 2}`)].style.backgroundColor = "black";
}





/////////////////////////////////////////////////
//end of shapes


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
      for (let c = 0; c < 10; c++) {
        squares[c].style.backgroundColor = ""; // háttértörlés biztosítása mindenképp
        squares[c].classList.remove("anyád");            // classok eltávolítása
      }
      makescorebigger(rowclearpoints);
      //folytatja a következő sorral
      sor1++;
    }
  }
}
function youlose(){
  squares.forEach(element => {
    element.style.backgroundColor = ""; //szín reset, de csak ha az a szín még nem ért le.
    element.classList.remove("anyád");
})
StartBtn.classList.remove("hidden");
alert("Game Over!")
pointreset();
};
  
function canIcolorIt(){ //törli azokat az elemeket, amiken nincsen rajta a class
  squares.forEach(element => {
    if (!element.classList.contains("anyád")){
      element.style.backgroundColor = ""; //szín reset, de csak ha az a szín még nem ért le.
      if (squares[parseInt(`${1}${myhorizont}`)].classList.contains("anyád")){
        clicked = false;
        youlose();
      }
    }
})};
let myhorizont = 4;
let myi = 0;
function slectedarea(extraleft,extraright){ //az adott elem alatt kijelöli a helyet, ahová esni fog.
  myhorizont+=extraright;
  myhorizont-=extraleft;  
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
    slectedarea(0,0);
    tempi = i;
    tempi++;
  }
  else{
    squares[parseInt(`${i-1}${horizont}`)].style.backgroundColor = "black";//ez az előző blokk beszínezése miatt kell, fluidabb így
    squares[parseInt(`${i-1}${horizont}`)].classList.add("anyád");//ez már nem törölhető canicolorit-tel
    makescorebigger(scorecount)//növelem a pontszámot, ha leérkezik a blokk 25-tel
    resetposition()
  }
  squares[parseInt(`${i}${horizont}`)].style.backgroundColor = "black";
  return tempi;
};
//különböző gomblenyomások esetén viselkedés
function left() {
  if (squares[parseInt(`${i}${horizont-1}`)].style.backgroundColor != "black" && horizont != 0){ //1x ne legyen védett mező, illetve ne is legyen a szélén hogy oldalra menjen.
    horizont -= 1;
  canIcolorIt();
  squares[parseInt(`${i-1}${horizont}`)].style.backgroundColor = "black";
  slectedarea(1,0);
  }
};
function right() {
  if (squares[parseInt(`${i}${horizont+1}`)].style.backgroundColor != "black" && horizont!=9){ //ugyan az, csak a másik oldal.
    
    horizont += 1;
  canIcolorIt();
  squares[parseInt(`${i-1}${horizont}`)].style.backgroundColor = "black";
  slectedarea(0,1);
  }
};
function space() {
  if (clicked == true){//csak akkor működik a space, ha fut a gameszkó
  while((i < 20 && squares[parseInt(`${i}${horizont}`)].style.backgroundColor != "black")){
    i = inovelo(i, horizont)
  }
  i = inovelo(i, horizont);
  resetposition();};
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
  space();
   // Mouse click
});

setInterval(() => {
  if (clicked == true){
  deleterow();
  i = inovelo(i, horizont);//folyamatos futás 
  
}
}, mytime);
})