const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.main_navigation');

        hamburger.addEventListener('click', () => {
            nav.classList.toggle("active");
            hamburger.classList.toggle("open");
        });
