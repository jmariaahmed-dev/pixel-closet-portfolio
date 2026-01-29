/* =======================================================
   FASHION TIME MACHINE – INTERACTIVE SCRIPT
   Handles:
   • Page fade-in animation
   • Cursor ripple effects
   • Random emoji particle generator per era
   • Click-bounce emojis
   ======================================================= */

// ----------------------------
// PAGE FADE ANIMATION
// ----------------------------
document.addEventListener("DOMContentLoaded", () => {
  const wrapper = document.querySelector(".page-fade");
  if (wrapper) {
    wrapper.style.opacity = "1";
  }
});

// ----------------------------
// CURSOR RIPPLES
// ----------------------------
document.addEventListener("mousemove", (e) => {
  const ripple = document.createElement("span");
  ripple.classList.add("ripple");
  ripple.style.left = `${e.pageX}px`;
  ripple.style.top = `${e.pageY}px`;

  document.body.appendChild(ripple);

  setTimeout(() => ripple.remove(), 600);
});

// ----------------------------
// EMOJI PARTICLES PER ERA
// ----------------------------

// Define your emoji sets
const emojiSets = {
  y2k: ["🌸", "💿", "✨", "💕", "📱", "🎀"],
  "retro90": ["💾", "🕹️", "📼", "🎧", "🌈", "⭐"],
  "neon80": ["💜", "🎶", "🌟", "📺", "💥", "🕺"],
  future: ["⚡", "🌐", "🤖", "💎", "✨", "🔷"],
  medieval: ["✨", "🌸", "🦋", "🌙", "🔮", "🪻"],
  rift: ["🌀", "✨", "🌑", "💫", "⚡", "🌌"]
};

// Detect which era page we’re on
const bodyClass = document.body.classList;

// Choose emoji set
let activeSet = [];
for (let key in emojiSets) {
  if (bodyClass.contains(key + "-era")) {
    activeSet = emojiSets[key];
  }
}

// Generate emoji every X ms
if (activeSet.length > 0) {
  setInterval(() => {
    createEmoji();
  }, 700); // every 0.7 seconds (adjust to change density)
}

// ----------------------------
// FUNCTION: CREATE FLOATING EMOJI
// ----------------------------
function createEmoji() {
  const emoji = document.createElement("span");
  emoji.classList.add("emoji");

  // pick random emoji
  emoji.textContent = activeSet[Math.floor(Math.random() * activeSet.length)];

  // random starting position
  emoji.style.left = Math.random() * window.innerWidth + "px";
  emoji.style.bottom = "-40px";

  // random animation duration
  const duration = 7 + Math.random() * 5;
  emoji.style.animationDuration = duration + "s";

  // bounce on click
  emoji.addEventListener("click", () => {
    emoji.style.transition = "0.25s";
    emoji.style.transform = "scale(1.7) rotate(25deg)";
    emoji.style.opacity = "0";
    setTimeout(() => emoji.remove(), 250);
  });

  document.body.appendChild(emoji);

  // remove after done
  setTimeout(() => emoji.remove(), duration * 1000);
}

