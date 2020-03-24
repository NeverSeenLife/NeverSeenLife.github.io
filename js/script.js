const hamburger = document.querySelector('.hamburger');
        const menu = document.querySelector('.menu_hamburger');

        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle("open");
            menu.classList.toggle("start");
        });
        menu.addEventListener('click', () => {
            hamburger.classList.toggle("open");
            menu.classList.toggle("start");
        })