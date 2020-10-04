const hamburger = document.querySelector('.menuBtn');
const menu = document.querySelector('.nav');
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

window.onscroll = function() {
    scrollMenu();
    scrollArrow();
};

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

function scrollArrow(){
    var arrow = document.querySelector(".arrow-up");
    if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
        arrow.classList.add('hideArrow');
        arrow.classList.remove('opac');
    }else{
        arrow.classList.add('opac');
        arrow.classList.remove('hideArrow');
    }
}
