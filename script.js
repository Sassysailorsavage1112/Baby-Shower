/* ==========================================================
BABY GIRL OCEAN BABY SHOWER
JAVASCRIPT
========================================================== */


/* ==========================================================
DARK / LIGHT MODE
========================================================== */

const themeToggle =
document.getElementById("themeToggle");

const themeIcon =
document.getElementById("themeIcon");


/*
Check whether the visitor previously
selected a theme.
*/

const savedTheme =
localStorage.getItem("babyShowerTheme");


if (savedTheme === "dark") {

document.body.classList.add("dark");

themeIcon.textContent = "☀️";

}


themeToggle.addEventListener("click", () => {

document.body.classList.toggle("dark");


const darkMode =
document.body.classList.contains("dark");


if (darkMode) {

themeIcon.textContent = "☀️";

localStorage.setItem(
"babyShowerTheme",
"dark"
);

} else {

themeIcon.textContent = "🌙";

localStorage.setItem(
"babyShowerTheme",
"light"
);

}

});


/* ==========================================================
MOBILE MENU
========================================================== */

const menuToggle =
document.getElementById("menuToggle");

const navLinks =
document.getElementById("navLinks");


menuToggle.addEventListener("click", () => {

navLinks.classList.toggle("open");


if (navLinks.classList.contains("open")) {

menuToggle.textContent = "✕";

} else {

menuToggle.textContent = "☰";

}

});


/*
Close the mobile menu when
someone clicks a navigation link.
*/

document
.querySelectorAll(".nav-links a")
.forEach(link => {

link.addEventListener("click", () => {

navLinks.classList.remove("open");

menuToggle.textContent = "☰";

});

});


/* ==========================================================
BABY SHOWER COUNTDOWN
========================================================== */


/*
CHANGE THIS DATE.

Current example:
January 16, 2027 at 2:00 PM
*/

const showerDate =
new Date(
"January 16, 2027 14:00:00"
).getTime();


function updateCountdown() {

const now =
new Date().getTime();


const distance =
showerDate - now;


/*
If the date has arrived,
replace the countdown.
*/

if (distance <= 0) {

document.getElementById(
"countdown"
).innerHTML = `

<div
style="
width:100%;
text-align:center;
font-family:Georgia,serif;
font-size:28px;
color:var(--pink-dark);
"
>

⚓️
The celebration has begun!
💕
🌊

</div>

`;

return;

}


const days =
Math.floor(
distance /
(1000 * 60 * 60 * 24)
);


const hours =
Math.floor(
(distance %
(1000 * 60 * 60 * 24)) /
(1000 * 60 * 60)
);


const minutes =
Math.floor(
(distance %
(1000 * 60 * 60)) /
(1000 * 60)
);


const seconds =
Math.floor(
(distance %
(1000 * 60)) /
1000
);


document.getElementById("days")
.textContent =
String(days).padStart(2, "0");


document.getElementById("hours")
.textContent =
String(hours).padStart(2, "0");


document.getElementById("minutes")
.textContent =
String(minutes).padStart(2, "0");


document.getElementById("seconds")
.textContent =
String(seconds).padStart(2, "0");

}


/*
Run immediately so there isn't
a blank countdown for the first second.
*/

updateCountdown();


/*
Update once every second.
*/

setInterval(
updateCountdown,
1000
);


/* ==========================================================
EXTRA BUBBLES
========================================================== */

const hero =
document.querySelector(".hero");


function createBubble() {

const bubble =
document.createElement("span");


bubble.classList.add(
"bubble"
);


const size =
Math.floor(
Math.random() * 24
) + 8;


bubble.style.width =
`${size}px`;


bubble.style.height =
`${size}px`;


bubble.style.left =
`${Math.random() * 100}%`;


bubble.style.animationDuration =
`${Math.random() * 8 + 7}s`;


bubble.style.animationDelay =
`${Math.random() * 2}s`;


hero
.querySelector(".bubble-container")
.appendChild(bubble);


/*
Remove the bubble after
it has finished traveling.
*/

setTimeout(() => {

bubble.remove();

}, 18000);

}


/*
Create new bubbles periodically.
*/

setInterval(
createBubble,
1200
);


/* ==========================================================
SMOOTH REVEAL ANIMATIONS
========================================================== */


/*
Cards gently appear when they
enter the screen.
*/

const observer =
new IntersectionObserver(
entries => {

entries.forEach(entry => {

if (entry.isIntersecting) {

entry.target.classList.add(
"visible"
);

observer.unobserve(
entry.target
);

}

});

},

{
threshold: 0.15
}
);


document
.querySelectorAll(
".detail-card, .invitation-card, .registry-card, .countdown-card"
)
.forEach(card => {

card.style.opacity = "0";

card.style.transform =
"translateY(25px)";

card.style.transition =
"opacity 0.7s ease, transform 0.7s ease";

observer.observe(card);

});


/*
Add the visible animation.
*/

const revealStyle =
document.createElement("style");


revealStyle.textContent = `

.detail-card.visible,
.invitation-card.visible,
.registry-card.visible,
.countdown-card.visible {

opacity: 1 !important;

transform:
translateY(0) !important;

}

`;


document.head.appendChild(
revealStyle
);


/* ==========================================================
CONSOLE MESSAGE
========================================================== */

console.log(
"⚓ Sea you soon baby girl! 🌊💕"
);