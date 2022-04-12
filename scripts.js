// <!-- --------------------------БЛОК = This is Velocity------------------------------ -->
const reg = document.querySelector(".banner__buttons-reg");
const log = document.querySelector(".banner__buttons-login");

// <!-- --------------------------БЛОК = ФОРМА РЕГИСТРАЦИИ------------------------------ -->
const regForm = document.querySelector(".register");
const loginForm = document.querySelector(".login");

const regFormOverlay = document.querySelector(".register__overlay");
const loginFormOverlay = document.querySelector(".register__overlay");

// Отвечает за открытие обеих форм
log.addEventListener("click", () => {
    loginForm.style.display = "block";
});

reg.addEventListener("click", () => {
    regForm.style.display = "block";
});


// Отвечает за закрытие обеих форм
loginForm.addEventListener("click", (i) => {
    if (i.target.classList.contains("login__overlay")) {
        loginForm.style.display = "none";
    }
    if (i.target.classList.contains("login__close")) {
        loginForm.style.display = "none";
    }
});

regForm.addEventListener("click", (i) => {
    if (i.target.classList.contains("register__overlay")) {
        regForm.style.display = "none";
    }
    if (i.target.classList.contains("register__close")) {
        regForm.style.display = "none";
    }
});

const box = document.querySelector(".tab__buttons");
const btn1 = document.querySelector(".tab__button1");
const btn2 = document.querySelector(".tab__button2");
const btn3 = document.querySelector(".tab__button3");

const item1 = document.querySelector(".tab__item1");
const item2 = document.querySelector(".tab__item2");
const item3 = document.querySelector(".tab__item3");

// в зависимости от переданного(нажатого) значения кнопки - отразим содержимое полученного элемента, и смену цвета кнопки/пок
box.addEventListener("click", (i) => {
    if (i.target.classList.contains("tab__button1")) {
        item1.style.display = "block";
        item2.style.display = "none";
        item3.style.display = "none";
        btn1.style.backgroundColor = "#2E80B6";
        btn2.style.backgroundColor = "#92a0ad";
        btn3.style.backgroundColor = "#92a0ad";
    } else if (i.target.classList.contains("tab__button2")) {
        item1.style.display = "none";
        item2.style.display = "block";
        item3.style.display = "none";
        btn1.style.backgroundColor = "#92a0ad";
        btn2.style.backgroundColor = "#2E80B6";
        btn3.style.backgroundColor = "#92a0ad";
    } else if (i.target.classList.contains("tab__button3")) {
        item1.style.display = "none";
        item2.style.display = "none";
        item3.style.display = "block";
        btn1.style.backgroundColor = "#92a0ad";
        btn2.style.backgroundColor = "#92a0ad";
        btn3.style.backgroundColor = "#2E80B6";
    }
});