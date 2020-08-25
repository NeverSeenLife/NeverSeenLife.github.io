//timer
function zegarek() {
  var data = new Date();
  var test;
  var test2;
  var test3;
  var godzina = data.getHours();
  if (godzina < 10) {
    test3 = "0" + godzina;
  } else {
    test3 = godzina;
  }
  var minuta = data.getMinutes();
  if (minuta < 10) {
    test2 = "0" + minuta;
  } else {
    test2 = minuta;
  }
  var sekunda = data.getSeconds();
  if (sekunda < 10) {
    test = "0" + sekunda;
  } else {
    test = sekunda;
  }
  document.querySelector(".timer").innerHTML = test3 + ":" + test2 + ":" + test;
  setTimeout(zegarek, 1000);
}
window.onload = zegarek();

//change actual tab
const ul = document.querySelector('.sideBarNav');
const li = document.querySelectorAll('.navLeft');
const tabs = document.querySelectorAll('.centerBoxBig');
li.forEach(el => {
  el.addEventListener('click', function () {
    ul.querySelector('.active').classList.remove('active');
    el.classList.add('active');
    const tab_value = el.getAttribute("data-li");

    tabs.forEach(function (item) {
      item.style.display = "none";
    });
    document.querySelector('.' + tab_value).style.display = "block";
    document.querySelector('.sideBar').classList.remove('openSideBar');
    document.querySelector('.menuBtn').classList.remove('activeMenuBurger');
    rightSide.classList.remove('openSideBar');
    isHamburherOpen = false;
  });
});


//MENU mobile
const hamburger = document.querySelector('.menuBtn');
const menu = document.querySelector('.sideBar');
const rightSide = document.querySelector('.right_side');
let isHamburherOpen = false;

hamburger.addEventListener('click', () => {
  if (!isHamburherOpen) {
    hamburger.classList.add('activeMenuBurger');
    menu.classList.add('openSideBar');
    rightSide.classList.add('openSideBar');
    isHamburherOpen = true;
  } else {
    hamburger.classList.remove('activeMenuBurger');
    menu.classList.remove('openSideBar');
    rightSide.classList.remove('openSideBar');
    isHamburherOpen = false;
  }
});



//modal logout
const logout = document.querySelector('.right_side');
const logoutModal = document.querySelector('.logout');
logout.addEventListener('click', () =>{
    logoutModal.classList.toggle('show');
});