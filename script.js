document.addEventListener("DOMContentLoaded", () => {
    const me = document.getElementById("me");
    const her = document.getElementById("her");
    const herCat = document.getElementById("herCat");
    const message = document.getElementById("message");
    const meowSound = document.getElementById("meow-sound");

    // Play meow sound after a click event
    document.body.addEventListener("click", () => {
        // Fade in characters and move toward each other
        setTimeout(() => {
            me.style.opacity = 1;
            me.style.transform = "translateX(80px)"; /* Increase movement to the right */
        }, 500);

        setTimeout(() => {
            her.style.opacity = 1;
            her.style.transform = "translateX(-80px)"; /* Increase movement to the left */
        }, 1000);

        setTimeout(() => {
            herCat.style.opacity = "1"; // Make the cat visible
            meowSound.play(); // Play meow sound
        }, 2000);

        // Message fades in
        setTimeout(() => {
            message.style.opacity = 1;
        }, 2500);
    });
});
