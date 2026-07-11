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

            const loading = document.getElementById("loadingScreen");
            loading.classList.remove("hidden");
            loading.classList.add("show");

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
    console.log("Loding Started");
    let progress = 0;

    const bar = document.getElementById("loadingProgress");

    const timer = setInterval(() => {

        progress++;

        bar.style.width = progress + "%";

        if (progress >= 100) {

            clearInterval(timer);
            console.log("Loding Complete");

            const loading = document.getElementById("loadingScreen");
            const welcome = document.getElementById("welcomeScreen");

            loading.classList.remove("show");
            loading.classList.add("hidden");

            welcome.classList.remove("hidden");
            welcome.classList.add("show");

        }

    }, 30);

}

// Welcome Button
    // ===== AGE COUNTER =====

function updateAge() {

    const birth = new Date("2008-08-14");
    const today = new Date();

    let years = today.getFullYear() - birth.getFullYear();
    let months = today.getMonth() - birth.getMonth();
    let days = today.getDate() - birth.getDate();

    if (days < 0) {
        months--;
        const lastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        days += lastMonth.getDate();
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    document.getElementById("years").innerText = years;
    document.getElementById("months").innerText = months;
    document.getElementById("days").innerText = days;
}

document.getElementById("startBtn").addEventListener("click", () => {

    document.getElementById("welcomeScreen").classList.remove("show");
    document.getElementById("ageScreen").classList.add("show");

    updateAge();

});

document.getElementById("galleryBtn").addEventListener("click", () => {

    alert("📸 Next Part me Photo Gallery open hogi ❤️");

});
