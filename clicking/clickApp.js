/* addEventListener("DOMContentLoaded", function(){
    circleAppearing()
    CircleDissapear()
})

 */







function randomColor() {
    return `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
}



function randomPositionTop(){
    return `${Math.floor(Math.random() * 100)}%`
}



function circleAppearing(){
    const circle = document.querySelector(".circle")
    circle.style.backgroundColor = randomColor()
    circle.style.display = "block"
    circle.style.top = randomPositionTop()
    circle.style.left = randomPositionTop()
}

function CircleDissapear(){
    var count = 0
    const circle = document.querySelector(".circle")
    const countWrite = document.querySelector(".count")
    
    circle.addEventListener("click", function(){
        circle.style.display = "none"
        count += 1
        countWrite.innerHTML= count
        circleAppearing()
        
        


    })
    
}

