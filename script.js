// All 12 birthday photos

const photos = [

    "pics/1000032849.jpg",
    "pics/1000032859.jpg",
    "pics/1000032860.jpg",
    "pics/1000032867.jpg",
    "pics/1000032875.jpg",
    "pics/1000032882.jpg",
    "pics/1000032884.jpg",
    "pics/1000032892.jpg",
    "pics/1000036852.jpg",
    "pics/1000037056.jpg",
    "pics/1000042215.jpg",
    "pics/1000042218.jpg"

];


// Message for each photo

const messages = [

    "A little collection of beautiful memories ✨",

    "Some moments deserve to be remembered forever 💖",

    "Keep this beautiful smile always 😊",

    "Another memory, another reason to smile 🌸",

    "May your days always be this beautiful ✨",

    "Good memories make life special 💕",

    "Here's to all the moments that made you smile 🌷",

    "May happiness follow you everywhere 💖",

    "More smiles, more memories, more happiness ✨",

    "Never stop being the wonderful person you are 🌸",

    "A new year of your life begins today 🎂",

    "And finally... Happy Birthday! 🎉💖"

];


let currentIndex = 0;

let slideshowInterval;


// ============================
// OPEN SURPRISE
// ============================

function openSurprise() {

    const start =
        document.getElementById("start");

    const surprise =
        document.getElementById("surprise");

    const music =
        document.getElementById("bgm");


    // Hide opening screen

    start.style.display = "none";


    // Show birthday surprise

    surprise.style.display = "block";


    // Move page to top

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });


    // Start BGM after button tap

    music.volume = 0.7;

    music.play().catch(function(error) {

        console.log(
            "Music could not start:",
            error
        );

    });


    // Start hearts

    createHearts();


    // Start slideshow

    startSlideshow();
}


// ============================
// SLIDESHOW
// ============================

function startSlideshow() {

    slideshowInterval =
        setInterval(changePhoto, 4000);

}


function changePhoto() {

    const image =
        document.getElementById(
            "birthdayPhoto"
        );

    const text =
        document.getElementById(
            "photoText"
        );


    // Fade current photo

    image.classList.add("fade");


    setTimeout(function() {

        currentIndex++;


        // Finished all photos

        if (
            currentIndex >=
            photos.length
        ) {

            clearInterval(
                slideshowInterval
            );

            currentIndex =
                photos.length - 1;

            image.classList.remove(
                "fade"
            );

            showFinalMessage();

            return;
        }


        // Change image

        image.src =
            photos[currentIndex];


        // Change message

        text.textContent =
            messages[currentIndex];


        // Update counter

        document.getElementById(
            "currentPhoto"
        ).textContent =
            currentIndex + 1;


        // Fade new image in

        image.classList.remove(
            "fade"
        );


    }, 600);

}


// ============================
// FINAL MESSAGE
// ============================

function showFinalMessage() {

    const finalMessage =
        document.getElementById(
            "finalMessage"
        );


    finalMessage.style.display =
        "block";


    setTimeout(function() {

        finalMessage.scrollIntoView({

            behavior: "smooth",

            block: "center"

        });

    }, 500);
}


// ============================
// FLOATING HEARTS
// ============================

function createHearts() {

    setInterval(function() {

        const heart =
            document.createElement(
                "div"
            );


        heart.className = "heart";


        const hearts = [
            "💖",
            "💕",
            "💗",
            "✨",
            "🌸"
        ];


        heart.innerHTML =
            hearts[
                Math.floor(
                    Math.random() *
                    hearts.length
                )
            ];


        heart.style.left =
            Math.random() *
            100 + "vw";


        heart.style.fontSize =
            (
                Math.random() *
                15 + 18
            ) + "px";


        heart.style.animationDuration =
            (
                Math.random() *
                3 + 4
            ) + "s";


        document.body.appendChild(
            heart
        );


        setTimeout(function() {

            heart.remove();

        }, 7000);


    }, 700);

}