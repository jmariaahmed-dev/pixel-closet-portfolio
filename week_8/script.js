/*
  Week 8 — GSAP Motion Lab
  Demonstrates: .to(), timelines, controls, ScrollTrigger
*/

// Register plugin
gsap.registerPlugin(ScrollTrigger);

/* -------------------------
   Mini Exercise 1
   Button-controlled motion
-------------------------- */
const moveBtn = document.querySelector("#moveBtn");

moveBtn.addEventListener("click", () => {
  gsap.to("#box1", {
    x: "+=50",
    duration: 0.4,
    ease: "power2.out"
  });
});

/* -------------------------
   Mini Exercise 2
   GSAP Timeline
-------------------------- */
const timeline = gsap.timeline({ paused: true });

timeline
  .to("#box2", { x: 200, duration: 0.6 })
  .to("#box2", { scale: 1.5, duration: 0.4 })
  .to("#box2", { y: 200, duration: 0.6 })
  .to("#box2", { rotation: 720, duration: 0.8 })
  .to("#box2", { x: 0, y: 0, scale: 1, rotation: 0, duration: 0.6 });

document.querySelector("#play").addEventListener("click", () => timeline.play());
document.querySelector("#pause").addEventListener("click", () => timeline.pause());
document.querySelector("#reverse").addEventListener("click", () => timeline.reverse());

/* -------------------------
   ScrollTrigger Animation
-------------------------- */
gsap.to("#box3", {
  x: 300,
  rotation: 360,
  scrollTrigger: {
    trigger: "#box3",
    start: "top 80%",
    end: "bottom top",
    scrub: true
  }
});
