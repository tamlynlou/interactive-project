let playSong = document.getElementById("playBtn")
let pauseSong = document.getElementById("pauseBtn")


let magic = document.getElementById("surprise")
let audience = document.getElementById("cheer")
let champagne = document.getElementById("popBottle")
let lightParty = document.getElementById("discoLights")
let boom = document.getElementById('boombox')


document.getElementById("volume")


/* AUDIO */

const audioSong = new Audio("audio/YyvkwJAwRs5FzQPWxj9pXNgQPJnGtSGeML8omJKD.mp3" )
const audioPop = new Audio("audio/zapsplat_household_cork_pop_champagne_outside.mp3" )
const audioCrowd = new Audio("audio/smartsound_HUMAN_CROWD_Applause_Small_Audience_Club_Back_01.mp3" )


playSong.onclick = function(){
    audioSong.play()
    audioSong.loop = true
    boom.style.display = 'block';
}

pauseSong.onclick = function(){
    audioSong.pause()
    boom.style.display = 'none';
}

audience.onclick = function () {
    if (audioCrowd.paused) audioCrowd.play()
    else audioCrowd.pause()
    audioCrowd.loop = true
    var xyz = document.getElementById("pinkBtn2");
    if (xyz.src = "img/switch-bottom.png"){
        xyz.src = "img/switch-top.png";
    } else {
        xyz.src = "img/switch-bottom.png";
    }
}


/* Changing Button Displays */

magic.onclick = function() {
    var rbow = document.getElementById('colourful');
    if (rbow.style.display === 'none') {
        rbow.style.display = 'block';
    } else {
        rbow.style.display = "none";
    }
    var xyz = document.getElementById("pinkBtn1");
    if (xyz.src = "img/switch-bottom.png"){
        xyz.src = "img/switch-top.png";
    } else {
        xyz.src = "img/switch-bottom.png";
    }
}

function someFunc () {
    var domp1 = document.getElementById('drinks1');
    if (domp1.style.display === 'none') {
        domp1.style.display = 'block';
        audioPop.play();
    } else {
        domp1.style.display = "none";
    }
    var domp2 = document.getElementById('drinks2');
    if (domp2.style.display === 'none') {
        domp2.style.display = 'block';
        audioPop.play();
    } else {
        domp2.style.display = "none";
    }
    var xyz = document.getElementById("pinkBtn3");
    if (xyz.src = "img/switch-bottom.png"){
        xyz.src = "img/switch-top.png";
    } else {
        xyz.src = "img/switch-bottom.png";
    }
}

/* had a really hard time getting the button picture to change from top to bottom.
This is my attempt. It doesn't switch back */

lightParty.onclick = function () {
    let discoTime = document.getElementById("partyTime");
    let xyz = document.getElementById("pinkBtn4")
    if (discoTime.style.display === "none", xyz.src = "img/switch-bottom.png") {
        discoTime.style.display = "block"
        xyz.src = "img/switch-top.png"
    } else {
        discoTime.style.display = "none";
        xyz.src = "img/switch-bottom.png"
    }
}