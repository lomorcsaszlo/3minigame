let gamepadIndex = null;
let previousDPadUpState = false;
let previousDPadDownState = false;
let previousAState = false;

// Map for Xbox Controller buttons
const XboxButtons = {
  D_PAD_UP: 12,
  D_PAD_DOWN: 13,
  A: 0
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
      // Check if D-pad up button is pressed and not held down
      if (gamepad.buttons[XboxButtons.D_PAD_UP].pressed && !previousDPadUpState) {
        if (count > 0) {
          up();
          buttonSelect();
        }
        previousDPadUpState = true; // Update the previous state to "pressed"
      } 
      // Check if D-pad down button is pressed and not held down
      else if (gamepad.buttons[XboxButtons.D_PAD_DOWN].pressed && !previousDPadDownState) {
        if (count < pk.length - 1) {
          down();
          buttonSelect();
        }
        previousDPadDownState = true; // Update the previous state to "pressed"
      }
      else if (gamepad.buttons[XboxButtons.A].pressed && !previousAState) {
        window.open(opens[count]);
        previousAState = true; // Update the previous state to "pressed"
      }
      // Reset the state when the button is released
      if (!gamepad.buttons[XboxButtons.D_PAD_UP].pressed) {
        previousDPadUpState = false;
      }
      if (!gamepad.buttons[XboxButtons.D_PAD_DOWN].pressed) {
        previousDPadDownState = false;
      }
      if (!gamepad.buttons[XboxButtons.A].pressed) {
        previousAState = false;
      }
    }
  }
  requestAnimationFrame(pollGamepad); // Keep polling
}



