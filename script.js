const emailinp = document.querySelector('#emailinp')
const passwordinp = document.querySelector('#passwordinp')
const loginerror = document.querySelector("#loginerror")
const continuebutton = document.querySelector('#continue')

let useremail = 'user@gmail.com'
let userpassword = 'user1!'

continuebutton.addEventListener('click', () => {
    const enteredEmail = emailinp.value.toLowerCase()
    const correctEmail = useremail.toLowerCase()
    if (enteredEmail !== correctEmail || passwordinp.value !== userpassword) {
        loginerror.style.display = 'inline-block'
        passwordinp.style.border = '2px solid rgb(240,97,109)'
    }
    else {
        loginerror.style.display = 'none'
        passwordinp.style.border = ''
        window.location.href = '2fa.html';
    }
})