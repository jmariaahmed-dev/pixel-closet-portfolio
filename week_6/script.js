/*
  Week 6 — Time-based Interaction
  Uses Date(), setInterval, DOM manipulation, and string splitting
*/

// DOM references
const clockEl = document.querySelector("#clock");
const textEl = document.querySelector("#typewriter");

// Messages based on time of day
function getMessageByTime(hour) {
  if (hour < 6) {
    return "The closet sleeps.\nFabrics rest in the dark.\nDreaming of tomorrow.";
  }
  if (hour < 12) {
    return "The pixel closet wakes up.\nColours stretch.\nOutfits prepare for the day.";
  }
  if (hour < 18) {
    return "Midday layers unfold.\nTextures breathe.\nChoices feel lighter.";
  }
  return "Evening settles in.\nShadows soften.\nThe closet slows down.";
}

// Update clock every second
setInterval(() => {
  const now = new Date();
  const timeString = now.toLocaleTimeString();
  clockEl.textContent = timeString;
}, 1000);

// Typewriter logic
let currentText = "";
let characters = [];
let index = 0;
let typingInterval = null;

function startTypewriter() {
  const hour = new Date().getHours();
  currentText = getMessageByTime(hour);
  characters = currentText.split("");
  index = 0;
  textEl.textContent = "";

  if (typingInterval) clearInterval(typingInterval);

  typingInterval = setInterval(() => {
    textEl.textContent += characters[index];
    index++;

    if (index >= characters.length) {
      clearInterval(typingInterval);
    }
  }, 60);
}

// Start on load
startTypewriter();

// Refresh message every minute to reflect time passing
setInterval(startTypewriter, 60000);
