var nameError = document.getElementById('name-error');
var phoneError = document.getElementById('phone-error');
var emailError = document.getElementById('email-error');
var messageError = document.getElementById('message-error');
var submitError = document.getElementById('submit-error');
var toggleday = document.querySelector('.fa-sun');
var togglenight = document.querySelector('.fa-moon');
var container = document.querySelector('.container');
var btn = document.querySelector('button');
var popup = document.getElementById('popup');


function closePopup() {
    popup.classList.remove('open-popup');
    location.reload();
}

toggleday.addEventListener("click", () => {
    togglenight.style.display = 'block';
    toggleday.style.display = 'none';
    container.style.background = 'white';
    btn.style.backgroundColor = '#141a34';
    btn.style.color = 'white';

})


togglenight.addEventListener("click", () => {
    togglenight.style.display = 'none';
    toggleday.style.display = 'block';
    container.style.background = '#141a34';
    btn.style.backgroundColor = 'white';
    btn.style.color = '#141a34';

})



function validateName() {

    var name = document.getElementById('contact-name').value;

    if (name.length === 0) {
        nameError.innerHTML = 'Name is required';
        return false;
    }
    if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
        nameError.innerHTML = 'Write full name';
        return false;
    }

    nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;

}


function validatePhone() {
    var phone = document.getElementById('contact-phone').value;

    if (phone.length === 0) {
        phoneError.innerHTML = 'Phone no. is required';
        return false;
    }
    if (phone.length !== 10) {
        phoneError.innerHTML = 'Phone no. should be 10 digits';
        return false;
    }

    if (!phone.match(/^[0-9]{10}$/)) {
        phoneError.innerHTML = 'Phone no. is required';
        return false;
    }

    phoneError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validateEmail() {
    var email = document.getElementById('contact-email').value;

    if (email.length === 0) {
        emailError.innerHTML = 'Email is required';
        return false;
    }

    if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        emailError.innerHTML = 'Email Invalid';
        return false;
    }

    emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}


function validateMessage() {
    var message = document.getElementById('contact-message').value;
    var required = 20;
    var left = required - message.length;

    if (left > 0) {
        messageError.innerHTML = left + ' More characters required';
        return false;
    }

    messageError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

btn.addEventListener('click', (e) => {
    if (!validateName() || !validatePhone() || !validateEmail() || !validateMessage()) {

        submitError.style.display = 'block';
        submitError.innerHTML = 'Please fix error to submit';
        setTimeout(() => {
            submitError.style.display = 'none';
        }, 2500);
        return false;
    } else if(validateName() && validatePhone() && validateEmail() && validateMessage()){
                e.preventDefault();
                popup.classList.add('open-popup');
    }
})
