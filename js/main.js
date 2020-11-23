//................................................................................................................
//.NNNN....NNN..EEEEEEEEEE.EVV......VVV.EEEEEEEEEE..RRRRRRRRR......SSSSSS....EEEEEEEEEE..EEEEEEEEEE..NNNN....NNN..
//.NNNN....NNN..EEEEEEEEEE.EVVV....VVVV.EEEEEEEEEE..RRRRRRRRRRR..SSSSSSSSS...EEEEEEEEEE..EEEEEEEEEE..NNNN....NNN..
//.NNNNN...NNN..EEEEEEEEEE.EVVV....VVVV.EEEEEEEEEE..RRRRRRRRRRR..SSSSSSSSSS..EEEEEEEEEE..EEEEEEEEEE..NNNNN...NNN..
//.NNNNN...NNN..EEE.........VVV....VVV..EEE.........RRR.....RRR..SSS...SSSS..EEE.........EEE.........NNNNN...NNN..
//.NNNNNN..NNN..EEE.........VVVV..VVVV..EEE.........RRR.....RRR..SSSS........EEE.........EEE.........NNNNNN..NNN..
//.NNNNNNN.NNN..EEEEEEEEEE..VVVV..VVV...EEEEEEEEEE..RRRRRRRRRRR..SSSSSSS.....EEEEEEEEEE..EEEEEEEEEE..NNNNNNN.NNN..
//.NNN.NNN.NNN..EEEEEEEEEE...VVV..VVV...EEEEEEEEEE..RRRRRRRRRR....SSSSSSSS...EEEEEEEEEE..EEEEEEEEEE..NNN.NNN.NNN..
//.NNN.NNNNNNN..EEEEEEEEEE...VVVVVVVV...EEEEEEEEEE..RRRRRRRR........SSSSSSS..EEEEEEEEEE..EEEEEEEEEE..NNN.NNNNNNN..
//.NNN..NNNNNN..EEE..........VVVVVVV....EEE.........RRR..RRRR...........SSSS.EEE.........EEE.........NNN..NNNNNN..
//.NNN..NNNNNN..EEE...........VVVVVV....EEE.........RRR...RRRR..RSSS....SSSS.EEE.........EEE.........NNN..NNNNNN..
//.NNN...NNNNN..EEEEEEEEEEE...VVVVVV....EEEEEEEEEEE.RRR....RRRR..SSSSSSSSSS..EEEEEEEEEEE.EEEEEEEEEEE.NNN...NNNNN..
//.NNN....NNNN..EEEEEEEEEEE...VVVVV.....EEEEEEEEEEE.RRR....RRRR..SSSSSSSSSS..EEEEEEEEEEE.EEEEEEEEEEE.NNN....NNNN..
//.NNN....NNNN..EEEEEEEEEEE....VVVV.....EEEEEEEEEEE.RRR.....RRRR...SSSSSS....EEEEEEEEEEE.EEEEEEEEEEE.NNN....NNNN..
//................................................................................................................

// ********** HAMBURHER BUTTON ******************
const menuBtn = document.querySelector('.hamburger_container');
const menu = document.querySelector('.modal_menu');
const btns = document.querySelectorAll('.nav_a');
const burger = document.querySelector('.nav');
let root = document.documentElement;
let isOpen = false;

function modal(){
    
    if(!isOpen){
        menu.classList.add('active');
        menuBtn.classList.add('active');
        //root.style.setProperty('--hamburger', "#000");
        isOpen = true;
        document.querySelector('.modal_exit').style.display = "block";
        burger.classList.add('active');
    }else{
        menu.classList.remove('active');
        menuBtn.classList.remove('active');
        //setTimeout( function() {root.style.setProperty('--hamburger', "#fff");}, 280);
        isOpen = false;
        document.querySelector('.modal_exit').style.display = "none";
        burger.classList.remove('active');
    }
}

menuBtn.addEventListener('click', modal, false);
btns.forEach(el => {
    el.addEventListener('click', modal, false);
});


document.querySelector('.modal_exit').addEventListener('click', ()=>{
    menu.classList.remove('active');
    document.querySelector('.modal_exit').style.display = "none";
    menuBtn.classList.remove('active');
    isOpen = false;
    burger.classList.remove('active');
});

// ********** SMOOTH SCROLL TO ELEMENT WITHOUT LINK ******************
function scrollSmoothTo(elementId) {
    var element = document.getElementById(elementId);
    element.scrollIntoView({ block: 'start',  behavior: 'smooth' });
}

/*
var language = {
    en: {
        'Aboutme': 'About me',
        'AboutDesc': 'Placeholder, tutaj będzie jakiś ładny opis bardzo ładny',
        'Projects': ' Projects',
        'Project1': 'Application for video conferencing for web & mobile with 100% encryption',
        'Project2': 'Application for browsing work hours of your employees ',
        'Project3': 'Website for Metin2 players who want to trade characters and items',
        'btnCheck': 'Check it',
        'Contact': 'Contact',
        'ContactMe': 'Contact me',
        'Message': 'Message',
        'DirectLink': 'Direct link',
        'Home': 'Home',
        'About': 'About',
        'Projects': 'Projects'
    },

    pl: {
        'Aboutme': 'O mnie',
        'AboutDesc': 'Placeholder, tutaj będzie jakiś ładny opis bardzo ładny',
        'Projects': ' Projects',
        'Project1': 'Application for video conferencing for web & mobile with 100% encryption',
        'Project2': 'Application for browsing work hours of your employees ',
        'Project3': 'Website for Metin2 players who want to trade characters and items',
        'btnCheck': 'Check it',
        'Contact': 'Contact',
        'ContactMe': 'Contact me',
        'Message': 'Message',
        'DirectLink': 'Direct link',
        'Home': 'Home',
        'About': 'About',
        'Projects': 'Projects'
    }

}
var json = '{"name": "Peter", "age": 22, "country": "United States"}';
var obj = JSON.parse(language);


let lang = localStorage.getItem('lang');

const langOn = () => {
    document.querySelector('about_heading').textContent = obj.en.Aboutme;
    localStorage.setItem('lang', 'on');
};

const langOff = () => {

    localStorage.setItem('lang', null);
};

if (langOn === 'on') {
    langOn();
}

*/