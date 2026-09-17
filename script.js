// Force page to start at the top
history.scrollRestoration = "manual";

function goToTop() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "auto"
  });
}

goToTop();

window.addEventListener("load", goToTop);

window.addEventListener("pageshow", goToTop);

/* =========================================
MOBILE MENU
========================================= */

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {

menuToggle.addEventListener("click", () => {

navLinks.classList.toggle("open");

const isOpen = navLinks.classList.contains("open");

menuToggle.textContent = isOpen ? "✕" : "☰";

});


// Close menu after clicking a navigation link

navLinks.querySelectorAll("a").forEach((link) => {

link.addEventListener("click", () => {

navLinks.classList.remove("open");

menuToggle.textContent = "☰";

});

});

}


/* =========================================
DARK MODE
========================================= */

const themeToggle = document.getElementById("themeToggle");

const savedTheme = localStorage.getItem("babyShowerTheme");

if (savedTheme === "dark") {

document.body.classList.add("dark");

if (themeToggle) {
themeToggle.textContent = "☀️";
}

}


if (themeToggle) {

themeToggle.addEventListener("click", () => {

document.body.classList.toggle("dark");

const isDark =
document.body.classList.contains("dark");

localStorage.setItem(
"babyShowerTheme",
isDark ? "dark" : "light"
);

themeToggle.textContent =
isDark ? "☀️" : "🌙";

});

}


/* =========================================
COUNTDOWN
========================================= */

const countdown = document.getElementById("countdown");

if (countdown) {

const eventDate = new Date(
countdown.dataset.eventDate
).getTime();


const daysElement =
document.getElementById("days");

const hoursElement =
document.getElementById("hours");

const minutesElement =
document.getElementById("minutes");

const secondsElement =
document.getElementById("seconds");


function updateCountdown() {

const now = new Date().getTime();

const difference = eventDate - now;


if (difference <= 0) {

daysElement.textContent = "00";
hoursElement.textContent = "00";
minutesElement.textContent = "00";
secondsElement.textContent = "00";

return;
}


const days = Math.floor(
difference /
(1000 * 60 * 60 * 24)
);

const hours = Math.floor(
(difference %
(1000 * 60 * 60 * 24)) /
(1000 * 60 * 60)
);

const minutes = Math.floor(
(difference %
(1000 * 60 * 60)) /
(1000 * 60)
);

const seconds = Math.floor(
(difference % (1000 * 60)) /
1000
);


daysElement.textContent =
String(days).padStart(2, "0");

hoursElement.textContent =
String(hours).padStart(2, "0");

minutesElement.textContent =
String(minutes).padStart(2, "0");

secondsElement.textContent =
String(seconds).padStart(2, "0");

}


updateCountdown();

setInterval(updateCountdown, 1000);

}


/* =========================================
EXTRA BUBBLES
========================================= */

const hero = document.querySelector(".hero");

if (hero) {

for (let i = 0; i < 12; i++) {

const bubble = document.createElement("span");

bubble.classList.add("extra-bubble");

bubble.style.position = "absolute";
bubble.style.bottom = "-30px";
bubble.style.left =
`${Math.random() * 100}%`;

const size =
Math.floor(Math.random() * 12) + 6;

bubble.style.width = `${size}px`;
bubble.style.height = `${size}px`;

bubble.style.border =
"2px solid rgba(255,255,255,0.45)";

bubble.style.borderRadius = "50%";

bubble.style.pointerEvents = "none";

bubble.style.animation =
`extraBubbleRise ${
8 + Math.random() * 10
}s linear infinite`;

bubble.style.animationDelay =
`${Math.random() * 8}s`;

hero.appendChild(bubble);

}

}


/* =========================================
EXTRA BUBBLE ANIMATION
========================================= */

const extraBubbleStyle =
document.createElement("style");

extraBubbleStyle.textContent = `

@keyframes extraBubbleRise {

0% {
transform: translateY(0);
opacity: 0;
}

15% {
opacity: 0.7;
}

100% {
transform: translateY(-100vh);
opacity: 0;
}

}

`;

document.head.appendChild(extraBubbleStyle);


/* =========================================
MAKE SURE FISH FACE RIGHT
========================================= */

const fishElements =
document.querySelectorAll(".fish");

fishElements.forEach((fish) => {

fish.style.transform = "scaleX(-1)";

});


/* =========================================
ACTIVE NAVIGATION
========================================= */

const sections =
document.querySelectorAll("section[id]");

const navigationLinks =
document.querySelectorAll(".nav-links a");


function updateActiveNav() {

let currentSection = "";

sections.forEach((section) => {

const sectionTop =
section.offsetTop - 150;

const sectionHeight =
section.offsetHeight;

if (
window.scrollY >= sectionTop &&
window.scrollY < sectionTop + sectionHeight
) {

currentSection =
section.getAttribute("id");

}

});


navigationLinks.forEach((link) => {

link.classList.remove("active");

if (
link.getAttribute("href") ===
`#${currentSection}`
) {

link.classList.add("active");

}

});

}


window.addEventListener(
"scroll",
updateActiveNav
);

updateActiveNav();