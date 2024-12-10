document.addEventListener('DOMContentLoaded', () => {

    const start = document.querySelector(".start")
    const stop = document.querySelector(".stop")
    const main = document.querySelector('main');
    for (let i = 0; i < 800; i++) {
        const pixel = document.createElement('div');
        main.appendChild(pixel);
    }
    start.addEventListener("click", function(){
        start.style.display = "none"
/*         stop.style.display = "inline" */
        shootingChar();
        setInterval(target, 3000)
    })

});

function shootingChar() {
    const counter = document.querySelector(".score")
    var points = 0;
    let position = 780;
    const pixels = document.querySelectorAll("main div");

    pixels[position].style.backgroundColor = "white";

    document.addEventListener('keydown', function(event) {
        if (event.key === 'a' || event.key === 'A') {
            if (position > 760) {  
                pixels[position].style.backgroundColor = "black"; 
                position -= 1;  
                pixels[position].style.backgroundColor = "white";  
            }
        }
        else if (event.key === 'd' || event.key === 'D') {
            if (position < 799 ) {  
                pixels[position].style.backgroundColor = "black"; 
                position += 1;  
                pixels[position].style.backgroundColor = "white";  
            }
        }
    });

    document.addEventListener("keydown", function(event){
        if (event.key === ' ') {  
            shoot(position);
        }
    });

    function shoot(startPos) {
        let shootPos = startPos - 40;
        setInterval(function() {
            if (shootPos >= 0) {
                pixels[shootPos].style.backgroundColor = "black";
                shootPos -= 40;
                if (shootPos >= 0) {
                    if(pixels[shootPos].style.backgroundColor === "blue"){
                        points += 1;
                        counter.innerHTML = points
                    }
                    pixels[shootPos].style.backgroundColor = "red";
                }
            }
        }, 100);
    }
}

function target(){

    const pixels = document.querySelectorAll("main div");
    pixels[Math.floor(Math.random() * 600)].style.backgroundColor="blue"
}

