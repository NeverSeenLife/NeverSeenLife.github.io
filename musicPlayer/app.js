const playlist = '{"songs":[' + 
'{"song":"In the end","author":"Linkin Park","songIcon":"albumIntheend.jpg","songSrc":"linkin.mp3" },' +
'{"song":"Fala","author":"Guzior","songIcon":"albumFala.jpg","songSrc":"fala.mp3" },' +
'{"song":"Fala2","author":"Guzior2","songIcon":"indeks.jpg","songSrc":"fala.mp3" }]}';
obj = JSON.parse(playlist);

var audio = new Audio();
audio.src = 'linkin.mp3';
audio.volume = 0.3;
let isMusic = false;
audio.duration = 0;
let total_time = 0;
progress = document.querySelector('.musicTime');
progressBack = document.querySelector('.backgroundTime');

document.querySelector('#btnBack').addEventListener('click', () =>{
    document.querySelector('.player').classList.add('hidden');
});

document.querySelector('#start').addEventListener('click', () =>{
    document.querySelector('.player').classList.remove('hidden');
    isMusic = true;
    document.querySelector('#playPause').src = "pause-circle.svg";
    document.getElementById("songName").innerHTML =
    obj.songs[0].song;
    document.getElementById("songAuthor").innerHTML =
    obj.songs[0].author;
    document.getElementById("iconM").src =
    obj.songs[0].songIcon;
    audio.src = 'linkin.mp3';
    audio.play();
});

document.querySelector('#start2').addEventListener('click', () =>{
    document.querySelector('.player').classList.remove('hidden');
    isMusic = true;
    document.querySelector('#playPause').src = "pause-circle.svg";
    document.getElementById("songName").innerHTML =
    obj.songs[1].song;
    document.getElementById("songAuthor").innerHTML =
    obj.songs[1].author;
    document.getElementById("iconM").src =
    obj.songs[1].songIcon;
    audio.src = 'fala.mp3';
    audio.play();
});

document.querySelector('#skip-forward').addEventListener('click', () =>{
    document.querySelector('.player').classList.remove('hidden');
    isMusic = true;
    document.querySelector('#playPause').src = "pause-circle.svg";
    document.getElementById("songName").innerHTML =
    obj.songs[0].song;
    document.getElementById("songAuthor").innerHTML =
    obj.songs[0].author;
    document.getElementById("iconM").src =
    obj.songs[0].songIcon;
    audio.src = 'linkin.mp3';
    audio.play();
});

document.querySelector('#skip-back').addEventListener('click', () =>{
    document.querySelector('.player').classList.remove('hidden');
    isMusic = true;
    document.querySelector('#playPause').src = "pause-circle.svg";
    document.getElementById("songName").innerHTML =
    obj.songs[1].song;
    document.getElementById("songAuthor").innerHTML =
    obj.songs[1].author;
    document.getElementById("iconM").src =
    obj.songs[1].songIcon;
    audio.src = 'fala.mp3';
    audio.play();
});


document.querySelector('.play').addEventListener('click', () =>{
    if(!isMusic){
        isMusic = true;
        audio.play();
        document.querySelector('#playPause').src = "pause-circle.svg";
    }else{
        audio.pause();
        isMusic = false;
        document.querySelector('#playPause').src = "play-circle.svg";
    }

});

document.body.onkeyup = function(e){
    if(e.keyCode == 32){
        if(!isMusic){
            isMusic = true;
            audio.play();
            document.querySelector('#playPause').src = "pause-circle.svg";
        }else{
            audio.pause();
            isMusic = false;
            document.querySelector('#playPause').src = "play-circle.svg";
        }
    }
}


audio.addEventListener("timeupdate", function() {
    var duration = document.getElementById('timeDuration');
    var sec = parseInt(audio.currentTime % 60);
    if(sec < 10){ seconds = "0" + sec;}else{ seconds = sec;}
    var min = parseInt((audio.currentTime / 60) % 60);
     duration.textContent = min + ':' + seconds ;
}, false);

audio.addEventListener("timeupdate", function() {
    var sec = 0;
    var min = 0;
    var dur = document.querySelector('.duration');
    sec = parseInt(audio.duration % 60);
    if(sec < 10){ seconds = "0" + sec;}else{ seconds = sec;}
    min = parseInt((audio.duration/ 60) % 60);
    dur.textContent = min + ':' + seconds ;
}, false);

audio.addEventListener("timeupdate", function() {
    total_time = audio.duration;
    progress.max = total_time;
    progress.value = audio.currentTime;
    progressBack.value = audio.currentTime;
    progressBack.max = audio.duration;
}, false);

audio.addEventListener("ended", function() {
    audio.pause();
    isMusic = false;
    audio.currentTime = 0;
    progress.value = 0;
    document.querySelector('#playPause').src ="play-circle.svg";
}, false);


document.querySelector('.musicTime').addEventListener('change', () =>{
    audio.currentTime = progress.value;
});

document.querySelector('#volume').addEventListener("mousemove", function(e) {
    audio.volume = 0.3;
    audio.volume = e.currentTarget.value / 100;

}, false);

let isMuted = false;

document.querySelector('#isMuted').addEventListener('click', () =>{
    if(!isMuted){
        document.querySelector('#isMuted').src = "mute.svg";
        isMuted = true;
        audio.muted = true;
    }else{
        document.querySelector('#isMuted').src = "vol.svg";
        isMuted = false;
        audio.muted = false;
    }

});


isLooped = false;

document.querySelector('#loop').addEventListener('click', () =>{
    if(!isLooped){
        audio.loop = true;
        isLooped = true;
        document.querySelector('.loop').classList.add('active');
    }else{
        audio.loop = false;
        isLooped = false;
        document.querySelector('.loop').classList.remove('active');
    }
});


