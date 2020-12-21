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
}




/* Changing Button Displays */

magic.onclick = function() {
    var rbow = document.getElementById('colourful');
    if (rbow.style.display === 'none') {
        rbow.style.display = 'block';
    } else {
        rbow.style.display = "none";
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
}

lightParty.onclick = function() {
    var discoTime = document.getElementById('partyTime');
    if (discoTime.style.display === 'none') {
        discoTime.style.display = 'block';
    } else {
        discoTime.style.display = "none";
    }
}







