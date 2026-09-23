// ========================================
// GET HTML ELEMENTS
// ========================================
const birthdayMusic =
    document.querySelector("#birthdayMusic");

const musicButton =
    document.querySelector("#musicButton");
const openGift = document.querySelector("#openGift");
const intro = document.querySelector("#intro");

const surpriseButton = document.querySelector("#surpriseButton");
const surpriseMessage = document.querySelector("#surpriseMessage");

const heartLeaves = document.querySelector("#heartLeaves");
const treeArea = document.querySelector(".tree-area");

const balloons = document.querySelector("#balloons");


// ========================================
// OPEN THE GIFT
// ========================================

openGift.addEventListener("click", function () {

    intro.classList.add("opened");

    birthdayMusic.volume = 0.5;

    birthdayMusic.play()
        .catch(function () {
            console.log("Music could not start.");
        });

    musicButton.classList.add("visible");

    setTimeout(function () {
        treeArea.classList.add("grow");
    }, 600);

    setTimeout(function () {
        intro.style.opacity = "0";
    }, 800);

    setTimeout(function () {
        intro.style.display = "none";
    }, 1500);

});

// ========================================
// SURPRISE MESSAGE
// ========================================

surpriseButton.addEventListener("click", function () {

    surpriseMessage.classList.add("show");

});


// ========================================
// CREATE HEART LEAVES
// ========================================

for (let i = 0; i < 100; i++) {

    const heart = document.createElement("div");

    heart.classList.add("heart-leaf");

    heart.textContent = "♥";


    const t = Math.random() * Math.PI * 2;

    const scale =
        0.45 + Math.random() * 0.55;


    const heartX =
        16 * Math.pow(Math.sin(t), 3);

    const heartY =
        13 * Math.cos(t)
        - 5 * Math.cos(2 * t)
        - 2 * Math.cos(3 * t)
        - Math.cos(4 * t);


    const x =
        215 + heartX * 10 * scale;

    const y =
        155 - heartY * 8 * scale;


    heart.style.left = x + "px";

    heart.style.top = y + "px";


    const size =
        13 + Math.random() * 19;

    heart.style.fontSize =
        size + "px";


    const speed =
        2 + Math.random() * 2.5;

    heart.style.animationDuration =
        speed + "s";


    const delay =
        2 + Math.random() * 3;

    heart.style.transitionDelay =
        delay + "s";


    heartLeaves.appendChild(heart);

}


// ========================================
// CREATE SPARKLES
// ========================================

const sparkleContainer =
    document.createElement("div");

sparkleContainer.classList.add(
    "sparkle-container"
);

treeArea.appendChild(
    sparkleContainer
);


for (let i = 0; i < 45; i++) {

    const sparkle =
        document.createElement("div");

    sparkle.classList.add("sparkle");


    const x =
        Math.random() * 460;

    const y =
        Math.random() * 430;


    sparkle.style.left =
        x + "px";

    sparkle.style.top =
        y + "px";


    const size =
        3 + Math.random() * 7;

    sparkle.style.width =
        size + "px";

    sparkle.style.height =
        size + "px";


    const speed =
        1.5 + Math.random() * 2.5;

    sparkle.style.animationDuration =
        speed + "s";


    sparkle.style.animationDelay =
        Math.random() * 3 + "s";


    sparkleContainer.appendChild(
        sparkle
    );

}


// ========================================
// CREATE BALLOONS
// ========================================

const balloonColors = [
    "#ef5d91",
    "#ff7eb3",
    "#c77dff",
    "#ffb347",
    "#6ec6ff",
    "#ff6b6b"
];


for (let i = 0; i < 12; i++) {

    const balloon =
        document.createElement("div");

    balloon.classList.add("balloon");


    // Random horizontal position

    balloon.style.left =
        Math.random() * 100 + "%";


    // Random size

    const size =
        40 + Math.random() * 30;

    balloon.style.width =
        size + "px";

    balloon.style.height =
        size * 1.25 + "px";


    // Random color

    balloon.style.background =
        balloonColors[
            Math.floor(
                Math.random() *
                balloonColors.length
            )
        ];


    // Random speed

    balloon.style.animationDuration =
        9 + Math.random() * 8 + "s";


    // Random delay

    balloon.style.animationDelay =
        Math.random() * 8 + "s";


    balloons.appendChild(balloon);

}
// ========================================
// TYPEWRITER BIRTHDAY TITLE
// ========================================

const birthdayTitle =
    document.querySelector("#birthdayTitle");

const birthdayText =
    "Happy Birthday! ❤️";

let titleIndex = 0;

function typeBirthdayTitle() {

    if (titleIndex < birthdayText.length) {

        birthdayTitle.textContent +=
            birthdayText.charAt(titleIndex);

        titleIndex++;

        setTimeout(
            typeBirthdayTitle,
            120
        );

    }

}


// Start typing after the birthday page appears
setTimeout(function () {

    typeBirthdayTitle();

}, 1800);


// ========================================
// CAKE CLICK EFFECT
// ========================================

const cake =
    document.querySelector("#cake");


cake.addEventListener("click", function () {

    cake.classList.toggle(
        "cake-celebrate"
    );

});
// ========================================
// MUSIC PLAY / PAUSE
// ========================================

musicButton.addEventListener("click", function () {

    if (birthdayMusic.paused) {

        birthdayMusic.play();

        musicButton.textContent = "🔊 Music";

    } else {

        birthdayMusic.pause();

        musicButton.textContent = "🔇 Music";

    }

});