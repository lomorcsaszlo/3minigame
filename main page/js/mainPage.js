//open.js opening.html
var count = 0;
const pk = document.querySelectorAll(".nes-container p");

function buttonSelect() {
    // Reset color and background of previously selected element
    if (count > 0) {
        pk[count - 1].style.color = "black";
        pk[count - 1].style.backgroundColor = "#fff9ef";
    }

    if (count < pk.length - 1) {
        pk[count + 1].style.color = "black";
        pk[count + 1].style.backgroundColor = "#fff9ef";
    }

    // Highlight the current element
    pk[count].style.color = "#fff9ef";
    pk[count].style.backgroundColor = "black";
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
        }
    });
}

function up() {
    count--;
}

function down() {
    count++;
}

buttonSelect();
cont();

// URLs to open when a list item is selected
const opens = ["../tetris/tetris.html", "../clicking/opening.html", "../shooting game test/html.html", "../mastermind"];
