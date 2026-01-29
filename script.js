// ==========================
// NAV TOGGLE (MOBILE MENU)
// ==========================
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.getElementById("nav-links");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    const expanded = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", (!expanded).toString());
    navLinks.classList.toggle("is-open");
  });
}

// ==========================
// PROJECT DATA (LOOKS)
// ==========================

const projects = [
  {
    id: 1,
    title: "Look #01 – HTML Starter Fit",
    image: "assets/look1-placeholder.png",
    description:
      "For Week 1, I set up my creative coding workspace (VS Code and a Git repository) and created my first HTML page. I experimented with a styled, aesthetic version and then redesigned it to be more accessible, focusing on semantic HTML, font size, contrast, spacing and the use of alt text. This task helped me understand how design choices affect readability and user experience.",
    tags: "HTML • CSS • Accessibility • Semantic Structure",
    link: "week_1/index.html" // 👉 this opens your Week 1 page
  },
  {
    id: 2,
    title: "Look #02 – CSS Couture Layout",
    image: "assets/look2-placeholder.png",
    description:
      "Placeholder for Week 2 task. This look will showcase layout and styling experiments using CSS, focusing on positioning, spacing and visual hierarchy.",
    tags: "CSS • Layout • Design",
    link: "./week_2/index.html" // changed: use explicit relative path
  },
  {
    id: 3,
    title: "Look #03 – Pixel Self-Portrait",
    image: "assets/look3-placeholder.png",
    description:
      "For Week 3, I created a detailed 20×20 CSS-only pixel self-portrait. It uses HTML divs and a CSS grid to build a stylized avatar inspired by early 2000s fashion games. No images or JavaScript were allowed, so all features like hair, skin, lips, and gold hoop earrings were drawn using pure CSS.",
    tags: "HTML • CSS • Pixel Art • No Images",
    link: "week_3/index.html"
  }
];

// ==========================
// PROJECT MODAL LOGIC
// ==========================

const projectModal = document.getElementById("project-modal");
const modalTitle = document.getElementById("project-modal-title");
const modalImage = document.getElementById("project-modal-image");
const modalDescription = document.getElementById("project-modal-description");
const modalTags = document.getElementById("project-modal-tags");
const modalLink = document.getElementById("project-modal-link");
const modalClose = document.querySelector(".modal-close");
const projectButtons = document.querySelectorAll(".view-project");

function openProjectModal(projectId) {
  const project = projects.find((p) => p.id === projectId);
  if (!project || !projectModal) return;

  modalTitle.textContent = project.title;
  modalImage.src = project.image;
  modalImage.alt = project.title;
  modalDescription.textContent = project.description;
  modalTags.textContent = project.tags;
  modalLink.href = project.link || "#";

  projectModal.setAttribute("aria-hidden", "false");
  projectModal.classList.add("is-open");
}

function closeProjectModal() {
  if (!projectModal) return;
  projectModal.setAttribute("aria-hidden", "true");
  projectModal.classList.remove("is-open");
}

// Attach click listeners to "View Look" buttons
projectButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const id = Number(btn.getAttribute("data-project-id"));
    openProjectModal(id);
  });
});

// Close button
if (modalClose) {
  modalClose.addEventListener("click", closeProjectModal);
}

// Close modal on backdrop click
if (projectModal) {
  projectModal.addEventListener("click", (event) => {
    if (event.target === projectModal) {
      closeProjectModal();
    }
  });
}

// Close modal on Esc key
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeProjectModal();
  }
});

// ==========================
// FILTER BUTTONS (CATEGORIES)
// ==========================

const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.getAttribute("data-filter");

    // active state on buttons
    filterButtons.forEach((btn) => btn.classList.remove("is-active"));
    button.classList.add("is-active");

    // show/hide cards
    projectCards.forEach((card) => {
      const category = card.getAttribute("data-category");
      if (filter === "all" || filter === category) {
        card.style.display = "";
      } else {
        card.style.display = "none";
      }
    });
  });
});

// ==========================
// MUSIC TOGGLE
// ==========================

const music = document.getElementById("bg-music");
const musicToggle = document.getElementById("music-toggle");

if (music && musicToggle) {
  music.volume = 0.4; // soft lo-fi

  musicToggle.addEventListener("click", () => {
    if (music.paused) {
      music
        .play()
        .then(() => {
          musicToggle.textContent = "❚❚ Pause Closet Theme";
          musicToggle.classList.add("is-playing");
          musicToggle.setAttribute("aria-pressed", "true");
        })
        .catch((err) => {
          console.warn("Could not start audio:", err);
        });
    } else {
      music.pause();
      musicToggle.textContent = "♫ Play Closet Theme";
      musicToggle.classList.remove("is-playing");
      musicToggle.setAttribute("aria-pressed", "false");
    }
  });
}

// ==========================
// FOOTER YEAR
// ==========================
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// ==========================
// CURSOR SPARKLES
// ==========================
let sparkleCount = 0;
const maxSparkles = 40;

document.addEventListener("mousemove", (event) => {
  if (sparkleCount >= maxSparkles) return;

  const sparkle = document.createElement("span");
  sparkle.classList.add("sparkle");
  sparkle.style.left = `${event.clientX}px`;
  sparkle.style.top = `${event.clientY}px`;

  document.body.appendChild(sparkle);
  sparkleCount++;

  setTimeout(() => {
    sparkle.remove();
    sparkleCount--;
  }, 700);
});

// ==========================
// AOS INIT (SCROLL ANIMATIONS)
// ==========================
if (typeof AOS !== "undefined") {
  AOS.init({
    duration: 900,
    once: true,
    easing: "ease-out"
  });
}

