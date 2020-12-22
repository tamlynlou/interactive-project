let playSong = document.getElementById("playBtn")
let pauseSong = document.getElementById("pauseBtn")
let magic = document.getElementById("surprise")
let audience = document.getElementById("cheer")
let champagne = document.getElementById("popBottle")
let lightParty = document.getElementById("discoLights")
let boom = document.getElementById('boombox')
let domp1 = document.getElementById('drinks1')
let domp2 = document.getElementById('drinks2')
let pB3 = document.getElementById("pinkBtn3")

const audioSong = new Audio("audio/YyvkwJAwRs5FzQPWxj9pXNgQPJnGtSGeML8omJKD.mp3" )
const audioPop = new Audio("audio/zapsplat_household_cork_pop_champagne_outside.mp3" )
const audioCrowd = new Audio("audio/smartsound_HUMAN_CROWD_Applause_Small_Audience_Club_Back_01.mp3" )



/* ----------- AUDIO CONTROLS ----------- */

playSong.onclick = function(){
    audioSong.play()
    audioSong.loop = true
    boom.style.display = 'block';
    document.getElementById("audioBtnPlay").src="img/play-on.png";
    document.getElementById("audioBtnPause").src="img/stop.png";
}

pauseSong.onclick = function(){
    audioSong.pause()
    boom.style.display = 'none';
    document.getElementById("audioBtnPause").src="img/stop-on.png";
    document.getElementById("audioBtnPlay").src="img/play.png";
}

let volume = document.querySelector("#volumeSlider")
volume.addEventListener("change", function(e) {
audioSong.volume = e.currentTarget.value / 100
})



/* ----------- SWITCHES ----------- */

/* surprise */
magic.onclick = function() {

    let rbow = document.getElementById('colourful');
    let pB1 = document.getElementById("pinkBtn1");
    
    if (rbow.style.display === 'none') {
        rbow.style.display = 'block';
        pB1.src = "img/switch-top.png";
    } else {
        rbow.style.display = "none";
        pB1.src = "img/switch-bottom.png";
    }
}

/* cheer */
audience.onclick = function () {
    let pB2 = document.getElementById("pinkBtn2")

    if (audioCrowd.paused) {
        audioCrowd.play(pB2.src = "img/switch-top.png");
    } else { audioCrowd.pause(pB2.src = "img/switch-bottom.png")
        }
    audioCrowd.loop = true
}

/* pop bottle */
champagne.onclick = function () {
    domp1.style.display = "block"
    domp2.style.display = "block"
    pB3.src = "img/switch-top.png"
    audioPop.play()
}
function resetFunction () {
    domp1.style.display = "none"
    domp2.style.display = "none"
    pB3.src = "img/switch-bottom.png"
}

/* lights */
lightParty.onclick = function () {
    let discoTime = document.getElementById("partyTime")
    let pB4 = document.getElementById("pinkBtn4")

    if (discoTime.style.display === "none") {
        discoTime.style.display = "block"
        pB4.src = "img/switch-top.png"
    } else {
        discoTime.style.display = "none"
        pB4.src = "img/switch-bottom.png"
    }
}
