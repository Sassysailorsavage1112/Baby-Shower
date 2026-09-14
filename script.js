document.addEventListener("DOMContentLoaded", () => {

/* =========================
ELEMENTS
========================= */

const body = document.body;

const themeToggle =
document.getElementById("themeToggle");

const menuToggle =
document.getElementById("menuToggle");

const navLinks =
document.getElementById("navLinks");

const countdown =
document.getElementById("countdown");

const countdownMessage =
document.getElementById("countdownMessage");

const daysElement =
document.getElementById("days");

const hoursElement =
document.getElementById("hours");

const minutesElement =
document.getElementById("minutes");

const secondsElement =
document.getElementById("seconds");


/* =========================
DARK MODE
========================= */

const savedTheme =
localStorage.getItem("babyShowerTheme");

if (savedTheme === "dark") {

body.classList.add("dark");

if (themeToggle) {

themeToggle.textContent = "☀️";

themeToggle.setAttribute(
"aria-label",
"Switch to light mode"
);
}
}


if (themeToggle) {

themeToggle.addEventListener("click", () => {

body.classList.toggle("dark");

const isDarkMode =
body.classList.contains("dark");

themeToggle.textContent =
isDarkMode ? "☀️" : "🌙";

themeToggle.setAttribute(
"aria-label",
isDarkMode
? "Switch to light mode"
: "Switch to dark mode"
);

localStorage.setItem(
"babyShowerTheme",
isDarkMode ? "dark" : "light"
);

});
}


/* =========================
MOBILE MENU
========================= */

if (menuToggle && navLinks) {

menuToggle.addEventListener("click", () => {

const isOpen =
navLinks.classList.toggle("open");

menuToggle.setAttribute(
"aria-expanded",
String(isOpen)
);

menuToggle.setAttribute(
"aria-label",
isOpen
? "Close navigation menu"
: "Open navigation menu"
);

menuToggle.textContent =
isOpen ? "✕" : "☰";

});


navLinks
.querySelectorAll("a")
.forEach((link) => {

link.addEventListener("click", () => {

navLinks.classList.remove("open");

menuToggle.setAttribute(
"aria-expanded",
"false"
);

menuToggle.setAttribute(
"aria-label",
"Open navigation menu"
);

menuToggle.textContent = "☰";

});

});
}


/* =========================
COUNTDOWN
========================= */

const eventDateString =
countdown?.dataset.eventDate;


if (
eventDateString &&
daysElement &&
hoursElement &&
minutesElement &&
secondsElement
) {

const eventDate =
new Date(eventDateString);


const updateCountdown = () => {

const now = new Date();

const difference =
eventDate.getTime() -
now.getTime();


/* Event has arrived */

if (difference <= 0) {

daysElement.textContent = "0";
hoursElement.textContent = "0";
minutesElement.textContent = "0";
secondsElement.textContent = "0";

if (countdownMessage) {

countdownMessage.textContent =
"The celebration has begun! We can't wait to celebrate with you.";
}

return;
}


const totalSeconds =
Math.floor(difference / 1000);


const days =
Math.floor(
totalSeconds / 86400
);

const hours =
Math.floor(
(totalSeconds % 86400) / 3600
);

const minutes =
Math.floor(
(totalSeconds % 3600) / 60
);

const seconds =
totalSeconds % 60;


daysElement.textContent =
String(days);

hoursElement.textContent =
String(hours).padStart(2, "0");

minutesElement.textContent =
String(minutes).padStart(2, "0");

secondsElement.textContent =
String(seconds).padStart(2, "0");


if (countdownMessage) {

countdownMessage.textContent =
"Counting down to Sunday, October 18, 2026 at 3:00 PM.";

}

};


updateCountdown();

setInterval(
updateCountdown,
1000
);
}


/* =========================
EXTRA BUBBLES
========================= */

const bubbleContainer =
document.querySelector(".bubble-container");


if (bubbleContainer) {

for (
let index = 0;
index < 12;
index += 1
) {

const bubble =
document.createElement("span");

bubble.className =
"bubble dynamic-bubble";


const size =
Math.floor(
Math.random() * 22
) + 8;


const leftPosition =
Math.floor(
Math.random() * 100
);


const duration =
Math.floor(
Math.random() * 8
) + 8;


const delay =
Math.floor(
Math.random() * 10
);


bubble.style.width =
`${size}px`;

bubble.style.height =
`${size}px`;

bubble.style.left =
`${leftPosition}%`;

bubble.style.animationDuration =
`${duration}s`;

bubble.style.animationDelay =
`${delay}s`;


bubbleContainer.appendChild(
bubble
);
}
}

});