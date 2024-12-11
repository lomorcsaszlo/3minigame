document.addEventListener('DOMContentLoaded', () => {

    const start = document.querySelector(".start")
    const stop = document.querySelector(".stop")
    const main = document.querySelector('main');
    for (let i = 0; i < 800; i++) {
        const pixel = document.createElement('div');
        main.appendChild(pixel);
    }
    start.addEventListener("click", function () {
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

    document.addEventListener('keydown', function (event) {
        if (event.key === 'a' || event.key === 'A') {
            if (position > 760) {
                pixels[position].style.backgroundColor = "black";
                position -= 1;
                pixels[position].style.backgroundColor = "white";
            }
        }
        else if (event.key === 'd' || event.key === 'D') {
            if (position < 799) {
                pixels[position].style.backgroundColor = "black";
                position += 1;
                pixels[position].style.backgroundColor = "white";
            }
        }
    });

    document.addEventListener("keydown", function (event) {
        if (event.key === ' ') {
            shoot(position);
        }
    });
    // CONTROLLER __________---------___________-----------_________
    let gamepadIndex = null;
    let previousDPadLeftState = false;
    let previousDPadRightState = false;
    let previousAButtonState = false;
    let previousBButtonState = false; // For shooting or any additional button, if needed

    // Map for Xbox Controller buttons
    const XboxButtons = {
        D_PAD_LEFT: 14,   // Assuming D-Pad Left is mapped to index 14
        D_PAD_RIGHT: 15,  // Assuming D-Pad Right is mapped to index 15
        A: 0,             // A button
        B: 1              // B button, could be used for shooting (mapped to spacebar behavior)
    };

    // Event listener for gamepad connection
    window.addEventListener("gamepadconnected", (event) => {
        gamepadIndex = event.gamepad.index; // Store the index of the connected gamepad
        console.log(`Gamepad connected at index ${gamepadIndex}: ${event.gamepad.id}`);
        pollGamepad(); // Start polling
    });

    // Event listener for gamepad disconnection
    window.addEventListener("gamepaddisconnected", (event) => {
        console.log(`Gamepad disconnected from index ${event.gamepad.index}`);
        gamepadIndex = null; // Clear the gamepad index
    });

    // Function to poll the gamepad state
    function pollGamepad() {
        if (gamepadIndex !== null) {
            const gamepad = navigator.getGamepads()[gamepadIndex];
            if (gamepad) {
                // Handle D-Pad left (a key)
                if (gamepad.buttons[XboxButtons.D_PAD_LEFT].pressed && !previousDPadLeftState) {
                    if (position > 760) {
                        pixels[position].style.backgroundColor = "black";
                        position -= 1;
                        pixels[position].style.backgroundColor = "white";
                    }
                    previousDPadLeftState = true; // Update the previous state to "pressed"
                }
                // Handle D-Pad right (d key)
                else if (gamepad.buttons[XboxButtons.D_PAD_RIGHT].pressed && !previousDPadRightState) {
                    if (position < 799) {
                        pixels[position].style.backgroundColor = "black";
                        position += 1;
                        pixels[position].style.backgroundColor = "white";
                    }
                    previousDPadRightState = true; // Update the previous state to "pressed"
                }
                // Handle A button (spacebar for shooting)
                else if (gamepad.buttons[XboxButtons.A].pressed && !previousAButtonState) {
                    shoot(position); // Trigger shoot action
                    previousAButtonState = true; // Update the previous state to "pressed"
                }
                // Reset the state when the button is released
                if (!gamepad.buttons[XboxButtons.D_PAD_LEFT].pressed) {
                    previousDPadLeftState = false;
                }
                if (!gamepad.buttons[XboxButtons.D_PAD_RIGHT].pressed) {
                    previousDPadRightState = false;
                }
                if (!gamepad.buttons[XboxButtons.A].pressed) {
                    previousAButtonState = false;
                }
            }
        }
        requestAnimationFrame(pollGamepad); // Keep polling
    }

    // CONTROLLER END______-----_______----_-_-_____

    function shoot(startPos) {
        let shootPos = startPos - 40;
        setInterval(function () {
            if (shootPos >= 0) {
                pixels[shootPos].style.backgroundColor = "black";
                shootPos -= 40;
                if (shootPos >= 0) {
                    if (pixels[shootPos].style.backgroundColor === "blue") {
                        points += 1;
                        counter.innerHTML = points
                    }
                    pixels[shootPos].style.backgroundColor = "red";
                }
            }
        }, 100);
    }
}

function target() {

    const pixels = document.querySelectorAll("main div");
    pixels[Math.floor(Math.random() * 600)].style.backgroundColor = "blue"
}

