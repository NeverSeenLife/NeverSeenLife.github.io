const hamburger = document.querySelector('.menuBtn');
const menu = document.querySelector('.navBar');
let isHamburherOpen = false;

hamburger.addEventListener('click', () =>{
    if(!isHamburherOpen){
        hamburger.classList.add('active');
        menu.classList.add('open');
        isHamburherOpen = true;
    }else{
        hamburger.classList.remove('active');
        menu.classList.remove('open');
        isHamburherOpen = false;
    }
});

const logo = document.querySelector('.logoImg');

logo.addEventListener('click', () =>{
    window.scrollTo(0,document.body.scrollHeight);
});