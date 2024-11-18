/* addEventListener("DOMContentLoaded", function(){
    
})

 */
function StartGame(){
    circleAppearing()
    CircleDissapear()
    timer()
}

/* Start Button: */
const startBut = document.querySelector(".but")
const text = document.querySelector(".textIGuess")
startBut.addEventListener("click", function(){
    
    text.style.display = "none"
    StartGame()
})

/* -_-_-_-_-_-_ */

function randomColor() {
    return `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
}



function randomPositionTop(){
    return `${Math.floor(Math.random() * 90)}%`
}



function circleAppearing(){
    const circle = document.querySelector(".circle")
    circle.style.backgroundColor = randomColor()
    circle.style.display = "block"
    circle.style.top = randomPositionTop()
    circle.style.left = randomPositionTop()
}
var count = 0
function CircleDissapear(){
    const circle = document.querySelector(".circle")
    const countWrite = document.querySelector(".count")
    countWrite.innerHTML= count
    circle.addEventListener("click", function(){
        circle.style.display = "none"
        count += 1
        countWrite.innerHTML= count
        circleAppearing()
        
        


    })
    
}
function end(){
    alert("Score: " + count)
}



function timer(){
    setTimeout(() => {
        end()
      }, "4000");
}