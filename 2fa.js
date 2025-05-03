const codeerror = document.querySelector("#codeerror")
const continuebutton = document.querySelector('#continue')
const inputs = document.getElementById("inputs");
const allInputs = document.querySelectorAll(".codeinput")




let otpcode = String(Math.floor(Math.random() * 10000)).padStart(4, '0')
console.log(`* OTP Code: ${otpcode}`)

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