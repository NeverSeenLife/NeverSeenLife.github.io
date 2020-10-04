const hamburger = document.querySelector('.menuBtn');
const menu = document.querySelector('.navBar');
let isHamburherOpen = false;

hamburger.addEventListener('click', () =>{
    if(!isHamburherOpen){
        hamburger.classList.add('active');

        isHamburherOpen = true;
    }else{
        hamburger.classList.remove('active');

        isHamburherOpen = false;
    }
});

const logo = document.querySelector('.logoImg');

logo.addEventListener('click', () =>{
    window.scrollTo(0,document.body.scrollHeight);
});

window.onscroll = function() {scrollMenu()};

function scrollMenu(){
    var header = document.querySelector(".headerBar"), logo = document.querySelector(".logoImg"), navBtn = document.querySelectorAll(".menuBtn");
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        header.classList.add("headerBarScrolled");
        logo.classList.add("logoImgScrolled");
        navBtn.forEach(item => {
            item.classList.add("nav--BtnScrolled");
        });
      } else {
        header.classList.remove("headerBarScrolled");
        logo.classList.remove("logoImgScrolled");
        navBtn.forEach(item => {
            item.classList.remove("nav--BtnScrolled");
        });
      }
    }