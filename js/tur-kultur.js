
kultur()
function kultur() {
    

js_audioPlayer(10,"audio/08:02-2017.mp3", "Vært: Aysha Farooqui<br>Emne: Kulturens rolle hos danske muslimer<br>Gæst: Kaoutar Elhamss");
js_audioPlayer(9,"audio/01:03-2017.mp3", "Vært: Johannes<br>Emne: Fordomme og diskrimination<br>Gæst: Alisher Ceran");
js_audioPlayer(8,"audio/15-03-2017.mp3", "Vært: Johannes<br>Emne: Hadsforbrydelser imod muslimer<br>Gæst: Farouk Hassouni");
js_audioPlayer(7,"audio/22-03-2017.mp3", "Vært: Johannes<br>Emne: Danske muslimer med pakistanske rødder<br>Gæst: Arsal Tahseen");
js_audioPlayer(6,"audio/29-03-2017.mp3", "Vært: Johannes<br>Emne: Danske muslimer med somaliske rødder<br>Gæst: Adam & Abdighani");
js_audioPlayer(5,"audio/05-04-2017.mp3", "Vært: Johannes<br>Emne: Danske muslimer med jyske rødder<br>Gæst: Dean Abdullah");
js_audioPlayer(4,"audio/12-04-2017.mp3", "Vært: Johannes<br>Emne: Danske muslimer med albanske rødder<br>Gæst: Lavdrim Elmazi");
js_audioPlayer(3,"audio/19-04-2017.mp3", "Vært: Johannes<br>Emne: Danske muslimer med tyrkiske rødder<br>Gæst: Burhan Bayhan");
js_audioPlayer(2,"audio/26-04-2017.mp3", "<br>Vært: Johannes<br>Emne: Recap af En tur med kultur<br>");
js_audioPlayer(1,"audio/10-05-2017.mp3", "<br>Vært: Johannes<br>Emne: Danske muslimer med afghanske rødder<br>Gæst: Ahmad Masood Popal");
}





function js_audioPlayer(location,file, name) {

    $.ajax({
        url:file,
        type:'HEAD',
        error: function()
        {
            $("#player"+location).remove();
            //file does not exist
        },
        success: function()
        {
            $("#player"+location).append(
                "<div id='jquery_jplayer_"+location+"' class=jp-jplayer'></div>" +
                "<div id='jp_interface_"+location+"' class='jp-audio' role='application' aria-label='media player'>"+
                "<div class='jp-type-single'>"+
                "<div class='jp-gui jp-interface'>"+
                "<div class='jp-controls'>"+
                "<button class='jp-play' role='button' tabindex='0'>play</button>"+
                "</div>"+
                "<div class='jp-progress'>"+
                "<div class='jp-seek-bar'>"+
                "<div class='jp-play-bar'></div>"+
                "</div>"+
                "</div>"+
                "<div class='jp-volume-controls'>"+
                "<button class='jp-mute' role='button' tabindex=0>mute</button>"+
                "<button class='jp-volume-max' role='button' tabindex='0'>max volume</button>"+
                "<div class='jp-volume-bar'>"+
                "<div class='jp-volume-bar-value'></div>"+
                "</div>"+
                "</div>"+
                "<div class='jp-time-holder'>"+
                "<div class='jp-current-time' role='timer' aria-label='time'>&nbsp;</div>"+
                "<div class='jp-duration' role='timer' aria-label='duration'>&nbsp;</div>"+
                "</div>"+
                "</div>"+
                "<div class='jp-no-solution'>"+
                "<span>Update Required</span>"+
                "To play the media you will need to either update your browser to a recent version or update your <a href='http://get.adobe.com/flashplayer/ target=_blank'>Flash plugin</a>"+
                "</div>"+
                "</div>"+
                "</div>");

            $("#jquery_jplayer_" + location).before("<h3>"+name+"</h3>");
            $("#kulturPlayerText"+location).append("<h3>"+name+"</h3>");
            jQuery("#jquery_jplayer_" + location).jPlayer( {
                ready: function () {
                    jQuery(this).jPlayer("setMedia", {
                        mp3: file
                    });
                },
                cssSelectorAncestor: "#jp_interface_" + location,
                swfPath: "js/jplayer",
                wmode: "window",
                useStateClassSkin: true,
                autoBlur: false,
                smoothPlayBar: true,
                keyEnabled: true,
                remainingDuration: true,
                toggleDuration: true,
                preload:"none",
                solution:"flash, html",
                supplied: "mp3"
            });
            //listener for playing the file
$("#jquery_jplayer_" + location).bind($.jPlayer.event.play, function(event) {
           //playerTime grabs the current % location on the file being played.
            //if they're at the beginning it's 0. If they're at the end it's 100. Etc.
             var playerTime = Math.round(event.jPlayer.status.currentPercentAbsolute);
           //grabs the media currently being played. Usefull for when multiple files are played in the player.
            var mediaName = event.jPlayer.status.src;
            ga( 'send', 'event', 'jPlayer', 'play' );
            //track it as an event with category:jPlayer, action:Play, label:Name of the file being played, value:location on file as %
          _gaq.push(['_trackEvent', 'jPlayer', 'Play',mediaName,playerTime]);
});
//listener for a pause click
$("#jquery_jplayer_" + location).bind($.jPlayer.event.pause, function(event) {
           //as above, grabbing the % location and media being played
          var playerTime = Math.round(event.jPlayer.status.currentPercentAbsolute);
          var mediaName = event.jPlayer.status.src;
          ga( 'send', 'event', 'jPlayer', 'pause' );

           //We'll only track the "pause" if the percent value is less than 100. This is because at 100%
         //when the player ends, it will send a pause event with the end event.
          //we don't need that duplication in GA
          if(playerTime<100){
                  //tracking the pause with similar setup to the play event
                  _gaq.push(['_trackEvent', 'jPlayer', 'Pause',mediaName,playerTime]);
          }
});
//listening for the user dragging the seek bar
$("#jquery_jplayer_" + location).bind($.jPlayer.event.seeking, function(event) {
         //as above, grabbing the % location and media being played
         var playerTime = Math.round(event.jPlayer.status.currentPercentAbsolute);
         var mediaName = event.jPlayer.status.src;
         //tracking the seeking action similar to above
         _gaq.push(['_trackEvent', 'jPlayer', 'Seeking',mediaName,playerTime]);
});
//listening for when the user has stopped dragging the seek bar
$("#jquery_jplayer_" + location).bind($.jPlayer.event.seeked, function(event) {
         //as above, grabbing the % location and media being played
         var playerTime = Math.round(event.jPlayer.status.currentPercentAbsolute);
         var mediaName = event.jPlayer.status.src;
         //There's some overlap between the seeked and stopped events. When a user clicks
         // the stop button it actually sends a "seek" to the 0 location. So if the seeked location is 0
         // then we track it as a stop, if it's greater than 0, it was an actual seek.
         if(playerTime>0){
                  //track the seeked event as above
                  _gaq.push(['_trackEvent', 'jPlayer', 'Seeked',mediaName,playerTime]);
         }else{
                  //track the stopped event as above
                  _gaq.push(['_trackEvent', 'jPlayer', 'Stopped',mediaName,playerTime]);
         }
});
//listening for an end ie file completion
$("#jquery_jplayer_" + location).bind($.jPlayer.event.ended, function(event) {
         //as above, grabbing the % location and media being played
         //except when it ends we force the value as 100%, otherwise it shoots back as 0
         var playerTime = 100;
         var mediaName = event.jPlayer.status.src;
         //track the End event as above.
         _gaq.push(['_trackEvent', 'jPlayer', 'Ended',mediaName,playerTime]);
         ga( 'send', 'event', 'jPlayer', 'Ended' );
});

        }
    });
}


