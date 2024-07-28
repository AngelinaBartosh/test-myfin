const modalBackground = document.getElementsByClassName("modal-background")[0];
const modalClose = document.getElementsByClassName("modal-close")[0];
const buttons = document.querySelectorAll('.btn');
const form = document.getElementById('contact-form');
const creditTypeInput = document.getElementById('credit-type');
const bodyTag = document.getElementsByTagName('body')[0];

buttons.forEach(button => {
    button.addEventListener("click", function () {
        creditTypeInput.value = button.getAttribute('data-credit');
        bodyTag.style.overflow = "hidden";
        modalBackground.style.display = "flex";
    });
});

modalClose.addEventListener("click", function () {
    modalBackground.style.display = "none";
    bodyTag.style.overflow = "auto";
});

modalBackground.addEventListener("click", function (event) {
    if (event.target === modalBackground) {
        modalBackground.style.display = "none";
        bodyTag.style.overflow = "auto";
    }
});

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const contact = document.getElementById('contact').value;
    const creditType = creditTypeInput.value;

    const namePattern = /^[A-Za-zА-Яа-яЁё\s]+$/;
    const phonePattern = /^\+375/;

    if (!namePattern.test(name)) {
        alert('Имя должно содержать только буквы и пробелы.');
        return;
    }

    if (!phonePattern.test(contact)) {
        alert('Телефон должен начинаться с +375.');
        return;
    }

    console.log(`ФИО: ${name}, Телефон для связи: ${contact}, Наименование кредита: ${creditType}`);

    form.reset();
    modalBackground.style.display = 'none';
    bodyTag.style.overflow = 'auto';
});