/**
 * Created by muneebashraf on 26/04/2017.
 */

var upToDate         = {show_name: "upToDate"         ,div:"<div class='col-md-6 col-sm-6 wp3 senestePodcasts upToDate'>" +"<div class='overlay-effect effects'>" +"<div class='img col-md-4'>" +"<div class='overlay'><i class='ion-ios-play-outline'></i></div>" +"<img src='img/myter.jpg'   alt='Up to date Radio WAIH'>" +"</div>" +"</div>"         +"<p class='PodcastHeader col-md-8'>Up to date</p>"         +"<div class='playerContainer'><p>{$name}</p><p>{$row['show_host']}</p><p>Gæst: {$row['show_guest']}</p><audio controls><source src='audio/test.mp3' type='audio/mpeg'></audio></div>" +"</div>"}
var toppenAfIsbjerget= {show_name: "toppenAfIsbjerget",div:"<div class='col-md-6 col-sm-6 wp3 senestePodcasts toppenAfIsbjerget'>"  +"<div class='overlay-effect effects'>" +"<div class='img col-md-4'>" +"<div class='overlay'><i class='ion-ios-play-outline'></i></div>" +"<img src='img/toppen.JPG'  alt='Toppen af isbjerget Radio WAIH'>" +"</div>"+"</div>" +"<p class='PodcastHeader col-md-8'>Toppen af Isbjerget</p>"+"<div class='playerContainer'><p>{$name}</p><p>{$row['show_host']}</p><p>Gæst: {$row['show_guest']}</p><audio controls><source src='audio/test.mp3' type='audio/mpeg'></audio></div>" +"</div>"}
var turMedKultur     = {show_name: "turMedKultur"     ,div:"<div class='col-md-6 col-sm-6 wp3 senestePodcasts turMedKultur'>"+"<div class='overlay-effect effects'>" +"<div class='img col-md-4'>" +"<div class='overlay'><i class='ion-ios-play-outline'></i></div>" +"<img src='img/kultur.jpg'  alt='Tur med kultur Radio WAIH'>" + "</div>"+"</div>"     +"<p class='PodcastHeader col-md-8'>En tur med kultur</p>"  +"<div class='playerContainer'><p>{$name}</p><p>{$row['show_host']}</p><p>Gæst: {$row['show_guest']}</p><audio controls><source src='audio/test.mp3' type='audio/mpeg'></audio></div>" +"</div>"}
var samfundsdebatten = {show_name: "samfundsdebatten" ,div:"<div class='col-md-6 col-sm-6 wp3 senestePodcasts samfundsdebatten'>"  +"<div class='overlay-effect effects'>" +"<div class='img col-md-4'>" +"<div class='overlay'><i class='ion-ios-play-outline'></i></div>" +"<img src='img/samfund.jpg' alt='Portfolio Item'>"+"</div>" +"</div>"                 +"<p class='PodcastHeader col-md-8'>Samfundsdebatten</p>"   +"<div class='playerContainer'><p>{$name}</p><p>{$row['show_host']}</p><p>Gæst: {$row['show_guest']}</p><audio controls><source src='audio/test.mp3' type='audio/mpeg'></audio></div>" +"</div>"}
var apropos          = {show_name: "apropos"          ,div:"<div class='col-md-6 col-sm-6 wp3 senestePodcasts apropos'>"  +"<div class='overlay-effect effects'>" +"<div class='img col-md-4'>" +"<div class='overlay'><i class='ion-ios-play-outline'></i></div>" +"<img src='img/apropos.jpg' alt='Portfolio Item'>"+"</div>"+"</div>"                  +"<p class='PodcastHeader col-md-8'>Apropos</p>"            +"<div class='playerContainer'><p>{$name}</p><p>{$row['show_host']}</p><p>Gæst: {$row['show_guest']}</p><audio controls><source src='audio/test.mp3' type='audio/mpeg'></audio></div>" +"</div>"}
var aktivister       = {show_name: "aktivister"       ,div:"<div class='col-md-6 col-sm-6 wp3 senestePodcasts aktivister'>"     +"<div class='overlay-effect effects'>" +"<div class='img col-md-4'>" +"<div class='overlay'><i class='ion-ios-play-outline'></i></div>" +"<img src='img/aktivister.jpg'    alt='Tabu Radio WAIH'>" +"</div>" +"</div>"               +"<p class='PodcastHeader col-md-8'>Tabu</p>"               +"<div class='playerContainer'><p>{$name}</p><p>{$row['show_host']}</p><p>Gæst: {$row['show_guest']}</p><audio controls><source src='audio/test.mp3' type='audio/mpeg'></audio></div>" +"</div>"}
var enFamilieTing          = {show_name: "enFamilieTing"    ,div:"<div class='col-md-6 col-sm-6 wp3 senestePodcasts enFamilieTing'>"  +"<div class='overlay-effect effects'>" +"<div class='img col-md-4'>" +"<div class='overlay'><i class='ion-ios-play-outline'></i></div>" +"<img src='img/familie.jpg' alt='En familie ting... Radio WAIH'>" +"</div>" +"</div> "+"<p class='PodcastHeader col-md-8'>En familie ting...</p>" +"<div class='playerContainer'><p>{$name}</p><p>{$row['show_host']}</p><p>Gæst: {$row['show_guest']}</p><audio controls><source src='audio/test.mp3' type='audio/mpeg'></audio></div>" +"</div>"}

latestPodcasts();
setInterval(checkHalfOur, 1000*60);
function checkHalfOur() {
var mins = new Date().getMinutes();

if (mins < 10){
    mins = '0' + new Date().getMinutes()
} else {
    mins = new Date().getMinutes();
}

if(mins === "30"){
    latestPodcasts();
}

}

function latestPodcasts() {

    var time = new Date();
    var hh = time.getHours();
    var mm = time.getMinutes();

    if(hh < 10){
        hh = '0' + time.getHours();
    } else{
        hh = time.getHours();
    }

    if(mm < 10){
        mm = '0' + time.getMinutes();
    } else {
        mm = time.getMinutes();
    }

    time = hh + ':' + mm;
    var dayOftheWeek =  new Date().getDay();

    switch (dayOftheWeek) {
        case 1: if(time >= '19:10'){
            monday()
        } else {sunday()}
            break;
        case 2: if(time >= '19:10'){
            tuesday()
        } else {monday()}
            break;
        case 3: if(time >= '19:10'){
            wednesday()
        } else {tuesday()}
            break;
        case 4: if(time >= '19:10'){
            thursday()
        } else {wednesday()}
            break;
        case 5: if(time >= '19:10'){
            friday()
        } else {thursday()}
            break;
        case 6: if(time >= '19:10'){
            saturday()
        } else {friday()}
            break;
        case 0: if(time >= '19:10'){
            sunday()
        } else {saturday()}
            break;
    }
    function monday() {
        $(".latestPodcasts1").empty();
        $(".latestPodcasts1").append(
            upToDate.div + enFamilieTing.div

        );
        $(".latestPodcasts2").empty();
        $(".latestPodcasts2").append(
            aktivister.div + apropos.div
        );
        getText(upToDate,enFamilieTing,aktivister,apropos);
    }
    
    function tuesday() {
        $(".latestPodcasts1").empty();
        $(".latestPodcasts1").append(
            toppenAfIsbjerget.div + upToDate.div

        );
        $(".latestPodcasts2").empty();
        $(".latestPodcasts2").append(
            enFamilieTing.div + aktivister.div
        );
        getText(toppenAfIsbjerget,upToDate,enFamilieTing,aktivister);
    }
    
    function wednesday() {
        $(".latestPodcasts1").empty();
        $(".latestPodcasts1").append(
           turMedKultur.div + toppenAfIsbjerget.div

        );
        $(".latestPodcasts2").empty();
        $(".latestPodcasts2").append(
           upToDate.div + enFamilieTing.div
        );
        getText(turMedKultur,toppenAfIsbjerget,upToDate,enFamilieTing);
    }

    function thursday() {
        $(".latestPodcasts1").empty();
        $(".latestPodcasts1").append(
            samfundsdebatten.div + turMedKultur.div

        );
        $(".latestPodcasts2").empty();
        $(".latestPodcasts2").append(
            toppenAfIsbjerget.div + upToDate.div
        );
        getText(samfundsdebatten,turMedKultur,toppenAfIsbjerget,upToDate);
    }

    function friday() {
        $(".latestPodcasts1").empty();
        $(".latestPodcasts1").append(
            apropos.div + samfundsdebatten.div

        );
        $(".latestPodcasts2").empty();
        $(".latestPodcasts2").append(
            turMedKultur.div + toppenAfIsbjerget.div
        );
        getText(apropos,samfundsdebatten,turMedKultur,toppenAfIsbjerget);
    }

    function saturday() {
        $(".latestPodcasts1").empty();
        $(".latestPodcasts1").append(
            aktivister.div + apropos.div

        );
        $(".latestPodcasts2").empty();
        $(".latestPodcasts2").append(
            samfundsdebatten.div + turMedKultur.div
        );
        getText(aktivister,apropos,samfundsdebatten,turMedKultur);
    }

    function sunday() {
        $(".latestPodcasts1").empty();
        $(".latestPodcasts1").append(
            enFamilieTing.div + aktivister.div
        );
        $(".latestPodcasts2").empty();
        $(".latestPodcasts2").append(
            apropos.div + samfundsdebatten.div
        );
        getText(enFamilieTing,aktivister,apropos,samfundsdebatten);
    }

}

$(document).one('click','.upToDate .overlay, .upToDate i',function () {
    $("div.upToDate > div.playerContainer > div.plyr ").addClass('animated bounceInLeft');
        $(document).on('click','.upToDate .overlay, .upToDate i',function () {
            $("div.upToDate > div.playerContainer > div.plyr ").toggleClass('bounceInLeft hinge');
})});


$(document).one('click','.toppenAfIsbjerget .overlay, .toppenAfIsbjerget i',function () {
    $("div.toppenAfIsbjerget > div.playerContainer > div.plyr ").addClass('animated bounceInLeft');
        $(document).on('click','.toppenAfIsbjerget .overlay, .toppenAfIsbjerget i',function () {
            $("div.toppenAfIsbjerget > div.playerContainer > div.plyr ").toggleClass('bounceInLeft hinge');
})});


$(document).one('click','.turMedKultur .overlay, .turMedKultur i',function () {
    $("div.turMedKultur > div.playerContainer > div.plyr ").addClass('animated bounceInLeft');
        $(document).on('click','.turMedKultur .overlay, .turMedKultur i',function () {
            $("div.turMedKultur > div.playerContainer > div.plyr ").toggleClass('bounceInLeft hinge');
})});


$(document).one('click','.samfundsdebatten .overlay, .samfundsdebatten i',function () {
    $("div.samfundsdebatten > div.playerContainer > div.plyr ").addClass('animated bounceInLeft');
        $(document).on('click','.samfundsdebatten .overlay, .samfundsdebatten i',function () {
            $("div.samfundsdebatten > div.playerContainer > div.plyr ").toggleClass('bounceInLeft hinge');
})});


$(document).one('click','.apropos .overlay, .apropos i',function () {
    $("div.apropos > div.playerContainer > div.plyr ").addClass('animated bounceInLeft');
        $(document).on('click','.apropos .overlay, .apropos i',function () {
            $("div.apropos > div.playerContainer > div.plyr ").toggleClass('bounceInLeft hinge');
})});


$(document).one('click','.aktivister .overlay, .aktivister i',function () {
    $("div.aktivister > div.playerContainer > div.plyr ").addClass('animated bounceInLeft');
        $(document).on('click','.aktivister .overlay, .aktivister i',function () {
            $("div.aktivister > div.playerContainer > div.plyr ").toggleClass('bounceInLeft hinge');
})});


$(document).one('click','.enFamilieTing .overlay, .enFamilieTing > div.overlay-effect > div > div > i',function () {
    $("div.enFamilieTing > div.playerContainer > div.plyr ").addClass('animated bounceInLeft');
        $(document).on('click','.enFamilieTing .overlay, .enFamilieTing > div.overlay-effect > div > div > i',function () {
            $("div.enFamilieTing > div.playerContainer > div.plyr ").toggleClass('bounceInLeft hinge');
})});

function getText(show1, show2, show3, show4) {
    $.get('../download_podcasts.php?show_name=' + show1.show_name + "&offset=0&limit=1",
        function (response) {
            $("div."+show1.show_name+" > div.playerContainer").replaceWith(response);
            plyr.setup("div."+show1.show_name +" > div.playerContainer");
        });
    $.get('../download_podcasts.php?show_name=' + show2.show_name + "&offset=0&limit=1",
        function (response) {
            $("div."+show2.show_name+" > div.playerContainer").replaceWith(response);
            plyr.setup("div."+show2.show_name +" > div.playerContainer");
        });
    $.get('../download_podcasts.php?show_name=' + show3.show_name + "&offset=0&limit=1",
        function (response) {
            $("div."+show3.show_name+" > div.playerContainer").replaceWith(response);
            plyr.setup("div."+show3.show_name +" > div.playerContainer");
        });
    $.get('../download_podcasts.php?show_name=' + show4.show_name + "&offset=0&limit=1",
        function (response) {
            $("div."+show4.show_name+" > div.playerContainer").replaceWith(response);
            plyr.setup("div."+show4.show_name +" > div.playerContainer");
        });
    
}
