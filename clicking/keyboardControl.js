/* var count2 = 0
const pk2 = document.querySelectorAll(".selectable");
const originalTextThere = Array.from(pk2).map(element => element.textContent);
const whatdo = ["copyHS", "leaderboardDisplay"]



function buttonSelect() {
    // Reset color, background, and text of previously selected element
    pk2.forEach((element, index) => {
        element.style.color = "#fff9ef";
        element.style.backgroundColor = "black";
    });

    // Highlight the current element and wrap its text with `<` and `>`
    pk2[count2].style.color = "black";
    pk2[count2].style.backgroundColor = "#fff9ef";

}

function cont() {
    document.addEventListener('keydown', function (event) {
        if (event.key === 'w' || event.key === 'W') {
            if (count2 > 0) {
                up();
                buttonSelect();
            }
        }

        else if (event.key === 's' || event.key === 'S') {
            if (count2 < pk2.length - 1) {
                down();
                buttonSelect();
            }
        }
        else if (event.key === ' ' || event.key === 'Enter') {
            leaderBoard()

        }
    });
}

function up() {
    count2--;

}

function down() {
    count2++;

}

// Initialize selection
buttonSelect();
cont();
 */