var count = 0;
const pk = document.querySelectorAll(".nes-container p");
const main = new Audio('../musics/MainTheme1.mp3');

document.addEventListener("DOMContentLoaded", function() {
    main.muted = true;
    main.play()
        .then(() => {
            main.muted = false;
        })
        .catch((error) => {
            console.error('Autoplay failed:', error);
        });
}); 
// Store the original text of each element
const originalText = Array.from(pk).map(element => element.textContent);

function buttonSelect() {
    // Reset color, background, and text of previously selected element
    pk.forEach((element, index) => {
        element.style.color = "black";
        element.style.backgroundColor = "#fff9ef";
        element.textContent = originalText[index];
    });

    // Highlight the current element and wrap its text with `<` and `>`
    pk[count].style.color = "#fff9ef";
    pk[count].style.backgroundColor = "black";
    pk[count].textContent = `>${originalText[count]}<`;
}

function cont() {
    document.addEventListener('keydown', function (event) {
        if (event.key === 'w' || event.key === 'W') {
            if (count > 0) {
                up();
                buttonSelect();
            }
        }
        
        else if (event.key === 's' || event.key === 'S') {
            if (count < pk.length - 1) {
                down();
                buttonSelect();
            }
        }
        else if (event.key === ' ' || event.key === 'Enter') {
            window.open(opens[count]);
            main.pause()
            opengame.play()

        }
    });
}

function up() {
    count--;
    click.currentTime = 0;
    click.play()
}

function down() {
    count++;
    click.currentTime = 0;
    click.play()
}

// Initialize selection
buttonSelect();
cont();

// URLs to open when a list item is selected
const opens = ["../tetris/tetris.html", "../clicking/opening.html", "../shooting game test/html.html", "../mastermind"];
function playTheme(){
    
}



