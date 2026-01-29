/*
  Week 7 — JavaScript Events & DOM Interaction
  Covers click, input, keydown, mouseenter events
*/

// Task 1 — Activate / Deactivate theme
const activateBtn = document.querySelector("#activate");
const deactivateBtn = document.querySelector("#deactivate");

activateBtn.addEventListener("click", () => {
  document.body.classList.add("active-theme");
});

deactivateBtn.addEventListener("click", () => {
  document.body.classList.remove("active-theme");
});

// Task 2 — Input event
const inputField = document.querySelector("#textInput");
const output = document.querySelector("#output");

inputField.addEventListener("input", (e) => {
  output.textContent = e.target.value;
});

// Task 3 — Keyboard movement
const movable = document.querySelector("#movable");
let x = 50;
let y = 50;

document.addEventListener("keydown", (e) => {
  const step = 10;

  if (e.key === "ArrowRight") x += step;
  if (e.key === "ArrowLeft") x -= step;
  if (e.key === "ArrowDown") y += step;
  if (e.key === "ArrowUp") y -= step;

  movable.style.left = x + "px";
  movable.style.top = y + "px";
});

// Hr 3 — Friction element (button runs away)
const escapeBtn = document.querySelector("#escapeBtn");

escapeBtn.addEventListener("mouseenter", () => {
  const randomX = Math.random() * 200 - 100;
  const randomY = Math.random() * 100 - 50;

  escapeBtn.style.transform = `translate(${randomX}px, ${randomY}px)`;
});
