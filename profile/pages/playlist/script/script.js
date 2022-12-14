
function speech_to_txt() {
    var SpeechRecognition = webkitSpeechRecognition;
    var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList;
    var grammar = '#JSGF V1.0;'
    var recognition = new SpeechRecognition();
    var speechRecognitionList = new SpeechGrammarList();
    speechRecognitionList.addFromString(grammar, 1);
    recognition.grammars = speechRecognitionList;
    recognition.lang = 'en-US';
    recognition.interimResults = false;
    /////////////
    recognition.onresult = function (event) {
        var last = event.results.length - 1;
        var command = event.results[last][0].transcript;

        // result
        console.log(command);
        document.getElementById("search-bar").value = command;
    };
    recognition.onspeechend = function () {
        recognition.stop();
    };

}
//                        play pause coading
var box = document.getElementById("one");
box.onclick = function ply() {
    var vid = document.getElementById("vid");
    var icon = document.getElementById("play-btn1")
    // console.log(icon.innerHTML);
    if (icon.innerHTML == "play_arrow") {
        vid.play();
        icon.innerHTML = "pause";
        //  box.setAttribute("class","menu_1");
    }
    else {
        vid.pause()
        icon.innerHTML = "play_arrow";
        //  box.setAttribute("class","menu1");
    }
}

function lo_ad() {
    var vid = document.getElementById("vid");
    vid.load();
}

//                       progressbar coading
var video = document.getElementById("vid");
video.ontimeupdate = function () {
    var progress_bar = document.getElementById("progress-bar");
    var progress = document.getElementById("progress");
    var time = (100 / this.duration) * this.currentTime;
    progress.style.width = time + "%";
    video.onended = function () {
        if (video.currentTime == video.duration) {
            var playbtn1 = document.getElementById("play-btn1")
            playbtn1.innerHTML = "play_arrow";
        }
        if (video.currentTime != video.duration) {
            var playbtn1 = document.getElementById("play-btn1")
            playbtn1.innerHTML = "pause";
            video.play();
        }
    }
}
//   fullscreen coading
var fullscreen = document.getElementById("play-bt8");
fullscreen.onclick = function () {
    video.requestFullscreen();
}
var playbtn2 = document.getElementById("play-btn2");

playbtn2.onclick = function () {
    video.currentTime = 0;
    var icon = document.getElementById("play-btn1");
    icon.innerHTML = "play_arrow";
    video.pause();
}



//                    volume coading
var volume = document.getElementById("play-btn4");
var volume_btn = document.getElementById("volume");
var vol_slide = document.getElementById("vol-slider");
volume.onclick = function () {
    if (volume_btn.style.display == "none") {
        volume_btn.style.display = "block";
        vol_slide.oninput = function () {
            console.log(vol_slide.value);
            video.volume = vol_slide.value;
            if (vol_slide.value == 0) {
                volume.innerHTML = "volume_off";
                volume.title = vol_slide.value * 100 + "%";
            }
            else {
                volume.innerHTML = "volume_up";
                volume.title = vol_slide.value * 100 + "%";
            }
        }
    }
    else {

        volume_btn.style.display = "none";
    }
}
//           forward and backword coading
var progress_bar = document.getElementById("progress-bar");
progress_bar.onclick = function (event) {
    // selector.offsetXwidth /height this will returnt he full width of the element same way we can use height also
    // event.offsetX  this will return the current width of the wlwmwnt onclick
    var percent = event.offsetX / this.offsetWidth;
    video.currentTime = percent * video.duration;
}
var download_icon = document.getElementById("play-btn5");
download_icon.onclick = function () {
    var sorc = document.getElementById("sou-rce").src;
    console.log(sorc);
    var a_tag = document.createElement("A");
    a_tag.href = sorc;
    a_tag.download = sorc;
    var dow = document.getElementById("two");
    dow.appendChild(a_tag);
    a_tag.click();
}
var setting_icon = document.getElementById("play-btn8");
setting_icon.onclick = function () {
    var sett_ing = document.getElementById("setting");

    if (sett_ing.style.width == 0) {
        sett_ing.style.border = "2px solid blue"
        // sett_ing.style.display ="block";
        sett_ing.style.width = "220px";

        sett_ing.style.transition = "0.5s";
    }
    else {
        sett_ing.style.border = "0px solid blue";
        // sett_ing.style.display = "none";
        var speed_slider = document.getElementById("speed");
        speed_slider.style.display = "none";
        sett_ing.style.width = "";
        sett_ing.style.transition = "0.5s";
    }

}
var speed = document.getElementById("speed-text");
speed.onclick = function () {
    var speed_slider = document.getElementById("speed");

    if (speed_slider.style.display === "none") {
        speed_slider.style.display = "block";
    }
    else {

        speed_slider.style.display = "none";
    }

    var video_speed = document.getElementById("speed-slider");
    video_speed.oninput = function () {
        console.log(this.value)
        video.playbackRate = this.value;
    }
}
miniplayer_icon = document.getElementById("player");
miniplayer_icon.onclick = function () {
    var big_video=document.getElementById("vid");
    // video.pause();
    large_video_time = video.currentTime;
    var large_video_value = document.getElementById("sou-rce").src;
    document.getElementById("screen").style.display = "none";
    var mini = document.getElementById("mini");
    mini.style.height = "230px";
    mini.style.display = "block";
    mini.style.transition = "0.5s";
    var mini_video_player = document.getElementById("mini-video_player");
    mini_video_player.load();
    document.getElementById("mini-videosource").src = large_video_value;
    var play_icon = document.getElementById("play-btn1");

     if (play_icon.innerHTML == "pause")   
   
// big_video.onplaying=function()  this logic can also be used
     {
       

        document.getElementById("mini-videosource").src = large_video_value;
        mini_video_player.currentTime = large_video_time;
        mini_video_player.play();
    }
    else
    // big_video.onpause=function()
     {  

        document.getElementById("mini-videosource").src = large_video_value;
        mini_video_player.currentTime = large_video_time;
        mini_video_player.pause();
    }



}
function work() {
    var mini = document.getElementById("mini");
    mini.style.display = "none";

}



////////////////////////////////onmouseover is asame as hover

video.onprogress=function()
{
//     video.buffered.length no of time it has buffered
// video.buffered.start(0) forom which second he has stateed downloading
// video.buffered.end(0) upto which point video gas download
var perc=(video.buffered.end(0)/video.duration)*100; //it will return in sec then we will convert into percent
document.getElementById("buffer-bar").style.width=perc+"%";
}

if(video.networkState==3)
{
    video.setAttribute("poster","1.mp4");
    video.onclick=function()
    {
        var upload_btn=document.getElementById("vid-upload");
        upload_btn.click();
        upload_btn.onchange=function(){
            var url=URL.createObjectURL(this.files[0]);  //this .file ot upload_btn is same
            var play_source=document.getElementById("sou-rce");
            play_source.src=url;
            video.load();
            video.play();


        }
    }
}