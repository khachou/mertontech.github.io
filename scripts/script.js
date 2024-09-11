window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    header.classList.toggle('sticky', window.scrollY > 0);
});

document.querySelector('.menu-toggle').addEventListener('click', () => {
    const nav = document.querySelector('.nav');
    nav.classList.toggle('show');
});
