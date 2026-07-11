let input = "";
const correctPin = "2008";

// Profile click = Hint
document.getElementById("profile").addEventListener("click", () => {
    alert("❤️ Hint\nPassword is 2008");
});

// Number Press
function press(num) {

    if (input.length >= 4) return;

    input += num;

    updateDots();

    if (input.length === 4) {
        setTimeout(unlock, 300);
    }

}

// Backspace
function erase() {

    input = input.slice(0, -1);

    updateDots();

}

// Update Dots
function updateDots() {

    for (let i = 1; i <= 4; i++) {

        document.getElementById("d" + i).classList.remove("active");

    }

    for (let i = 0; i < input.length; i++) {

        document.getElementById("d" + (i + 1)).classList.add("active");

    }

}

// Unlock
function unlock() {

    const error = document.getElementById("error");

    if (input === correctPin) {

        error.style.color = "#6dffb5";
        error.innerHTML = "Unlocked ❤️";

        document.getElementById("music").play().catch(() => {});

        setTimeout(() => {

            document.getElementById("lockScreen").style.display = "none";

            document.getElementById("loadingScreen").classList.remove("hidden");

            startLoading();

        }, 1000);

    } else {

        error.style.color = "#ff7a9f";
        error.innerHTML = "Wrong Password";

        document.querySelector(".lock-card").animate([
            { transform: "translateX(-10px)" },
            { transform: "translateX(10px)" },
            { transform: "translateX(-10px)" },
            { transform: "translateX(10px)" },
            { transform: "translateX(0px)" }
        ], {
            duration: 400
        });

        input = "";

        updateDots();

    }

}

// Loading Animation
function startLoading() {

    let progress = 0;

    const bar = document.getElementById("loadingProgress");

    const timer = setInterval(() => {

        progress++;

        bar.style.width = progress + "%";

        if (progress >= 100) {

            clearInterval(timer);

            document.getElementById("loadingScreen").classList.add("hidden");

            document.getElementById("welcomeScreen").classList.remove("hidden");

        }

    }, 30);

}

// Welcome Button
document.addEventListener("DOMContentLoaded", () => {

    const btn = document.getElementById("startBtn");

    if (btn) {

        btn.addEventListener("click", () => {

            alert("🎉 Next Part me Age Counter aur Gallery open hogi ❤️");

        });

    }

});
