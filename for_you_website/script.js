
// ==========================================
// ELEMENTS
// ==========================================

const bgMusic = document.getElementById("bgMusic");

const musicBtn = document.getElementById("musicBtn");

const openLetterBtn = document.getElementById("openLetterBtn");

const welcomeScreen = document.getElementById("welcomeScreen");

const mainPage = document.getElementById("mainPage");


// ==========================================
// OPEN LETTER AND START MUSIC
// ==========================================

openLetterBtn.addEventListener("click", async () => {

    // Prevent repeated clicks
    openLetterBtn.disabled = true;
    openLetterBtn.textContent = "Opening your letter... ♥";

    try {

        // Start music directly from the user's click
        await bgMusic.play();

        musicBtn.textContent = "♫ Pause Pahintulot";

    } catch (error) {

        console.error("Music playback error:", error);

        musicBtn.textContent = "♫ Play Pahintulot";

    }

    // Reveal the main website
    welcomeScreen.classList.add("hide");

    mainPage.classList.add("show");

    // Show music control
    musicBtn.hidden = false;

});


// ==========================================
// MUSIC PLAY / PAUSE
// ==========================================

musicBtn.addEventListener("click", async () => {

    if (bgMusic.paused) {

        try {

            await bgMusic.play();

            musicBtn.textContent = "♫ Pause Pahintulot";

        } catch (error) {

            console.error("Unable to play music:", error);

            alert("Unable to play music. Please check your audio file.");

        }

    } else {

        bgMusic.pause();

        musicBtn.textContent = "♫ Play Pahintulot";

    }

});


// Keep button synchronized with audio
bgMusic.addEventListener("play", () => {

    musicBtn.textContent = "♫ Pause Pahintulot";

});

bgMusic.addEventListener("pause", () => {

    musicBtn.textContent = "♫ Play Pahintulot";

});


// ==========================================
// RESPONSE MODAL
// ==========================================

const modal = document.getElementById("responseModal");

const modalText = document.getElementById("modalText");

const modalTitle = document.getElementById("modalTitle");


function showModal(title, message) {

    modalTitle.textContent = title;

    modalText.textContent = message;

    modal.classList.add("show");

}


function closeModal() {

    modal.classList.remove("show");

}


// YES RESPONSE
document.getElementById("yesBtn").addEventListener("click", () => {

    showModal(
        "You just made me smile! ❤️",
        "Thank you for giving me the chance. I'm excited to get to know you even more, one step at a time."
    );

});


// NEED TIME RESPONSE
document.getElementById("timeBtn").addEventListener("click", () => {

    showModal(
        "Take your time. 🤍",
        "Of course. Take all the time you need. I respect your feelings, and there's no pressure to answer right away."
    );

});


// CLOSE BUTTONS
document.getElementById("closeModal").addEventListener("click", closeModal);

document.getElementById("okBtn").addEventListener("click", closeModal);


// CLOSE WHEN CLICKING OUTSIDE
modal.addEventListener("click", (event) => {

    if (event.target === modal) {

        closeModal();

    }

});


// ESCAPE KEY
document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

        closeModal();

    }

});