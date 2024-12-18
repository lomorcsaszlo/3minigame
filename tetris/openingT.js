function vibration(){
    const press = document.querySelector(".press")
    setInterval(function(){
        if(press.style.display == "none"){
            press.style.display = "block"
        }else{
            press.style.display = "none"
        }
    }, 400)
    
}


document.addEventListener('keydown', function(event) {
    if (event.key === ' ' || event.key === ' ') {
        window.open("tetris.html");
    }
});



vibration()

/* window.open("https://www.example.com", "_blank"); */