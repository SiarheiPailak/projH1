
function init(){

MAX = 400; // длина полоски воспроизведения  

media = document.getElementById("media");
play = document.getElementById("play");
mute = document.getElementById("mute");
bar = document.getElementById("bar");
progress = document.getElementById("progress");
volume = document.getElementById("volume");

play.addEventListener("click", push);
media.addEventListener("click", push);
media.addEventListener("click", sPush);
mute.addEventListener("click", sound);
bar.addEventListener("click", move)
}

addEventListener("load", init);

function move(e){
    if (!media.ended){
        let mouseX = e.pageX - bar.offsetLeft;
        // console.log(mouseX)
        let newTime = mouseX * media.duration / MAX;
        progress.style.width = `${mouseX}px`
        media.currentTime = newTime;
    }
}

function sound() {
if(media.muted){
    media.muted=false;
    mute.value="Звук";
    mute.style=`background: white;
    color: #000000;`;
    volume.value = .6;
}else{
    media.muted=true;
    mute.value="Вкл.";
    mute.style=`background: crimson;
    color: white;`;
    volume.value =0;}
}

function push(){
    if (!media.paused && !media.ended) {
        media.pause(); 
       play.value = "Воспр.";
       clearInterval(loop);
    } else {
    media.play();
    play.value = "Пауза";
    loop = setInterval(statusBar, 1000);
}
}

function statusBar(){
    if(!media.ended){
        let size = media.currentTime * MAX / media.duration;
        progress.style.width = `${parseInt(size)}px`;
    }else{
        progress.style.width = '0';
        clearInterval(loop);
        play.value = "Воспр.";
    }
}

function sPush() {   
    if (!media.paused && !media.ended) {
   icon.insertAdjacentHTML('afterbegin', '<span class="material-symbols-outlined" id="iPlay">play_circle</span>');
   iPause.remove()
} else {icon.insertAdjacentHTML('afterbegin', '<span class="material-symbols-outlined" id="iPause">pause_circle</span>');
iPlay.remove();
}
}
