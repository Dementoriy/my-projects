const modalIn = document.querySelector('.modal_in');
const buttonIn = document.querySelector('.sign_in_button');

buttonIn.addEventListener('click', () => {
modalIn.classList.add('active');
});

modalIn.addEventListener('click', (e) => {
    const isModal = e.target.closest('.modal_inner');
    if (!isModal){
    modalIn.classList.remove('active');
    }
});

const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".navbar_panel");

menuBtn.addEventListener("click", () => {
    menu.classList.toggle("is-open");
})

const menuClose = document.querySelector(".close-menu");
menuClose.addEventListener("click", () => {
    menu.classList.toggle("is-open");
})