/**
 * Created by muneebashraf on 23/04/2017.
 */
$(document).ready(function(){
    $("#jquery_jplayer_1").jPlayer({
        ready: function () {
            $(this).jPlayer("setMedia", {
                mp3: "audio/14-03-2017.mp3"
            });
        },
        swfPath: "/js/jplayer",
        supplied: "mp3",
        wmode: "window",
        useStateClassSkin: false,
        autoBlur: false,
        smoothPlayBar: true,
        keyEnabled: true,
        remainingDuration: true,
        toggleDuration: true,
        captureDuration:true,
        preload:"meta",
        solution:"html,flash"
    });
});