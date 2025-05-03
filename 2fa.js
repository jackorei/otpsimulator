const codeerror = document.querySelector("#codeerror")
const continuebutton = document.querySelector('#continue')
const inputs = document.getElementById("inputs");
const allInputs = document.querySelectorAll(".codeinput")
const resend = document.querySelector("#resend")



let otpcode = String(Math.floor(Math.random() * 10000)).padStart(4, '0')
console.log(`* OTP Code: ${otpcode}`)

const countdownDisplay = document.getElementById('help');
let timeLeft = 30;
let timer = null;

function startCountdown() {
    timer = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(timer);
            otpcode = null;
            countdownDisplay.textContent = "Code expired. Please request a new one.";
            resend.style.display = 'inline-block'
            allInputs.forEach(allInput => {
                allInput.style.border = ''
            });
            codeerror.style.display = ''
        } else {
            let minutes = String(Math.floor(timeLeft / 60)).padStart(2, '0');
            let seconds = String(timeLeft % 60).padStart(2, '0');
            countdownDisplay.textContent = `Code expires in: ${minutes}:${seconds}`;
            timeLeft--;
        }
    }, 1000);
}

resend.addEventListener('click', () => {
    resend.style.display = ''
    let otpcode = String(Math.floor(Math.random() * 10000)).padStart(4, '0')
    countdownDisplay.textContent = "";
    startCountdown()
})

continuebutton.addEventListener('click', () => {
    const inputCode = Array.from(allInputs).map(input => input.value).join('')
    console.log(`* User attempt: ${inputCode}`)
    if (inputCode !== otpcode) {
        codeerror.style.display = 'inline-block'
        allInputs.forEach(allInput => {
            allInput.style.border = '2px solid rgb(240,97,109)'
            allInput.value = ''
        });

        console.log(`* User attempt failed.`)
    }
    else {
        codeerror.style.display = ''
        allInputs.forEach(allInput => {
            allInput.style.border = ''
        });
        console.log(`* User attempt successful!`)
        window.location.href = "panel.html"
    }
})









inputs.addEventListener("input", function (e) {
    const target = e.target;
    const val = target.value;

    if (isNaN(val)) {
        target.value = "";
        return;
    }

    if (val != "") {
        const next = target.nextElementSibling;
        if (next) {
            next.focus();
        }
    }
});

inputs.addEventListener("keyup", function (e) {
    const target = e.target;
    const key = e.key.toLowerCase();

    if (key == "backspace" || key == "delete") {
        target.value = "";
        const prev = target.previousElementSibling;
        if (prev) {
            prev.focus();
        }
        return;
    }
});

startCountdown()