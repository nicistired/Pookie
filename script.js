document.addEventListener("DOMContentLoaded", () => {
    const yesButton = document.getElementById("yesButton");
    const noButton = document.getElementById("noButton");
    const message = document.getElementById("message");
    const noGif = document.getElementById("noGif");
    const questionText = document.getElementById("questionText");
    const me = document.getElementById("me");
    const her = document.getElementById("her");
    const herCat = document.getElementById("herCat");

    const prompts = [
        "Are you sure?",
        "Pookie please 🥹",
        "Last Chance...",
        "You're breaking my heart 💔",
        "You have no choice. Accept your fate "
    ];

    const buttonTexts = [
        { no: "Yes, I'm sure", yes: "No, I'm not sure" },
        { yes: "Ugh fine", no: "Nope" },
        { yes: "Okay okay", no: "Still no" },
        { yes: "Alright, I'll say yes", no: "Nah" },
        { yes: "I give up, yes", no: "NEVER!" },
    ];

    const gifs = [
        "images/funny_no1.gif",  // gif 1
        "images/funny_no2.gif",  // gif 2
        "images/funny_no3.gif",  // gif 3
        "images/funny_no4.gif",  // gif 4
        "images/funny_no5.gif",  // gif 5
        "images/funny_no6.gif"   // gif 6
    ];

    let noCount = 0;
    let gifIndex = 0;

    // Handle Yes button click
    yesButton.addEventListener("click", () => {
        message.style.opacity = 1;
        message.textContent = "YAY! Happy Valentine's Day!";

        // Hide the No and Yes buttons
        noButton.style.display = "none";
        yesButton.style.display = "none";

        // Hide the gif and question text
        noGif.style.display = "none";
        questionText.style.display = "none";

        me.style.display = "block";
        her.style.display = "block";
        herCat.style.display = "block";
        
        // Ensure the image container is visible
        const imageContainer = document.getElementById("imageContainer");
        imageContainer.style.display = "flex";  // Make sure container is visible
        imageContainer.style.opacity = 1; 
    });

    // Floating hearts creation
    const heartsContainer = document.querySelector(".hearts-container");
    function createHeart() {
        const heart = document.createElement("img");
        heart.src = "images/heart.png"; // Ensure this path is correct
        heart.classList.add("heart");
        heartsContainer.appendChild(heart);

        const randomLeft = Math.random() * 100; // Random position
        const randomSize = Math.random() * 10 + 10; // Random size
        const randomDuration = Math.random() * 3 + 2; // Random speed

        heart.style.left = `${randomLeft}vw`;
        heart.style.width = `${randomSize}px`;
        heart.style.height = `${randomSize}px`;
        heart.style.animationDuration = `${randomDuration}s`;

        setTimeout(() => {
            heart.remove(); // Remove heart after animation
        }, randomDuration * 1000);
    }

    setInterval(createHeart, 500); // Generate hearts every 0.5 seconds

    // Handle No button click
    noButton.addEventListener("click", () => {
        console.log("No Button Clicked");

        // Set opacity immediately on No button click
        message.style.opacity = 1;
        console.log("Message Opacity: ", message.style.opacity); // Log opacity

        // Update the gif source
        noGif.style.backgroundImage = `url(${gifs[gifIndex]})`;
        gifIndex = (gifIndex + 1) % gifs.length;

        // Change the prompt and button text
        if (noCount < prompts.length) {
            message.textContent = prompts[noCount];
            const currentButtonText = buttonTexts[noCount];
            noButton.textContent = currentButtonText.no;
            yesButton.textContent = currentButtonText.yes;
            noCount++;
        } else {
            message.textContent = "You forced my hand. I’m hacking your heart ❤️";
            noButton.style.display = "none"; // Hide No button at the end
        }

        // Log the updated message text
        console.log("Updated Message Text: ", message.textContent);

        // Show the gif and message
        noGif.style.display = "block"; // Show gif
        questionText.style.display = "none"; // Hide question text
    });
});
