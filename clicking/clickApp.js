

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

circleAppearing()