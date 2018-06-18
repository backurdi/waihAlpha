

apropos()
function apropos() {

addPodcasts("03:02-2017.mp3","Vært: Zainab Nasrati<br>Emne: Empati<br>Gæst: Ali Nicolaisen");
addPodcasts("10:02-2017.mp3", "Vært: Lubna Ahmed<br>Emne: Tonen i den offentlige debat<br>Gæst: Digter og debattør, Özcan Ajrulovski");
addPodcasts("17:02-2017.mp3",  "Vært:Zainab Nasrati<br>Emne: Mindfulnessog den muslimske bøn <br>Gæst: Sprogpsykolog og mentor Hamida Naji");
addPodcasts("24:02-2017.mp3",  "Vært: Aysha Farooqui<br>Emne: Uddannelsespres <br>Gæst: Jeannett Skov");
addPodcasts("03-03-201.mp3", "Vært: Zainab Nasrati<br>Emne: Drømme for Danmark...<br>Gæster: Caroline Ousager & Osama Samsam ");
addPodcasts("10-03-2017.mp3", "Værter: Aysha Farooqui og Elias Rama<br>Emne: Nike's hijab, inklusion eller kapitalisering?<br>Gæster: Zarife Øzcan, Karima Doui og Laila Kristensen Rashid");
addPodcasts("17-03-2017.mp3", "Vært: Elias Rama<br>Emne: Old School vs. New School<br>Gæste: Imran Shah");
addPodcasts("24-03-2017.mp3",  "Vært: Zainab Nasrati<br>Emne: Studiets ruter<br>Gæste: Samya Adnan & Mikkel Zacho Storm");
addPodcasts("31-03-2017.mp3",  "Vært: Aysha Farooqui<br>Emne: Kropsidealer, skønhed og selvtillid blandt danske unge<br>Gæster:  Amina Djondjorova & Arshia Arshad");
addPodcasts("14-04-2017.mp3",  "Vært: Aysha Farooqui<br>Emne: Mediernes muslim, SKAM og brdr. Prices halalkød<br>Gæster: Elias Rama og Sara H ");
addPodcasts("21-04-2017.mp3",  "Vært: Elias Rama<br>Emne: fitnesskultur & dens sociale følger <br>Gæster:  Zaid Nasrati ");
addPodcasts("28-04-2017.mp3",  "Vært: Zainab Nasrati<br>Emne: Somalisk sundhedsforbund<br>Gæster:  Hafsa Halane & Adar Mohamed Hassan");
addPodcasts("05-05-2017.mp3",  "Vært: Zainab Nasrati<br>Emne: En kulturrig brudestylist<br>Gæster:  Iman Rose");
}
js_audioPlayer(13,"audio/03:02-2017.mp3","Vært: Zainab Nasrati<br>Emne: Empati<br>Gæst: Ali Nicolaisen");
js_audioPlayer(12,"audio/10:02-2017.mp3", "Vært: Lubna Ahmed<br>Emne: Tonen i den offentlige debat<br>Gæst: Digter og debattør, Özcan Ajrulovski");
js_audioPlayer(11,"audio/17:02-2017.mp3",  "Vært:Zainab Nasrati<br>Emne: Mindfulnessog den muslimske bøn <br>Gæst: Sprogpsykolog og mentor Hamida Naji");
js_audioPlayer(10,"audio/24:02-2017.mp3",  "Vært: Aysha Farooqui<br>Emne: Uddannelsespres <br>Gæst: Jeannett Skov");
js_audioPlayer(9,"audio/03-03-201.mp3", "Vært: Zainab Nasrati<br>Emne: Drømme for Danmark...<br>Gæster: Caroline Ousager & Osama Samsam ");
js_audioPlayer(8,"audio/10-03-2017.mp3", "Værter: Aysha Farooqui og Elias Rama<br>Emne: Nike's hijab, inklusion eller kapitalisering?<br>Gæster: Zarife Øzcan, Karima Doui og Laila Kristensen Rashid");
js_audioPlayer(7,"audio/17-03-2017.mp3", "Vært: Elias Rama<br>Emne: Old School vs. New School<br>Gæste: Imran Shah");
js_audioPlayer(6,"audio/24-03-2017.mp3",  "Vært: Zainab Nasrati<br>Emne: Studiets ruter<br>Gæste: Samya Adnan & Mikkel Zacho Storm");
js_audioPlayer(5,"audio/31-03-2017.mp3",  "Vært: Aysha Farooqui<br>Emne: Kropsidealer, skønhed og selvtillid blandt danske unge<br>Gæster:  Amina Djondjorova & Arshia Arshad");
js_audioPlayer(4,"audio/14-04-2017.mp3",  "Vært: Aysha Farooqui<br>Emne: Mediernes muslim, SKAM og brdr. Prices halalkød<br>Gæster: Elias Rama og Sara H ");
js_audioPlayer(3,"audio/21-04-2017.mp3",  "Vært: Elias Rama<br>Emne: fitnesskultur & dens sociale følger <br>Gæster:  Zaid Nasrati ");
js_audioPlayer(2,"audio/28-04-2017.mp3",  "Vært: Zainab Nasrati<br>Emne: Somalisk sundhedsforbund<br>Gæster:  Hafsa Halane & Adar Mohamed Hassan");
js_audioPlayer(1,"audio/05-05-2017.mp3",  "Vært: Zainab Nasrati<br>Emne: En kulturrig brudestylist<br>Gæster:  Iman Rose");



function addPodcasts(file, name) {

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
            $("#aproposPlayerText"+location).append("<h3>"+name+"</h3>");
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


