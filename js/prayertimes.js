/**
 * Created by bachirkurdi on 01/02/17.
 */
checkDate();
currentPrayer();
var checkTimeLoop = setInterval(currentPrayer, 5000);

var fajr;
var shuruk;
var dhuhur;
var asr;
var maghrib;
var ishaa;
var nottrue=false;
var checkTimeLoopMobil;


$(document).on('click','.salahButton',function () {
    loop();
    $(".fajrMobil").toggleClass("fajrMobilActive");
    $(".shurukMobil").toggleClass("shurukMobilActive");
    $(".dhuhurMobil").toggleClass("dhuhurMobilActive");
    $(".asrMobil").toggleClass("asrMobilActive");
    $(".maghribMobil").toggleClass("maghribMobilActive");
    $(".ishaMobil").toggleClass("ishaMobilActive");
});

function loop() {
    currentPrayerMobil();
    if(!nottrue){
        checkTimeLoopMobil = setInterval(currentPrayerMobil, 5000);
    }
    if(nottrue){
        clearInterval(checkTimeLoopMobil);
        $(".salahMobil").removeClass('currentPrayerMobil');
        nottrue = false;
    } else {
        nottrue = true;
    }
}

function currentPrayerMobil() {
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
    } else{
        mm = time.getMinutes();
    }

    time = hh + ':' + mm;

    var FajrMobil    =$(".fajrMobil"),
        ShurukMobil  =$(".shurukMobil"),
        DhuhurMobil  =$(".dhuhurMobil"),
        AsrMobil     =$(".asrMobil"),
        MaghribMobil =$(".maghribMobil"),
        IshaaMobil   =$(".ishaMobil");

    if (ishaa <= time){
        MaghribMobil.removeClass("currentPrayerMobil");
        IshaaMobil.addClass("currentPrayerMobil")
    } else if (maghrib <= time){
        AsrMobil.removeClass("currentPrayerMobil");
        MaghribMobil.addClass("currentPrayerMobil")
    } else if (asr <= time){
        DhuhurMobil.removeClass("currentPrayerMobil");
        AsrMobil.addClass("currentPrayerMobil")
    } else if (dhuhur <= time){
        ShurukMobil.removeClass("currentPrayerMobil");
        DhuhurMobil.addClass("currentPrayerMobil")
    } else if (shuruk <= time){
        FajrMobil.removeClass("currentPrayerMobil");
        ShurukMobil.addClass("currentPrayerMobil")
    } else if (fajr <= time){
        IshaaMobil.removeClass("currentPrayerMobil");
        FajrMobil.addClass("currentPrayerMobil")
    } else {
        IshaaMobil.addClass("currentPrayerMobil");
    }
}

function currentPrayer() {
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
    } else{
        mm = time.getMinutes();
    }

    time = hh + ':' + mm;

    var Fajr    = $(".fajr")   ,
        Shuruk  = $(".shuruk") ,
        Dhuhur  = $(".dhuhur") ,
        Asr     = $(".asr")    ,
        Maghrib = $(".maghrib"),
        Ishaa   = $(".ishaa")


    if (ishaa <= time){
        Maghrib.removeClass("currentPrayer");
        Ishaa.addClass("currentPrayer");
    } else if (maghrib <= time){
        Asr.removeClass("currentPrayer");
        Maghrib.addClass("currentPrayer")
    } else if (asr <= time){
        Dhuhur.removeClass("currentPrayer");
        Asr.addClass("currentPrayer")
    } else if (dhuhur <= time){
        Shuruk.removeClass("currentPrayer");
        Dhuhur.addClass("currentPrayer")
    } else if (shuruk <= time){
        Fajr.removeClass("currentPrayer");
        Shuruk.addClass("currentPrayer")
    } else if (fajr <= time){
        Ishaa.removeClass("currentPrayer");
        Fajr.addClass("currentPrayer")
    } else {
        Ishaa.addClass("currentPrayer");
    }
}


function append() {
    $(".salah").prepend(
        "<li> <p class='fajr'>   Fajr<br>"        + fajr   + "</p>" + "</li>" +
        "<li> <p class='shuruk'> Shuruk<br>"    + shuruk + "</p>" + "</li>" +
        "<li> <p class='dhuhur'> Dhuhur<br>"    + dhuhur + "</p>" + "</li>" +
        "<li> <p class='asr'>    Asr<br>"          + asr    + "</p>" + "</li>" +
        "<li> <p class='maghrib'>Maghrib<br>"  + maghrib+ "</p>" + "</li>" +
        "<li> <p class='ishaa'>  Isha<br>"       + ishaa  + "</p>" + "</li>"
    );
    $(".fajrMobil").append(
        "<p>Fajr<br>"+fajr+"</p>"
    );
    $(".shurukMobil").append(
        "<p>Shuruk<br>"+shuruk+"</p>"
    );
    $(".dhuhurMobil").append(
        "<p>Dhuhur<br>"+dhuhur+"</p>"
    );
    $(".asrMobil").append(
        "<p>Asr<br>"+asr+"</p>"
    );
    $(".maghribMobil").append(
        "<p>Maghrib<br>"+maghrib+"</p>"
    );
    $(".ishaMobil").append(
        "<p>Isha<br>"+ishaa+"</p>"
    );

};

function checkDate() {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; //January is 0!
    var yyyy = today.getFullYear();

    if(dd<10) {
        dd='0'+dd
    }

    if(mm<10) {
        mm='0'+mm
    }

    today = dd+'/'+mm+'/'+yyyy;
    

    switch(today) {
        case "01/01/2017":fajr = "06:40",shuruk="08:37",dhuhur="12:15", asr="13:35", maghrib="15:51", ishaa="17:41";	append();break;
        case "02/01/2017":fajr = "06:40",shuruk="08:37",dhuhur="12:15", asr="13:36", maghrib="15:52", ishaa="17:42";	append();break;
        case "03/01/2017":fajr = "06:40",shuruk="08:36",dhuhur="12:16", asr="13:37", maghrib="15:53", ishaa="17:43";	append();break;
        case "04/01/2017":fajr = "06:40",shuruk="08:36",dhuhur="12:16", asr="13:38", maghrib="15:54", ishaa="17:44";	append();break;
        case "05/01/2017":fajr = "06:39",shuruk="08:35",dhuhur="12:16", asr="13:40", maghrib="15:56", ishaa="17:45";	append();break;
        case "06/01/2017":fajr = "06:39",shuruk="08:35",dhuhur="12:17", asr="13:41", maghrib="15:57", ishaa="17:47";	append();break;
        case "07/01/2017":fajr = "06:38",shuruk="08:34",dhuhur="12:17", asr="13:42", maghrib="15:59", ishaa="17:48";	append();break;
        case "08/01/2017":fajr = "06:38",shuruk="08:34",dhuhur="12:18", asr="13:43", maghrib="16:00", ishaa="17:49";	append();break;
        case "09/01/2017":fajr = "06:38",shuruk="08:33",dhuhur="12:18", asr="13:44", maghrib="16:02", ishaa="17:50";	append();break;
        case "10/01/2017":fajr = "06:37",shuruk="08:32",dhuhur="12:18", asr="13:46", maghrib="16:03", ishaa="17:52";	append();break;
        case "11/01/2017":fajr = "06:36",shuruk="08:31",dhuhur="12:19", asr="13:47", maghrib="16:05", ishaa="17:53";	append();break;
        case "12/01/2017":fajr = "06:36",shuruk="08:30",dhuhur="12:19", asr="13:48", maghrib="16:07", ishaa="17:55";	append();break;
        case "13/01/2017":fajr = "06:35",shuruk="08:29",dhuhur="12:20", asr="13:50", maghrib="16:08", ishaa="17:56";	append();break;
        case "14/01/2017":fajr = "06:34",shuruk="08:28",dhuhur="12:20", asr="13:51", maghrib="16:10", ishaa="17:57";	append();break;
        case "15/01/2017":fajr = "06:34",shuruk="08:27",dhuhur="12:20", asr="13:52", maghrib="16:12", ishaa="17:59";	append();break;
        case "16/01/2017":fajr = "06:33",shuruk="08:26",dhuhur="12:21", asr="13:54", maghrib="16:14", ishaa="18:00";	append();break;
        case "17/01/2017":fajr = "06:32",shuruk="08:25",dhuhur="12:21", asr="13:55", maghrib="16:15", ishaa="18:02";	append();break;
        case "18/01/2017":fajr = "06:31",shuruk="08:23",dhuhur="12:21", asr="13:57", maghrib="16:17", ishaa="18:03";	append();break;
        case "19/01/2017":fajr = "06:30",shuruk="08:22",dhuhur="12:22", asr="13:58", maghrib="16:19", ishaa="18:05";	append();break;
        case "20/01/2017":fajr = "06:29",shuruk="08:21",dhuhur="12:22", asr="14:00", maghrib="16:21", ishaa="18:07";	append();break;
        case "21/01/2017":fajr = "06:28",shuruk="08:19",dhuhur="12:22", asr="14:01", maghrib="16:23", ishaa="18:08";	append();break;
        case "22/01/2017":fajr = "06:27",shuruk="08:18",dhuhur="12:22", asr="14:03", maghrib="16:25", ishaa="18:10";	append();break;
        case "23/01/2017":fajr = "06:26",shuruk="08:16",dhuhur="12:23", asr="14:04", maghrib="16:27", ishaa="18:12";	append();break;
        case "24/01/2017":fajr = "06:24",shuruk="08:15",dhuhur="12:23", asr="14:06", maghrib="16:29", ishaa="18:13";	append();break;
        case "25/01/2017":fajr = "06:23",shuruk="08:13",dhuhur="12:23", asr="14:08", maghrib="16:31", ishaa="18:15";	append();break;
        case "26/01/2017":fajr = "06:22",shuruk="08:12",dhuhur="12:23", asr="14:09", maghrib="16:33", ishaa="18:17";	append();break;
        case "27/01/2017":fajr = "06:21",shuruk="08:10",dhuhur="12:24", asr="14:11", maghrib="16:35", ishaa="18:19";	append();break;
        case "28/01/2017":fajr = "06:19",shuruk="08:08",dhuhur="12:24", asr="14:12", maghrib="16:37", ishaa="18:20";	append();break;
        case "29/01/2017":fajr = "06:18",shuruk="08:07",dhuhur="12:24", asr="14:14", maghrib="16:39", ishaa="18:22";	append();break;
        case "30/01/2017":fajr = "06:16",shuruk="08:05",dhuhur="12:24", asr="14:16", maghrib="16:42", ishaa="18:24";	append();break;
        case "31/01/2017":fajr = "06:15",shuruk="08:03",dhuhur="12:24", asr="14:17", maghrib="16:44", ishaa="18:26";	append();break;
        case "01/02/2017":fajr = "06:13",shuruk="08:01",dhuhur="12:24", asr="14:19", maghrib="16:46", ishaa="18:27";	append();break;
        case "02/02/2017":fajr = "06:12",shuruk="07:59",dhuhur="12:25", asr="14:21", maghrib="16:48", ishaa="18:29";	append();break;
        case "03/02/2017":fajr = "06:10",shuruk="07:57",dhuhur="12:25", asr="14:22", maghrib="16:50", ishaa="18:31";	append();break;
        case "04/02/2017":fajr = "06:09",shuruk="07:55",dhuhur="12:25", asr="14:24", maghrib="16:52", ishaa="18:33";	append();break;
        case "05/02/2017":fajr = "06:07",shuruk="07:53",dhuhur="12:25", asr="14:26", maghrib="16:54", ishaa="18:35";	append();break;
        case "06/02/2017":fajr = "06:05",shuruk="07:51",dhuhur="12:25", asr="14:27", maghrib="16:57", ishaa="18:37";	append();break;
        case "07/02/2017":fajr = "06:04",shuruk="07:49",dhuhur="12:25", asr="14:29", maghrib="16:59", ishaa="18:38";	append();break;
        case "08/02/2017":fajr = "06:02",shuruk="07:47",dhuhur="12:25", asr="14:31", maghrib="17:01", ishaa="18:40";	append();break;
        case "09/02/2017":fajr = "06:00",shuruk="07:45",dhuhur="12:25", asr="14:33", maghrib="17:03", ishaa="18:42";	append();break;
        case "10/02/2017":fajr = "05:58",shuruk="07:43",dhuhur="12:25", asr="14:34", maghrib="17:05", ishaa="18:44";	append();break;
        case "11/02/2017":fajr = "05:57",shuruk="07:41",dhuhur="12:25", asr="14:36", maghrib="17:08", ishaa="18:46";	append();break;
        case "12/02/2017":fajr = "05:55",shuruk="07:39",dhuhur="12:25", asr="14:38", maghrib="17:10", ishaa="18:48";	append();break;
        case "13/02/2017":fajr = "05:53",shuruk="07:37",dhuhur="12:25", asr="14:39", maghrib="17:12", ishaa="18:50";	append();break;
        case "14/02/2017":fajr = "05:51",shuruk="07:34",dhuhur="12:25", asr="14:41", maghrib="17:14", ishaa="18:52";	append();break;
        case "15/02/2017":fajr = "05:49",shuruk="07:32",dhuhur="12:25", asr="14:43", maghrib="17:16", ishaa="18:53";	append();break;
        case "16/02/2017":fajr = "05:47",shuruk="07:30",dhuhur="12:25", asr="14:44", maghrib="17:18", ishaa="18:55";	append();break;
        case "17/02/2017":fajr = "05:45",shuruk="07:28",dhuhur="12:25", asr="14:46", maghrib="17:21", ishaa="18:57";	append();break;
        case "18/02/2017":fajr = "05:43",shuruk="07:25",dhuhur="12:25", asr="14:47", maghrib="17:23", ishaa="18:59";	append();break;
        case "19/02/2017":fajr = "05:41",shuruk="07:23",dhuhur="12:25", asr="14:49", maghrib="17:25", ishaa="19:01";	append();break;
        case "20/02/2017":fajr = "05:39",shuruk="07:21",dhuhur="12:25", asr="14:51", maghrib="17:27", ishaa="19:03";	append();break;
        case "21/02/2017":fajr = "05:37",shuruk="07:18",dhuhur="12:25", asr="14:52", maghrib="17:29", ishaa="19:05";	append();break;
        case "22/02/2017":fajr = "05:35",shuruk="07:16",dhuhur="12:25", asr="14:54", maghrib="17:31", ishaa="19:07";	append();break;
        case "23/02/2017":fajr = "05:33",shuruk="07:14",dhuhur="12:24", asr="14:56", maghrib="17:34", ishaa="19:09";	append();break;
        case "24/02/2017":fajr = "05:30",shuruk="07:11",dhuhur="12:24", asr="14:57", maghrib="17:36", ishaa="19:11";	append();break;
        case "25/02/2017":fajr = "05:28",shuruk="07:09",dhuhur="12:24", asr="14:59", maghrib="17:38", ishaa="19:12";	append();break;
        case "26/02/2017":fajr = "05:26",shuruk="07:06",dhuhur="12:24", asr="15:00", maghrib="17:40", ishaa="19:14";	append();break;
        case "27/02/2017":fajr = "05:24",shuruk="07:04",dhuhur="12:54", asr="15:02", maghrib="17:42", ishaa="19:16";	append();break;
        case "28/02/2017":fajr = "05:22",shuruk="07:01",dhuhur="12:24", asr="15:03", maghrib="17:44", ishaa="19:18";	append();break;
        case "01/03/2017":fajr = "05:19",shuruk="06:59",dhuhur="12:24", asr="15:05", maghrib="17:46", ishaa="19:20";	append();break;
        case "02/03/2017":fajr = "05:17",shuruk="06:56",dhuhur="12:23", asr="15:06", maghrib="17:48", ishaa="19:22";	append();break;
        case "03/03/2017":fajr = "05:15",shuruk="06:54",dhuhur="12:23", asr="15:08", maghrib="17:50", ishaa="19:24";	append();break;
        case "04/03/2017":fajr = "05:12",shuruk="06:51",dhuhur="12:23", asr="15:09", maghrib="17:53", ishaa="19:26";	append();break;
        case "05/03/2017":fajr = "05:10",shuruk="06:49",dhuhur="12:23", asr="15:11", maghrib="17:55", ishaa="19:28";	append();break;
        case "06/03/2017":fajr = "05:08",shuruk="06:46",dhuhur="12:22", asr="15:12", maghrib="17:57", ishaa="19:30";	append();break;
        case "07/03/2017":fajr = "05:05",shuruk="06:44",dhuhur="12:22", asr="15:14", maghrib="17:59", ishaa="19:32";	append();break;
        case "08/03/2017":fajr = "05:03",shuruk="06:41",dhuhur="12:22", asr="15:15", maghrib="18:01", ishaa="19:34";	append();break;
        case "09/03/2017":fajr = "05:00",shuruk="06:39",dhuhur="12:22", asr="15:16", maghrib="18:03", ishaa="19:36";	append();break;
        case "10/03/2017":fajr = "04:58",shuruk="06:36",dhuhur="12:22", asr="15:18", maghrib="18:05", ishaa="19:37";	append();break;
        case "11/03/2017":fajr = "04:55",shuruk="06:34",dhuhur="12:21", asr="15:19", maghrib="18:07", ishaa="19:39";	append();break;
        case "12/03/2017":fajr = "04:53",shuruk="06:31",dhuhur="12:21", asr="15:21", maghrib="18:09", ishaa="19:41";	append();break;
        case "13/03/2017":fajr = "04:50",shuruk="06:28",dhuhur="12:21", asr="15:22", maghrib="18:11", ishaa="19:43";	append();break;
        case "14/03/2017":fajr = "04:48",shuruk="06:26",dhuhur="12:20", asr="15:23", maghrib="18:13", ishaa="19:45";	append();break;
        case "15/03/2017":fajr = "04:45",shuruk="06:23",dhuhur="12:20", asr="15:25", maghrib="18:15", ishaa="19:47";	append();break;
        case "16/03/2017":fajr = "04:43",shuruk="06:21",dhuhur="12:20", asr="15:26", maghrib="18:17", ishaa="19:49";	append();break;
        case "17/03/2017":fajr = "04:40",shuruk="06:18",dhuhur="12:20", asr="15:27", maghrib="18:19", ishaa="19:51";	append();break;
        case "18/03/2017":fajr = "04:38",shuruk="06:15",dhuhur="12:19", asr="15:29", maghrib="18:21", ishaa="19:53";	append();break;
        case "19/03/2017":fajr = "04:35",shuruk="06:13",dhuhur="12:19", asr="15:30", maghrib="18:23", ishaa="19:55";	append();break;
        case "20/03/2017":fajr = "04:33",shuruk="06:10",dhuhur="12:19", asr="15:31", maghrib="18:25", ishaa="19:57";	append();break;
        case "21/03/2017":fajr = "04:30",shuruk="06:08",dhuhur="12:18", asr="15:32", maghrib="18:27", ishaa="19:59";	append();break;
        case "22/03/2017":fajr = "04:27",shuruk="06:05",dhuhur="12:18", asr="15:34", maghrib="18:29", ishaa="20:01";	append();break;
        case "23/03/2017":fajr = "04:25",shuruk="06:02",dhuhur="12:18", asr="15:35", maghrib="18:31", ishaa="20:03";	append();break;
        case "24/03/2017":fajr = "04:22",shuruk="06:00",dhuhur="12:17", asr="15:36", maghrib="18:33", ishaa="20:05";	append();break;
        case "25/03/2017":fajr = "04:20",shuruk="05:57",dhuhur="12:17", asr="15:37", maghrib="18:35", ishaa="20:07";	append();break;
        case "26/03/2017":fajr = "04:17",shuruk="05:54",dhuhur="12:17", asr="15:38", maghrib="18:37", ishaa="20:09";	append();break;
        case "27/03/2017":fajr = "05:14",shuruk="06:52",dhuhur="13:16", asr="16:40", maghrib="19:39", ishaa="21:11";	append();break;
        case "28/03/2017":fajr = "05:12",shuruk="06:59",dhuhur="13:16", asr="16:41", maghrib="19:41", ishaa="21:11";	append();break;
        case "29/03/2017":fajr = "05:09",shuruk="06:47",dhuhur="13:16", asr="16:41", maghrib="19:43", ishaa="21:15";	append();break;
        case "30/03/2017":fajr = "05:06",shuruk="06:44",dhuhur="13:16", asr="16:43", maghrib="19:45", ishaa="21:17";	append();break;
        case "31/03/2017":fajr = "05:04",shuruk="06:41",dhuhur="13:15", asr="16:44", maghrib="19:47", ishaa="21:19";	append();break;
        case "01/04/2017":fajr = "05:01",shuruk="06:39",dhuhur="13:15", asr="16:45", maghrib="19:49", ishaa="21:21";	append();break;
        case "02/04/2017":fajr = "04:58",shuruk="06:36",dhuhur="13:15", asr="16:46", maghrib="19:51", ishaa="21:23";	append();break;
        case "03/04/2017":fajr = "04:55",shuruk="06:33",dhuhur="13:14", asr="16:47", maghrib="19:53", ishaa="21:25";	append();break;
        case "04/04/2017":fajr = "04:53",shuruk="06:31",dhuhur="13:14", asr="16:48", maghrib="19:55", ishaa="21:27";	append();break;
        case "05/04/2017":fajr = "04:50",shuruk="06:28",dhuhur="13:14", asr="16:50", maghrib="19:57", ishaa="21:29";	append();break;
        case "06/04/2017":fajr = "04:47",shuruk="06:26",dhuhur="13:13", asr="16:51", maghrib="19:59", ishaa="21:31";	append();break;
        case "07/04/2017":fajr = "04:45",shuruk="06:23",dhuhur="13:13", asr="16:52", maghrib="20:01", ishaa="21:33";	append();break;
        case "08/04/2017":fajr = "04:42",shuruk="06:20",dhuhur="13:13", asr="16:53", maghrib="20:03", ishaa="21:36";	append();break;
        case "09/04/2017":fajr = "04:39",shuruk="06:18",dhuhur="13:12", asr="16:54", maghrib="20:05", ishaa="21:38";	append();break;
        case "10/04/2017":fajr = "04:37",shuruk="06:15",dhuhur="13:12", asr="16:55", maghrib="20:07", ishaa="21:40";	append();break;
        case "11/04/2017":fajr = "04:34",shuruk="06:13",dhuhur="13:12", asr="16:56", maghrib="20:09", ishaa="21:42";	append();break;
        case "12/04/2017":fajr = "04:31",shuruk="06:10",dhuhur="13:12", asr="16:57", maghrib="20:11", ishaa="21:44";	append();break;
        case "13/04/2017":fajr = "04:28",shuruk="06:08",dhuhur="13:11", asr="16:58", maghrib="20:13", ishaa="21:46";	append();break;
        case "14/04/2017":fajr = "04:26",shuruk="06:05",dhuhur="13:11", asr="16:59", maghrib="20:15", ishaa="21:48";	append();break;
        case "15/04/2017":fajr = "04:23",shuruk="06:03",dhuhur="13:11", asr="17:00", maghrib="20:17", ishaa="21:50";	append();break;
        case "16/04/2017":fajr = "04:20",shuruk="06:00",dhuhur="13:11", asr="17:01", maghrib="20:19", ishaa="21:53";	append();break;
        case "17/04/2017":fajr = "04:18",shuruk="05:58",dhuhur="13:10", asr="17:02", maghrib="20:21", ishaa="21:55";	append();break;
        case "18/04/2017":fajr = "04:15",shuruk="05:55",dhuhur="13:10", asr="17:03", maghrib="20:23", ishaa="21:57";	append();break;
        case "19/04/2017":fajr = "04:12",shuruk="05:53",dhuhur="13:10", asr="17:04", maghrib="20:25", ishaa="21:59";	append();break;
        case "20/04/2017":fajr = "04:10",shuruk="05:50",dhuhur="13:10", asr="17:04", maghrib="20:27", ishaa="22:01";	append();break;
        case "21/04/2017":fajr = "04:07",shuruk="05:48",dhuhur="13:09", asr="17:05", maghrib="20:29", ishaa="22:03";	append();break;
        case "22/04/2017":fajr = "04:04",shuruk="05:45",dhuhur="13:09", asr="17:06", maghrib="20:31", ishaa="22:06";	append();break;
        case "23/04/2017":fajr = "04:02",shuruk="05:43",dhuhur="13:09", asr="17:07", maghrib="20:33", ishaa="22:08";	append();break;
        case "24/04/2017":fajr = "03:59",shuruk="05:41",dhuhur="13:09", asr="17:08", maghrib="20:35", ishaa="22:10";	append();break;
        case "25/04/2017":fajr = "03:56",shuruk="05:38",dhuhur="13:09", asr="17:09", maghrib="20:37", ishaa="22:12";	append();break;
        case "26/04/2017":fajr = "03:54",shuruk="05:36",dhuhur="13:09", asr="17:10", maghrib="20:39", ishaa="22:15";	append();break;
        case "27/04/2017":fajr = "03:51",shuruk="05:34",dhuhur="13:08", asr="17:11", maghrib="20:41", ishaa="22:17";	append();break;
        case "28/04/2017":fajr = "03:49",shuruk="05:31",dhuhur="13:08", asr="17:12", maghrib="20:43", ishaa="22:19";	append();break;
        case "29/04/2017":fajr = "03:46",shuruk="05:29",dhuhur="13:08", asr="17:13", maghrib="20:45", ishaa="22:21";	append();break;
        case "30/04/2017":fajr = "03:44",shuruk="05:27",dhuhur="13:08", asr="17:13", maghrib="20:47", ishaa="22:23";	append();break;
        case "01/05/2017":fajr = "03:41",shuruk="05:24",dhuhur="13:08", asr="17:14", maghrib="20:49", ishaa="22:26";	append();break;
        case "02/05/2017":fajr = "03:39",shuruk="05:22",dhuhur="13:08", asr="17:15", maghrib="20:51", ishaa="22:28";	append();break;
        case "03/05/2017":fajr = "03:36",shuruk="05:20",dhuhur="13:08", asr="17:16", maghrib="20:53", ishaa="22:30";	append();break;
        case "04/05/2017":fajr = "03:34",shuruk="05:18",dhuhur="13:08", asr="17:17", maghrib="20:55", ishaa="22:32";	append();break;
        case "05/05/2017":fajr = "03:31",shuruk="05:16",dhuhur="13:07", asr="17:18", maghrib="20:57", ishaa="22:35";	append();break;
        case "06/05/2017":fajr = "03:29",shuruk="05:14",dhuhur="13:07", asr="17:18", maghrib="20:59", ishaa="22:37";	append();break;
        case "07/05/2017":fajr = "03:26",shuruk="05:12",dhuhur="13:07", asr="17:19", maghrib="21:01", ishaa="22:39";	append();break;
        case "08/05/2017":fajr = "03:24",shuruk="05:10",dhuhur="13:07", asr="17:20", maghrib="21:03", ishaa="22:41";	append();break;
        case "09/05/2017":fajr = "03:22",shuruk="05:08",dhuhur="13:07", asr="17:21", maghrib="21:05", ishaa="22:43";	append();break;
        case "10/05/2017":fajr = "03:19",shuruk="05:06",dhuhur="13:07", asr="17:22", maghrib="21:07", ishaa="22:46";	append();break;
        case "11/05/2017":fajr = "03:17",shuruk="05:04",dhuhur="13:07", asr="17:23", maghrib="21:09", ishaa="22:48";	append();break;
        case "12/05/2017":fajr = "03:15",shuruk="05:02",dhuhur="13:07", asr="17:23", maghrib="21:11", ishaa="22:50";	append();break;
        case "13/05/2017":fajr = "03:13",shuruk="05:00",dhuhur="13:07", asr="17:24", maghrib="21:13", ishaa="22:52";	append();break;
        case "14/05/2017":fajr = "03:11",shuruk="04:58",dhuhur="13:07", asr="17:25", maghrib="21:15", ishaa="22:54";	append();break;
        case "15/05/2017":fajr = "03:08",shuruk="04:56",dhuhur="13:07", asr="17:26", maghrib="21:17", ishaa="22:56";	append();break;
        case "16/05/2017":fajr = "03:06",shuruk="04:54",dhuhur="13:07", asr="17:26", maghrib="21:18", ishaa="22:59";	append();break;
        case "17/05/2017":fajr = "03:04",shuruk="04:53",dhuhur="13:07", asr="17:27", maghrib="21:20", ishaa="23:01";	append();break;
        case "18/05/2017":fajr = "03:02",shuruk="04:51",dhuhur="13:07", asr="17:28", maghrib="21:22", ishaa="23:03";	append();break;
        case "19/05/2017":fajr = "03:00",shuruk="04:49",dhuhur="13:07", asr="17:28", maghrib="21:24", ishaa="23:05";	append();break;
        case "20/05/2017":fajr = "02:58",shuruk="04:48",dhuhur="13:08", asr="17:29", maghrib="21:26", ishaa="23:07";	append();break;
        case "21/05/2017":fajr = "02:56",shuruk="04:46",dhuhur="13:08", asr="17:30", maghrib="21:27", ishaa="23:09";	append();break;
        case "22/05/2017":fajr = "02:54",shuruk="04:44",dhuhur="13:08", asr="17:31", maghrib="21:29", ishaa="23:11";	append();break;
        case "23/05/2017":fajr = "02:52",shuruk="04:43",dhuhur="13:08", asr="17:31", maghrib="21:31", ishaa="23:13";	append();break;
        case "24/05/2017":fajr = "02:51",shuruk="04:41",dhuhur="13:08", asr="17:32", maghrib="21:33", ishaa="23:15";	append();break;
        case "25/05/2017":fajr = "02:49",shuruk="04:40",dhuhur="13:08", asr="17:33", maghrib="21:34", ishaa="23:17";	append();break;
        case "26/05/2017":fajr = "02:47",shuruk="04:39",dhuhur="13:08", asr="17:33", maghrib="21:36", ishaa="23:18";	append();break;
        case "27/05/2017":fajr = "02:46",shuruk="04:37",dhuhur="13:08", asr="17:34", maghrib="21:37", ishaa="23:20";	append();break;
        case "28/05/2017":fajr = "02:44",shuruk="04:36",dhuhur="13:08", asr="17:34", maghrib="21:39", ishaa="23:22";	append();break;
        case "29/05/2017":fajr = "02:42",shuruk="04:35",dhuhur="13:09", asr="17:35", maghrib="21:40", ishaa="23:24";	append();break;
        case "30/05/2017":fajr = "02:41",shuruk="04:34",dhuhur="13:09", asr="17:36", maghrib="21:42", ishaa="23:25";	append();break;
        case "31/05/2017":fajr = "02:40",shuruk="04:33",dhuhur="13:09", asr="17:36", maghrib="21:43", ishaa="23:27";	append();break;
        case "01/06/2017":fajr = "02:38",shuruk="04:32",dhuhur="13:09", asr="17:37", maghrib="21:45", ishaa="23:29";	append();break;
        case "02/06/2017":fajr = "02:37",shuruk="04:31",dhuhur="13:09", asr="17:37", maghrib="21:46", ishaa="23:30";	append();break;
        case "03/06/2017":fajr = "02:36",shuruk="04:30",dhuhur="13:09", asr="17:38", maghrib="21:47", ishaa="23:32";	append();break;
        case "04/06/2017":fajr = "02:35",shuruk="04:29",dhuhur="13:09", asr="17:38", maghrib="21:48", ishaa="23:33";	append();break;
        case "05/06/2017":fajr = "02:33",shuruk="04:28",dhuhur="13:10", asr="17:39", maghrib="21:50", ishaa="23:35";	append();break;
        case "06/06/2017":fajr = "02:32",shuruk="04:27",dhuhur="13:10", asr="17:39", maghrib="21:51", ishaa="23:36";	append();break;
        case "07/06/2017":fajr = "02:31",shuruk="04:26",dhuhur="13:10", asr="17:40", maghrib="21:52", ishaa="23:37";	append();break;
        case "08/06/2017":fajr = "02:31",shuruk="04:26",dhuhur="13:10", asr="17:40", maghrib="21:53", ishaa="23:38";	append();break;
        case "09/06/2017":fajr = "02:30",shuruk="04:25",dhuhur="13:10", asr="17:41", maghrib="21:54", ishaa="23:39";	append();break;
        case "10/06/2017":fajr = "02:29",shuruk="04:25",dhuhur="13:11", asr="17:41", maghrib="21:55", ishaa="23:41";	append();break;
        case "11/06/2017":fajr = "02:28",shuruk="04:24",dhuhur="13:11", asr="17:42", maghrib="21:56", ishaa="23:42";	append();break;
        case "12/06/2017":fajr = "02:28",shuruk="04:24",dhuhur="13:11", asr="17:42", maghrib="21:56", ishaa="23:42";	append();break;
        case "13/06/2017":fajr = "02:27",shuruk="04:23",dhuhur="13:11", asr="17:42", maghrib="21:57", ishaa="23:43";	append();break;
        case "14/06/2017":fajr = "02:27",shuruk="04:23",dhuhur="13:11", asr="17:43", maghrib="21:58", ishaa="23:44";	append();break;
        case "15/06/2017":fajr = "02:27",shuruk="04:23",dhuhur="13:12", asr="17:43", maghrib="21:59", ishaa="23:45";	append();break;
        case "16/06/2017":fajr = "02:26",shuruk="04:23",dhuhur="13:12", asr="17:43", maghrib="21:59", ishaa="23:45";	append();break;
        case "17/06/2017":fajr = "02:26",shuruk="04:23",dhuhur="13:12", asr="17:44", maghrib="22:00", ishaa="23:46";	append();break;
        case "18/06/2017":fajr = "02:26",shuruk="04:23",dhuhur="13:12", asr="17:44", maghrib="22:00", ishaa="23:46";	append();break;
        case "19/06/2017":fajr = "02:26",shuruk="04:23",dhuhur="13:12", asr="17:44", maghrib="22:00", ishaa="23:47";	append();break;
        case "20/06/2017":fajr = "02:26",shuruk="04:23",dhuhur="13:13", asr="17:44", maghrib="22:01", ishaa="23:47";	append();break;
        case "21/06/2017":fajr = "02:26",shuruk="04:23",dhuhur="13:13", asr="17:45", maghrib="22:01", ishaa="23:47";	append();break;
        case "22/06/2017":fajr = "02:27",shuruk="04:23",dhuhur="13:13", asr="17:45", maghrib="22:01", ishaa="23:48";	append();break;
        case "23/06/2017":fajr = "02:27",shuruk="04:24",dhuhur="13:13", asr="17:45", maghrib="22:01", ishaa="23:48";	append();break;
        case "24/06/2017":fajr = "02:27",shuruk="04:24",dhuhur="13:13", asr="17:45", maghrib="22:01", ishaa="23:48";	append();break;
        case "25/06/2017":fajr = "02:28",shuruk="04:24",dhuhur="13:14", asr="17:45", maghrib="22:01", ishaa="23:48";	append();break;
        case "26/06/2017":fajr = "02:28",shuruk="04:25",dhuhur="13:14", asr="17:45", maghrib="22:01", ishaa="23:47";	append();break;
        case "27/06/2017":fajr = "02:29",shuruk="04:25",dhuhur="13:14", asr="17:45", maghrib="22:01", ishaa="23:47";	append();break;
        case "28/06/2017":fajr = "02:30",shuruk="04:26",dhuhur="13:14", asr="17:46", maghrib="22:01", ishaa="23:47";	append();break;
        case "29/06/2017":fajr = "02:31",shuruk="04:27",dhuhur="13:14", asr="17:46", maghrib="22:00", ishaa="23:46";	append();break;
        case "30/06/2017":fajr = "02:31",shuruk="04:27",dhuhur="13:15", asr="17:46", maghrib="22:00", ishaa="23:46";	append();break;
        case "01/07/2017":fajr = "02:32",shuruk="04:28",dhuhur="13:15", asr="17:46", maghrib="22:00", ishaa="23:45";	append();break;
        case "02/07/2017":fajr = "02:33",shuruk="04:29",dhuhur="13:15", asr="17:46", maghrib="21:59", ishaa="23:45";	append();break;
        case "03/07/2017":fajr = "02:35",shuruk="04:30",dhuhur="13:15", asr="17:45", maghrib="21:59", ishaa="23:44";	append();break;
        case "04/07/2017":fajr = "02:36",shuruk="04:31",dhuhur="13:15", asr="17:45", maghrib="21:58", ishaa="23:43";	append();break;
        case "05/07/2017":fajr = "02:37",shuruk="04:32",dhuhur="13:15", asr="17:45", maghrib="21:57", ishaa="23:42";	append();break;
        case "06/07/2017":fajr = "02:38",shuruk="04:33",dhuhur="13:16", asr="17:45", maghrib="21:56", ishaa="23:42";	append();break;
        case "07/07/2017":fajr = "02:40",shuruk="04:34",dhuhur="13:16", asr="17:45", maghrib="21:56", ishaa="23:41";	append();break;
        case "08/07/2017":fajr = "02:41",shuruk="04:35",dhuhur="13:16", asr="17:45", maghrib="21:55", ishaa="23:39";	append();break;
        case "09/07/2017":fajr = "02:42",shuruk="04:36",dhuhur="13:16", asr="17:45", maghrib="21:54", ishaa="23:38";	append();break;
        case "10/07/2017":fajr = "02:44",shuruk="04:38",dhuhur="13:16", asr="17:44", maghrib="21:53", ishaa="23:37";	append();break;
        case "11/07/2017":fajr = "02:46",shuruk="04:39",dhuhur="13:16", asr="17:44", maghrib="21:52", ishaa="23:36";	append();break;
        case "12/07/2017":fajr = "02:47",shuruk="04:40",dhuhur="13:16", asr="17:44", maghrib="21:51", ishaa="23:35";	append();break;
        case "13/07/2017":fajr = "02:49",shuruk="04:42",dhuhur="13:16", asr="17:43", maghrib="21:50", ishaa="23:33";	append();break;
        case "14/07/2017":fajr = "02:51",shuruk="04:43",dhuhur="13:17", asr="17:43", maghrib="21:48", ishaa="23:32";	append();break;
        case "15/07/2017":fajr = "02:52",shuruk="04:44",dhuhur="13:17", asr="17:43", maghrib="21:47", ishaa="23:30";	append();break;
        case "16/07/2017":fajr = "02:54",shuruk="04:46",dhuhur="13:17", asr="17:42", maghrib="21:46", ishaa="23:29";	append();break;
        case "17/07/2017":fajr = "02:56",shuruk="04:47",dhuhur="13:17", asr="17:42", maghrib="21:44", ishaa="23:27";	append();break;
        case "18/07/2017":fajr = "02:58",shuruk="04:49",dhuhur="13:17", asr="17:41", maghrib="21:43", ishaa="23:26";	append();break;
        case "19/07/2017":fajr = "03:00",shuruk="04:50",dhuhur="13:17", asr="17:41", maghrib="21:42", ishaa="23:24";	append();break;
        case "20/07/2017":fajr = "03:02",shuruk="04:52",dhuhur="13:17", asr="17:41", maghrib="21:40", ishaa="23:22";	append();break;
        case "21/07/2017":fajr = "03:04",shuruk="04:54",dhuhur="13:17", asr="17:40", maghrib="21:39", ishaa="23:20";	append();break;
        case "22/07/2017":fajr = "03:06",shuruk="04:55",dhuhur="13:17", asr="17:39", maghrib="21:37", ishaa="23:18";	append();break;
        case "23/07/2017":fajr = "03:08",shuruk="04:57",dhuhur="13:17", asr="17:39", maghrib="21:35", ishaa="23:17";	append();break;
        case "24/07/2017":fajr = "03:10",shuruk="04:59",dhuhur="13:17", asr="17:38", maghrib="21:34", ishaa="23:15";	append();break;
        case "25/07/2017":fajr = "03:12",shuruk="05:00",dhuhur="13:17", asr="17:38", maghrib="21:32", ishaa="23:13";	append();break;
        case "26/07/2017":fajr = "03:14",shuruk="05:02",dhuhur="13:17", asr="17:37", maghrib="21:30", ishaa="23:11";	append();break;
        case "27/07/2017":fajr = "03:16",shuruk="05:04",dhuhur="13:17", asr="17:36", maghrib="21:29", ishaa="23:09";	append();break;
        case "28/07/2017":fajr = "03:18",shuruk="05:06",dhuhur="13:17", asr="17:36", maghrib="21:27", ishaa="23:07";	append();break;
        case "29/07/2017":fajr = "03:20",shuruk="05:08",dhuhur="13:17", asr="17:35", maghrib="21:25", ishaa="23:04";	append();break;
        case "30/07/2017":fajr = "03:22",shuruk="05:09",dhuhur="13:17", asr="17:34", maghrib="21:23", ishaa="23:02";	append();break;
        case "31/07/2017":fajr = "03:25",shuruk="05:11",dhuhur="13:17", asr="17:33", maghrib="21:21", ishaa="23:00";	append();break;
        case "01/08/2017":fajr = "03:27",shuruk="05:13",dhuhur="13:17", asr="17:32", maghrib="21:19", ishaa="22:58";	append();break;
        case "02/08/2017":fajr = "03:29",shuruk="05:15",dhuhur="13:17", asr="17:32", maghrib="21:17", ishaa="22:56";	append();break;
        case "03/08/2017":fajr = "03:31",shuruk="05:17",dhuhur="13:17", asr="17:31", maghrib="21:15", ishaa="22:53";	append();break;
        case "04/08/2017":fajr = "03:33",shuruk="05:19",dhuhur="13:17", asr="17:30", maghrib="21:13", ishaa="22:51";	append();break;
        case "05/08/2017":fajr = "03:36",shuruk="05:21",dhuhur="13:17", asr="17:29", maghrib="21:11", ishaa="22:49";	append();break;
        case "06/08/2017":fajr = "03:38",shuruk="05:23",dhuhur="13:17", asr="17:28", maghrib="21:09", ishaa="22:46";	append();break;
        case "07/08/2017":fajr = "03:40",shuruk="05:25",dhuhur="13:17", asr="17:27", maghrib="21:07", ishaa="22:44";	append();break;
        case "08/08/2017":fajr = "03:42",shuruk="05:26",dhuhur="13:16", asr="17:26", maghrib="21:05", ishaa="22:42";	append();break;
        case "09/08/2017":fajr = "03:44",shuruk="05:28",dhuhur="13:16", asr="17:25", maghrib="21:02", ishaa="22:39";	append();break;
        case "10/08/2017":fajr = "03:47",shuruk="05:30",dhuhur="13:16", asr="17:24", maghrib="21:00", ishaa="22:37";	append();break;
        case "11/08/2017":fajr = "03:49",shuruk="05:32",dhuhur="13:16", asr="17:23", maghrib="20:58", ishaa="22:34";	append();break;
        case "12/08/2017":fajr = "03:51",shuruk="05:34",dhuhur="13:16", asr="17:22", maghrib="20:56", ishaa="22:32";	append();break;
        case "13/08/2017":fajr = "03:53",shuruk="05:36",dhuhur="13:16", asr="17:21", maghrib="20:54", ishaa="22:29";	append();break;
        case "14/08/2017":fajr = "03:56",shuruk="05:38",dhuhur="13:16", asr="17:19", maghrib="20:51", ishaa="22:27";	append();break;
        case "15/08/2017":fajr = "03:58",shuruk="05:40",dhuhur="13:15", asr="17:18", maghrib="20:49", ishaa="22:24";	append();break;
        case "16/08/2017":fajr = "04:00",shuruk="05:42",dhuhur="13:15", asr="17:17", maghrib="20:47", ishaa="22:22";	append();break;
        case "17/08/2017":fajr = "04:02",shuruk="05:44",dhuhur="13:15", asr="17:16", maghrib="20:44", ishaa="22:19";	append();break;
        case "18/08/2017":fajr = "04:04",shuruk="05:46",dhuhur="13:15", asr="17:14", maghrib="20:42", ishaa="22:17";	append();break;
        case "19/08/2017":fajr = "04:07",shuruk="05:48",dhuhur="13:15", asr="17:13", maghrib="20:40", ishaa="22:14";	append();break;
        case "20/08/2017":fajr = "04:09",shuruk="05:50",dhuhur="13:14", asr="17:12", maghrib="20:37", ishaa="22:12";	append();break;
        case "21/08/2017":fajr = "04:11",shuruk="05:52",dhuhur="13:14", asr="17:11", maghrib="20:35", ishaa="22:09";	append();break;
        case "22/08/2017":fajr = "04:13",shuruk="05:54",dhuhur="13:14", asr="17:09", maghrib="20:32", ishaa="22:06";	append();break;
        case "23/08/2017":fajr = "04:15",shuruk="05:56",dhuhur="13:14", asr="17:08", maghrib="20:30", ishaa="22:04";	append();break;
        case "24/08/2017":fajr = "04:17",shuruk="05:58",dhuhur="13:13", asr="17:06", maghrib="20:27", ishaa="22:01";	append();break;
        case "25/08/2017":fajr = "04:20",shuruk="06:00",dhuhur="13:13", asr="17:05", maghrib="20:25", ishaa="21:59";	append();break;
        case "26/08/2017":fajr = "04:22",shuruk="06:02",dhuhur="13:13", asr="17:04", maghrib="20:23", ishaa="21:56";	append();break;
        case "27/08/2017":fajr = "04:24",shuruk="06:04",dhuhur="13:13", asr="17:02", maghrib="20:20", ishaa="21:53";	append();break;
        case "28/08/2017":fajr = "04:26",shuruk="06:06",dhuhur="13:12", asr="17:01", maghrib="20:18", ishaa="21:51";	append();break;
        case "29/08/2017":fajr = "04:28",shuruk="06:07",dhuhur="13:12", asr="16:59", maghrib="20:15", ishaa="21:49";	append();break;
        case "30/08/2017":fajr = "04:30",shuruk="06:09",dhuhur="13:12", asr="16:58", maghrib="20:13", ishaa="21:45";	append();break;
        case "31/08/2017":fajr = "04:32",shuruk="06:11",dhuhur="13:12", asr="16:56", maghrib="20:10", ishaa="21:43";	append();break;
        case "01/09/2017":fajr = "04:34",shuruk="06:13",dhuhur="13:11", asr="16:54", maghrib="20:07", ishaa="21:40";	append();break;
        case "02/09/2017":fajr = "04:37",shuruk="06:15",dhuhur="13:11", asr="16:53", maghrib="20:05", ishaa="21:37";	append();break;
        case "03/09/2017":fajr = "04:39",shuruk="06:17",dhuhur="13:11", asr="16:51", maghrib="20:02", ishaa="21:35";	append();break;
        case "04/09/2017":fajr = "04:41",shuruk="06:19",dhuhur="13:10", asr="16:50", maghrib="20:00", ishaa="21:32";	append();break;
        case "05/09/2017":fajr = "04:43",shuruk="06:21",dhuhur="13:10", asr="16:48", maghrib="19:57", ishaa="21:29";	append();break;
        case "06/09/2017":fajr = "04:45",shuruk="06:23",dhuhur="13:10", asr="16:46", maghrib="19:55", ishaa="21:27";	append();break;
        case "07/09/2017":fajr = "04:47",shuruk="06:25",dhuhur="13:09", asr="16:45", maghrib="19:52", ishaa="21:24";	append();break;
        case "08/09/2017":fajr = "04:49",shuruk="06:27",dhuhur="13:09", asr="16:43", maghrib="19:49", ishaa="21:21";	append();break;
        case "09/09/2017":fajr = "04:51",shuruk="06:29",dhuhur="13:09", asr="16:41", maghrib="19:47", ishaa="21:19";	append();break;
        case "10/09/2017":fajr = "04:53",shuruk="06:31",dhuhur="13:08", asr="16:39", maghrib="19:44", ishaa="21:16";	append();break;
        case "11/09/2017":fajr = "04:55",shuruk="06:33",dhuhur="13:08", asr="16:38", maghrib="19:41", ishaa="21:13";	append();break;
        case "12/09/2017":fajr = "04:57",shuruk="06:34",dhuhur="13:08", asr="16:36", maghrib="19:39", ishaa="21:11";	append();break;
        case "13/09/2017":fajr = "04:59",shuruk="06:36",dhuhur="13:07", asr="16:34", maghrib="19:36", ishaa="21:08";	append();break;
        case "14/09/2017":fajr = "05:01",shuruk="06:38",dhuhur="13:07", asr="16:32", maghrib="19:34", ishaa="21:05";	append();break;
        case "15/09/2017":fajr = "05:03",shuruk="06:40",dhuhur="13:06", asr="16:31", maghrib="19:31", ishaa="21:03";	append();break;
        case "16/09/2017":fajr = "05:05",shuruk="06:42",dhuhur="13:06", asr="16:29", maghrib="19:28", ishaa="21:00";	append();break;
        case "17/09/2017":fajr = "05:06",shuruk="06:44",dhuhur="13:06", asr="16:27", maghrib="19:26", ishaa="20:57";	append();break;
        case "18/09/2017":fajr = "05:08",shuruk="06:46",dhuhur="13:05", asr="16:25", maghrib="19:23", ishaa="20:55";	append();break;
        case "19/09/2017":fajr = "05:10",shuruk="06:48",dhuhur="13:05", asr="16:23", maghrib="19:20", ishaa="20:52";	append();break;
        case "20/09/2017":fajr = "05:12",shuruk="06:50",dhuhur="13:05", asr="16:21", maghrib="19:18", ishaa="20:49";	append();break;
        case "21/09/2017":fajr = "05:14",shuruk="06:52",dhuhur="13:04", asr="16:19", maghrib="19:15", ishaa="20:47";	append();break;
        case "22/09/2017":fajr = "05:16",shuruk="06:54",dhuhur="13:04", asr="16:18", maghrib="19:12", ishaa="20:44";	append();break;
        case "23/09/2017":fajr = "05:18",shuruk="06:56",dhuhur="13:04", asr="16:16", maghrib="19:10", ishaa="20:41";	append();break;
        case "24/09/2017":fajr = "05:20",shuruk="06:57",dhuhur="13:03", asr="16:14", maghrib="19:07", ishaa="20:39";	append();break;
        case "25/09/2017":fajr = "05:22",shuruk="06:59",dhuhur="13:03", asr="16:12", maghrib="19:04", ishaa="20:36";	append();break;
        case "26/09/2017":fajr = "05:24",shuruk="07:01",dhuhur="13:02", asr="16:10", maghrib="19:02", ishaa="20:34";	append();break;
        case "27/09/2017":fajr = "05:25",shuruk="07:03",dhuhur="13:02", asr="16:08", maghrib="18:59", ishaa="20:31";	append();break;
        case "28/09/2017":fajr = "05:27",shuruk="07:05",dhuhur="13:02", asr="16:06", maghrib="18:56", ishaa="20:28";	append();break;
        case "29/09/2017":fajr = "05:29",shuruk="07:07",dhuhur="13:01", asr="16:04", maghrib="18:54", ishaa="20:26";	append();break;
        case "30/09/2017":fajr = "05:31",shuruk="07:09",dhuhur="13:01", asr="16:02", maghrib="18:51", ishaa="20:23";	append();break;
        case "01/10/2017":fajr = "05:33",shuruk="07:11",dhuhur="13:01", asr="16:00", maghrib="18:49", ishaa="20:21";	append();break;
        case "02/10/2017":fajr = "05:35",shuruk="07:13",dhuhur="13:00", asr="15:58", maghrib="18:46", ishaa="20:18";	append();break;
        case "03/10/2017":fajr = "05:36",shuruk="07:15",dhuhur="13:00", asr="15:56", maghrib="18:43", ishaa="20:16";	append();break;
        case "04/10/2017":fajr = "05:38",shuruk="07:17",dhuhur="13:00", asr="15:54", maghrib="18:41", ishaa="20:13";	append();break;
        case "05/10/2017":fajr = "05:40",shuruk="07:19",dhuhur="12:59", asr="15:52", maghrib="18:38", ishaa="20:11";	append();break;
        case "06/10/2017":fajr = "05:42",shuruk="07:21",dhuhur="12:59", asr="15:50", maghrib="18:35", ishaa="20:08";	append();break;
        case "07/10/2017":fajr = "05:44",shuruk="07:23",dhuhur="12:59", asr="15:48", maghrib="18:33", ishaa="20:06";	append();break;
        case "08/10/2017":fajr = "05:46",shuruk="07:25",dhuhur="12:58", asr="15:46", maghrib="18:30", ishaa="20:03";	append();break;
        case "09/10/2017":fajr = "05:47",shuruk="07:27",dhuhur="12:58", asr="15:44", maghrib="18:28", ishaa="20:01";	append();break;
        case "10/10/2017":fajr = "05:49",shuruk="07:29",dhuhur="12:58", asr="15:42", maghrib="18:25", ishaa="19:59";	append();break;
        case "11/10/2017":fajr = "05:51",shuruk="07:30",dhuhur="12:57", asr="15:41", maghrib="18:23", ishaa="19:58";	append();break;
        case "12/10/2017":fajr = "05:53",shuruk="07:32",dhuhur="12:57", asr="15:39", maghrib="18:20", ishaa="19:54";	append();break;
        case "13/10/2017":fajr = "05:55",shuruk="07:34",dhuhur="12:57", asr="15:37", maghrib="18:18", ishaa="19:52";	append();break;
        case "14/10/2017":fajr = "05:56",shuruk="07:36",dhuhur="12:57", asr="15:35", maghrib="18:15", ishaa="19:49";	append();break;
        case "15/10/2017":fajr = "05:58",shuruk="07:38",dhuhur="12:56", asr="15:33", maghrib="18:13", ishaa="19:47";	append();break;
        case "16/10/2017":fajr = "06:00",shuruk="07:40",dhuhur="12:56", asr="15:31", maghrib="18:10", ishaa="19:55";	append();break;
        case "17/10/2017":fajr = "06:02",shuruk="07:43",dhuhur="12:56", asr="15:29", maghrib="18:08", ishaa="19:42";	append();break;
        case "18/10/2017":fajr = "06:04",shuruk="07:45",dhuhur="12:56", asr="15:27", maghrib="18:05", ishaa="19:40";	append();break;
        case "19/10/2017":fajr = "06:05",shuruk="07:47",dhuhur="12:56", asr="15:25", maghrib="18:03", ishaa="19:38";	append();break;
        case "20/10/2017":fajr = "06:07",shuruk="07:49",dhuhur="12:55", asr="15:23", maghrib="18:00", ishaa="19:36";	append();break;
        case "21/10/2017":fajr = "06:09",shuruk="07:51",dhuhur="12:55", asr="15:21", maghrib="17:58", ishaa="19:34";	append();break;
        case "22/10/2017":fajr = "06:11",shuruk="07:53",dhuhur="12:55", asr="15:20", maghrib="17:56", ishaa="19:32";	append();break;
        case "23/10/2017":fajr = "06:13",shuruk="07:55",dhuhur="12:55", asr="15:18", maghrib="17:53", ishaa="19:30";	append();break;
        case "24/10/2017":fajr = "06:14",shuruk="07:57",dhuhur="12:55", asr="15:16", maghrib="17:51", ishaa="19:28";	append();break;
        case "25/10/2017":fajr = "06:16",shuruk="07:59",dhuhur="12:55", asr="15:14", maghrib="17:49", ishaa="19:26";	append();break;
        case "26/10/2017":fajr = "06:18",shuruk="08:01",dhuhur="12:55", asr="15:12", maghrib="17:46", ishaa="19:23";	append();break;
        case "27/10/2017":fajr = "06:20",shuruk="08:03",dhuhur="12:54", asr="15:11", maghrib="17:44", ishaa="19:21";	append();break;
        case "28/10/2017":fajr = "06:22",shuruk="08:05",dhuhur="12:54", asr="15:09", maghrib="17:42", ishaa="19:19";	append();break;
        case "29/10/2017":fajr = "06:23",shuruk="08:07",dhuhur="12:54", asr="15:07", maghrib="17:40", ishaa="19:17";	append();break;
        case "30/10/2017":fajr = "05:25",shuruk="07:09",dhuhur="11:54", asr="14:06", maghrib="16:37", ishaa="18:16";	append();break;
        case "31/10/2017":fajr = "05:27",shuruk="07:12",dhuhur="11:54", asr="14:04", maghrib="16:35", ishaa="18:14";	append();break;
        case "01/11/2017":fajr = "05:29",shuruk="07:14",dhuhur="11:54", asr="14:02", maghrib="16:33", ishaa="18:12";	append();break;
        case "02/11/2017":fajr = "05:31",shuruk="07:16",dhuhur="11:54", asr="14:01", maghrib="16:31", ishaa="18:10";	append();break;
        case "03/11/2017":fajr = "05:32",shuruk="07:18",dhuhur="11:54", asr="13:59", maghrib="16:29", ishaa="18:08";	append();break;
        case "04/11/2017":fajr = "05:34",shuruk="07:20",dhuhur="11:54", asr="13:57", maghrib="16:27", ishaa="18:07";	append();break;
        case "05/11/2017":fajr = "05:36",shuruk="07:22",dhuhur="11:54", asr="13:56", maghrib="16:25", ishaa="18:05";	append();break;
        case "06/11/2017":fajr = "05:38",shuruk="07:24",dhuhur="11:54", asr="13:54", maghrib="16:23", ishaa="18:03";	append();break;
        case "07/11/2017":fajr = "05:39",shuruk="07:26",dhuhur="11:54", asr="13:53", maghrib="16:21", ishaa="18:01";	append();break;
        case "08/11/2017":fajr = "05:41",shuruk="07:28",dhuhur="11:55", asr="13:51", maghrib="16:19", ishaa="18:00";	append();break;
        case "09/11/2017":fajr = "05:43",shuruk="07:31",dhuhur="11:55", asr="13:50", maghrib="16:17", ishaa="17:58";	append();break;
        case "10/11/2017":fajr = "05:45",shuruk="07:33",dhuhur="11:55", asr="13:49", maghrib="16:15", ishaa="17:57";	append();break;
        case "11/11/2017":fajr = "05:46",shuruk="07:35",dhuhur="11:55", asr="13:47", maghrib="16:13", ishaa="17:55";	append();break;
        case "12/11/2017":fajr = "05:48",shuruk="07:37",dhuhur="11:55", asr="13:46", maghrib="16:11", ishaa="17:54";	append();break;
        case "13/11/2017":fajr = "05:50",shuruk="07:39",dhuhur="11:55", asr="13:45", maghrib="16:10", ishaa="17:52";	append();break;
        case "14/11/2017":fajr = "05:52",shuruk="07:41",dhuhur="11:55", asr="13:43", maghrib="16:08", ishaa="17:51";	append();break;
        case "15/11/2017":fajr = "05:53",shuruk="07:43",dhuhur="11:56", asr="13:42", maghrib="16:06", ishaa="17:50";	append();break;
        case "16/11/2017":fajr = "05:55",shuruk="07:45",dhuhur="11:56", asr="13:41", maghrib="16:05", ishaa="17:48";	append();break;
        case "17/11/2017":fajr = "05:57",shuruk="07:47",dhuhur="11:56", asr="13:40", maghrib="16:03", ishaa="17:47";	append();break;
        case "18/11/2017":fajr = "05:58",shuruk="07:49",dhuhur="11:56", asr="13:39", maghrib="16:02", ishaa="17:46";	append();break;
        case "19/11/2017":fajr = "06:00",shuruk="07:51",dhuhur="11:56", asr="13:38", maghrib="16:00", ishaa="17:45";	append();break;
        case "20/11/2017":fajr = "06:02",shuruk="07:53",dhuhur="11:57", asr="13:36", maghrib="15:59", ishaa="17:44";	append();break;
        case "21/11/2017":fajr = "06:03",shuruk="07:55",dhuhur="11:57", asr="13:36", maghrib="15:57", ishaa="17:43";	append();break;
        case "22/11/2017":fajr = "06:05",shuruk="07:57",dhuhur="11:57", asr="13:35", maghrib="15:56", ishaa="17:41";	append();break;
        case "23/11/2017":fajr = "06:07",shuruk="07:59",dhuhur="11:58", asr="13:34", maghrib="15:54", ishaa="17:40";	append();break;
        case "24/11/2017":fajr = "06:08",shuruk="08:01",dhuhur="11:58", asr="13:33", maghrib="15:53", ishaa="17:40";	append();break;
        case "25/11/2017":fajr = "06:10",shuruk="08:03",dhuhur="11:58", asr="13:32", maghrib="15:52", ishaa="17:39";	append();break;
        case "26/11/2017":fajr = "06:11",shuruk="08:04",dhuhur="11:59", asr="13:31", maghrib="15:51", ishaa="17:38";	append();break;
        case "27/11/2017":fajr = "06:13",shuruk="08:06",dhuhur="11:59", asr="13:30", maghrib="15:50", ishaa="17:37";	append();break;
        case "28/11/2017":fajr = "06:14",shuruk="08:08",dhuhur="11:59", asr="13:30", maghrib="15:49", ishaa="17:36";	append();break;
        case "29/11/2017":fajr = "06:16",shuruk="08:10",dhuhur="12:00", asr="13:29", maghrib="15:48", ishaa="17:35";	append();break;
        case "30/11/2017":fajr = "06:17",shuruk="08:11",dhuhur="12:00", asr="13:28", maghrib="15:47", ishaa="17:35";	append();break;
        case "01/12/2017":fajr = "06:18",shuruk="08:13",dhuhur="12:00", asr="13:28", maghrib="15:46", ishaa="17:34";	append();break;
        case "02/12/2017":fajr = "06:20",shuruk="08:15",dhuhur="12:01", asr="13:27", maghrib="15:45", ishaa="17:34";	append();break;
        case "03/12/2017":fajr = "06:21",shuruk="08:16",dhuhur="12:01", asr="13:27", maghrib="15:44", ishaa="17:33";	append();break;
        case "04/12/2017":fajr = "06:22",shuruk="08:18",dhuhur="12:02", asr="13:27", maghrib="15:44", ishaa="17:33";	append();break;
        case "05/12/2017":fajr = "06:24",shuruk="08:19",dhuhur="12:02", asr="13:26", maghrib="15:43", ishaa="17:32";	append();break;
        case "06/12/2017":fajr = "06:25",shuruk="08:21",dhuhur="12:02", asr="13:26", maghrib="15:42", ishaa="17:32";	append();break;
        case "07/12/2017":fajr = "06:26",shuruk="08:22",dhuhur="12:03", asr="13:26", maghrib="15:42", ishaa="17:32";	append();break;
        case "08/12/2017":fajr = "06:27",shuruk="08:24",dhuhur="12:03", asr="13:25", maghrib="15:41", ishaa="17:31";	append();break;
        case "09/12/2017":fajr = "06:28",shuruk="08:25",dhuhur="12:04", asr="13:25", maghrib="15:41", ishaa="17:31";	append();break;
        case "10/12/2017":fajr = "06:29",shuruk="08:26",dhuhur="12:04", asr="13:25", maghrib="15:41", ishaa="17:31";	append();break;
        case "11/12/2017":fajr = "06:30",shuruk="08:27",dhuhur="12:05", asr="13:25", maghrib="15:40", ishaa="17:31";	append();break;
        case "12/12/2017":fajr = "06:31",shuruk="08:28",dhuhur="12:05", asr="13:25", maghrib="15:40", ishaa="17:31";	append();break;
        case "13/12/2017":fajr = "06:32",shuruk="08:29",dhuhur="12:06", asr="13:25", maghrib="15:40", ishaa="17:31";	append();break;
        case "14/12/2017":fajr = "06:33",shuruk="08:30",dhuhur="12:06", asr="13:25", maghrib="15:40", ishaa="17:31";	append();break;
        case "15/12/2017":fajr = "06:34",shuruk="08:31",dhuhur="12:07", asr="13:25", maghrib="15:40", ishaa="17:31";	append();break;
        case "16/12/2017":fajr = "06:35",shuruk="08:32",dhuhur="12:07", asr="13:26", maghrib="15:40", ishaa="17:31";	append();break;
        case "17/12/2017":fajr = "06:35",shuruk="08:33",dhuhur="12:08", asr="13:26", maghrib="15:40", ishaa="17:31";	append();break;
        case "18/12/2017":fajr = "06:36",shuruk="08:34",dhuhur="12:08", asr="13:26", maghrib="15:40", ishaa="17:32";	append();break;
        case "19/12/2017":fajr = "06:37",shuruk="08:34",dhuhur="12:08", asr="13:26", maghrib="15:41", ishaa="17:32";	append();break;
        case "20/12/2017":fajr = "06:37",shuruk="08:35",dhuhur="12:09", asr="13:27", maghrib="15:41", ishaa="17:32";	append();break;
        case "21/12/2017":fajr = "06:38",shuruk="08:36",dhuhur="12:09", asr="13:27", maghrib="15:41", ishaa="17:33";	append();break;
        case "22/12/2017":fajr = "06:38",shuruk="08:36",dhuhur="12:10", asr="13:28", maghrib="15:42", ishaa="17:33";	append();break;
        case "23/12/2017":fajr = "06:39",shuruk="08:37",dhuhur="12:10", asr="13:28", maghrib="15:42", ishaa="17:34";	append();break;
        case "24/12/2017":fajr = "06:39",shuruk="08:37",dhuhur="12:11", asr="13:29", maghrib="15:43", ishaa="17:34";	append();break;
        case "25/12/2017":fajr = "06:39",shuruk="08:37",dhuhur="12:11", asr="13:29", maghrib="15:44", ishaa="17:35";	append();break;
        case "26/12/2017":fajr = "06:40",shuruk="08:37",dhuhur="12:12", asr="13:30", maghrib="15:45", ishaa="17:36";	append();break;
        case "27/12/2017":fajr = "06:40",shuruk="08:37",dhuhur="12:12", asr="13:31", maghrib="15:45", ishaa="17:36";	append();break;
        case "28/12/2017":fajr = "06:40",shuruk="08:38",dhuhur="12:13", asr="13:32", maghrib="15:46", ishaa="17:37";	append();break;
        case "29/12/2017":fajr = "06:40",shuruk="08:38",dhuhur="12:13", asr="13:32", maghrib="15:47", ishaa="17:38";	append();break;
        case "30/12/2017":fajr = "06:40",shuruk="08:37",dhuhur="12:14", asr="13:33", maghrib="15:48", ishaa="17:39";	append();break;
        case "31/12/2017":fajr = "06:40",shuruk="08:37",dhuhur="12:14", asr="13:34", maghrib="15:49", ishaa="17:40";	append();break;
    }
}

