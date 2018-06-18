/**
 * Created by muneebashraf on 21/04/2017.
 */

//Sætter en flexibel højde på program diven
var biggestHeight = 0;
function height() {
    $(".programmer > *").each(function () {
        if($(this).height() > biggestHeight){
            biggestHeight = $(this).height();
        }else if($(show_today.div).height() < biggestHeight) {
            biggestHeight = $(this).height();

        }});
    $(".programmer").animate({
        height:biggestHeight
    },400)
}

var loop = setInterval( height , 1000 );
var offset = 0;

var stateObj = { programmer: "programmer" };



upToDate={show_name: "upToDate", div: ".program-upto", header: 'Up to date'};
toppenAfIsbjerget={show_name: "toppenAfIsbjerget", div: ".program-isbjerg", header: 'Isbjerget'};
turMedKultur={show_name: "turMedKultur", div: ".program-turKultur", header: 'Tur med kultur'};
samfundsdebatten={show_name: "samfundsdebatten", div: ".program-samfund", header: 'Samfund'};
apropos={show_name: "apropos", div: ".program-apropos", header: 'Apropos'};
aktivister={show_name: "aktivister", div: ".program-aktivister", header: 'Aktivister'};
enFamilieTing={show_name: "enFamilieTing", div: ".program-familie", header: 'Familie'};
var shows = [upToDate,toppenAfIsbjerget,turMedKultur,samfundsdebatten,apropos,aktivister,enFamilieTing];
var show_today;





switch (new Date().getDay()){
    case 1: show_today =upToDate;
            $(".upto").addClass('active');
        break;
    case 2: show_today =toppenAfIsbjerget;
            $(".isbjerg").addClass('active');
        break;
    case 3: show_today =turMedKultur;
            $(".turKultur").addClass('active');
        break;
    case 4: show_today =samfundsdebatten;
            $(".samfund").addClass('active');
        break;
    case 5: show_today =apropos;
            $(".apropos").addClass('active');
        break;
    case 6: $(".aktivister").addClass('active');
            show_today =aktivister;
        break;
    case 0: $(".familie").addClass('active');
            show_today =enFamilieTing;
        break;
}

visibleShow();

$(document).on('click','.programsMini li',function () {
    if(!$(this).find('div').parent().hasClass('active')){
    offset = 0;

    hideShow();
    var clickedShow = ".program-" + $(this).find('div').attr("class");
    for (var i = 0 ; i < shows.length ; i++){
        if (shows[i].div === (clickedShow)){
            show_today= shows[i]
        }
    }
    visibleShow()
    $(this).find('div').parent().addClass('active');
        return false;
    }
});

//klik på hvilken som helst af de to faner
$(document).on('click','.oldShowsTab, .currentShowsTab',function () {

    //check hvis IKKE "tidligere shows" har klassen activeShowTab(activeShowTab ændrer fanen der aktiv fra tidligere til nuværende)
    if(!$(".oldShowsTab").hasClass('activeShowTab'))
    {
        //Hvis ikke den har, så tilføj klassen activeShowTab
        $(".oldShowsTab").addClass('activeShowTab');

        //Vis tidligere shows over 3 trin
        // 1. check hvis den allerede har klassen slideOutRight og fjerne hvis den har
        // 2. tilføj klassen slideInRight til "tidligere shows og animated
        // (den har i forvejen en visibilty:hidden og animated sætter visibility:visible)
        // 3. tilføje slideOutLeft klassen til nuværende shows
            $(".oldPrograms").removeClass('slideOutLeft');
            $(".oldPrograms").addClass('animated slideInLeft');
            $(".currentPrograms").addClass('slideOutRight');
            setTimeout(function(){$(".currentPrograms").hide()}, 1000);
    } else {

        //hvis allerede har activeShowTab så gør den sådan set bare det omvendte af de ovenstående 3 trin.
        $(".oldShowsTab").removeClass('activeShowTab')
            $(".currentPrograms").removeClass('slideOutRight');
            $(".currentPrograms").show().addClass('slideInRight');
            $(".oldPrograms").addClass('slideOutLeft');
    }

});


// click på vis mere
$(document).on('click','#vis',function () {
    // set højde og animere footeren til at rykke sig
    biggestHeight += 550;
    $(".programmer").animate({
        height:biggestHeight
    },800)

    //parameter der sendes til php der får offset til at stige
    offset += 6;

    //hent nye podcasts
    addPodcasts();

    //se om der er flere podcasts ellers fjern knappen
    showMore()
});

function hideShow() {
    $(show_today.div +' > .podcastsPlayer').empty();
    $(show_today.div).addClass('is_hidden');
    $(".programmer > .is_hidden ").show();
    $(show_today.div).removeClass('is_visible');
    $(".programsMini li").removeClass('active');
    setTimeout(function(){ $(".programmer > .is_hidden ").hide();$(".programmer > div").removeClass('is_hidden'); }, 1000);

    if (window.matchMedia('(max-width: 44.1875em)').matches) {
        $('html, body').animate({
            scrollTop: $(".programHeadline").offset().top - 20
        }, 1500);
    }}

function visibleShow() {
    $(".programHeadline").fadeOut(function() {
        $(this).text(show_today.header).fadeIn();
    });
    $(show_today.div).addClass('is_visible');
    showMore()
    addPodcasts();
}

function addPodcasts(){
    $.get('../download_podcasts.php?show_name=' + show_today.show_name + "&offset=" + offset + "&limit=6",
        function (response) {
            //tilføjer podcastne med en fadeIn effect
            $(response).hide().appendTo(show_today.div +' > .podcastsPlayer').fadeIn(1000);

            //offset stiger med 1 efter den er kaldt første gang
            offset++;

            //kører setup på både det barn af podcastPlayer der er nummer "offset"(altså 0 til at
            // starte med og så 6 når der klikkes på vis mere sov) og alle børn derefter.
            plyr.setup('.is_visible > div.podcastsPlayer > div:nth-child(n+'+ offset +')');

            //trækker en fra offset igen, der ændres kun før og efter linjen
            // foroven, så den stadig sender det rigtige tal med i get request til php
            --offset;
        }
    )
}

//sender en request der returnere enten 0 eller antallet af linjer der bliver hente fra databasen
function showMore() {
    $.get('../showMore.php?show_name=' + show_today.show_name + "&offset=" + offset + "&limit=6",
        function (response) {
        //hvis mindre end 6 bliver returneret er det logisk at der ikke er flere podcasts og knappen skjules
            if (response < 6){
                $(".is_visible > .showMore").hide();
            } else {
                //vis knappen igen når der skiftes mellem shows
                $(".is_visible > .showMore").show();
            }

        }
    )

}



window.onpopstate = function(event) {
};
/*
addPodcasts("07:02-2017.mp3","Vært: Abu Karim<br>Profil: Nødhjælpsarbejder, skuespiller og meget andet<br>Gæst: Khalid Alsubeihi");

addPodcasts("https://soundcloud.com/bachir-kurdi/apropos-med-elias-rama","Vært: Johannes<br>Gæster: Omar El-khatib & Abu Yunes<br>Dato: 17/04-2017");
addPodcasts("https://soundcloud.com/bachir-kurdi/apropos-med-elias-rama","Vært: Johannes<br>Gæster: Engin Bozkir & Elias Rama<br>Dato: 10/04-2017");
addPodcasts("https://soundcloud.com/bachir-kurdi/apropos-med-elias-rama","Vært: Johannes<br>Gæster: Elias Rama<br>Dato: 02/04-2017");
addPodcasts("https://soundcloud.com/bachir-kurdi/apropos-med-elias-rama","Vært: Johannes<br>Gæster: Engin Bozkir & Elias Rama<br>Dato: 27/03-2017");
addPodcasts("https://soundcloud.com/bachir-kurdi/apropos-med-elias-rama","Vært: Johannes<br>Gæster: Engin Bozkir & Abu Yunes<br>Dato: 20/03-2017");
addPodcasts("https://soundcloud.com/bachir-kurdi/apropos-med-elias-rama","Vært: Johannes<br>Gæst: Engin Bozkir<br>Dato: 13/03-2017");
addPodcasts("https://soundcloud.com/bachir-kurdi/apropos-med-elias-rama","Vært: Johannes & Abu Yunes<br>Gæst: Engin Bozkir<br>Dato: 06/03-2017");
addPodcasts("https://soundcloud.com/bachir-kurdi/apropos-med-elias-rama","Vært: Elias Rama<br>Gæst: Lamies Nassri<br>Dato: 27/02-2017");
addPodcasts("https://soundcloud.com/bachir-kurdi/apropos-med-elias-rama","Vært: Johannes<br>Gæst:  Tarek Ghanoum<br>Dato: 20/02-2017");
addPodcasts("https://soundcloud.com/bachir-kurdi/apropos-med-elias-rama","Vært: Johannes<br>Gæst: Abdullahi Hassan<br>Dato: 13/02-2017");
addPodcasts("https://soundcloud.com/bachir-kurdi/apropos-med-elias-rama","Vært: Elias Rama<br>Gæst: Tarek Ghanoum<br>Dato: 06/02-2017");


function isbjerg() {
    $(".podcastsPlayer").empty();
addPodcasts("07:02-2017.mp3","Vært: Abu Karim<br>Profil: Nødhjælpsarbejder, skuespiller og meget andet<br>Gæst: Khalid Alsubeihi");
addPodcasts("14:02-2017.mp3","Vært: Abu Karim<br>Profil: Professionel fighter & sociale pædagog<br>Gæst: Rhassan Muhareb");
addPodcasts("21:02-2017.mp3","Vært: Abu Karim<br>Profil: Tidligere topkriminel<br>Gæst: Abu Yunes");
addPodcasts("28:02-2017.mp3","Vært: Abu Karim<br>Profil: Ung iværksætter<br>Gæst: Kareem Ahmed");
addPodcasts("07-03-2017.mp3","Vært: Abu Karim<br>Profil: Dokumentarist & forfatter<br>Gæst: Nagieb Khaja");
addPodcasts("14-03-2017.mp3","Vært: Abu Karim<br>Profil: Stifter af Kamelmælk Danmark<br>Gæst: Pernille Lykke Christoffersen");
addPodcasts("21-03-2017.mp3","Værter: Abu Karim<br>Emne: Mohammad Ali<br>Gæst: Saleh Mbamba");
addPodcasts("28-03-2017.mp3","Værter: Abu Karim<br>Emne: Radio WAIH<br>Gæst:");
addPodcasts("04-04-2017.mp3","Værter: Abu Karim<br>Profil: Verdenskendte nasheed-sanger<br>Gæst: Mohanad Mansour");
addPodcasts("11-04-2017.mp3","Værter: Aysha Farooqui<br>Profil: Læge og medstifter af NGO<br>Gæst: Uswa Nissar Anjum");
addPodcasts("18-04-2017.mp3","Værter: Aysha Farooqui<br>Profil: Læge & digter<br>Gæst: Amna Shah Syed");
    plyr.setup();
    stateObj = { programmer: "programmer" };
    history.pushState(stateObj, "page 1", "#ToppenAfIsbjerget");
}

function turKultur(){
    $(".podcastsPlayer").empty();
addPodcasts("08:02-2017.mp3","Vært: Aysha Farooqui<br>Emne: Kulturens rolle hos danske muslimer<br>Gæst: Kaoutar Elhamss");
addPodcasts("01:03-2017.mp3","Vært: Johannes<br>Emne: Fordomme og diskrimination<br>Gæst: Alisher Ceran");
addPodcasts("15-03-2017.mp3","Vært: Johannes<br>Emne: Hadsforbrydelser imod muslimer<br>Gæst: Farouk Hassouni");
addPodcasts("22-03-2017.mp3","Vært: Johannes<br>Emne: Danske muslimer med pakistanske rødder<br>Gæst: Arsal Tahseen");
addPodcasts("29-03-2017.mp3","Vært: Johannes<br>Emne: Danske muslimer med somaliske rødder<br>Gæst: Adam & Abdighani");
addPodcasts("05-04-2017.mp3","Vært: Johannes<br>Emne: Danske muslimer med jyske rødder<br>Gæst: Dean Abdullah");
addPodcasts("12-04-2017.mp3","Vært: Johannes<br>Emne: Danske muslimer med albanske rødder<br>Gæst: Lavdrim Elmazi");
addPodcasts("19-04-2017.mp3","Vært: Johannes<br>Emne: Danske muslimer med tyrkiske rødder<br>Gæst: Burhan Bayhan");
addPodcasts("26-04-2017.mp3","<br>Vært: Johannes<br>Emne: Recap af En tur med kultur<br>");
addPodcasts("10-05-2017.mp3","Vært: Johannes<br>Emne: Danske muslimer med afghanske rødder<br>Gæst: Ahmad Masood Popal");
    plyr.setup();
    stateObj = { programmer: "programmer" };
    history.pushState(stateObj, "page 2", "#TurKultur");
}

function samfund(){
    $(".podcastsPlayer").empty();
    addPodcasts("02:02-2017.mp3","Vært: Elias Rama<br>Emne: Er muslimerne ved at blive medie-fobiske<br> Gæst: Omar El-Khatib");
    addPodcasts("09:02-2017.mp3","Vært: Elias Rama<br>Emen: Dansk muslim med albanske rødder<br> Gæst:Belkisa Selmani");
    addPodcasts("16:02-2017.mp3","Vært: Elias Rama<br>Emne: Bør islam reformeres?<br>Gæst: Taimullah Abu Laban");
    addPodcasts("23:02-2017.mp3","Vært: Elias Rama<br>Emne: Forbydelse af bederum, en løsning eller symbolpolitik?<br>Gæst: Safia Aoude");
    addPodcasts("02-03-2017.mp3","Vært: Elias Rama<br>Emner: Bederum & Forholdet mellem politikere og borgere<br>Gæster: Madhiha Shafiqi & Tore Lindvang");
    addPodcasts("09-03-2017.mp3","Vært: Lamies Nassri<br>Emne: Amanah Rådgivning,<br>en telefonisk rådgivningslinje for unge muslimer<br>Gæster: Safiya Abu Laban & Yara Issa");
    addPodcasts("16-03-2017.mp3","Vært: Elias Rama<br>Emne: EU-dommen for fyring på baggrund af religiøse symboler<br>Gæst: Tore Lindvang");
    addPodcasts("23-03-2017.mp3","Vært: Elias Rama<br>Emne: Har danske muslimer særlige udfordringer med integration?<br>Gæst: Abdelkarim Khamal");
    addPodcasts("30-03-2017.mp3","Vært: Elias Rama<br>Emne: Er troen på gud et minus på CV'et<br>Gæst: Omar El-khatib");
    addPodcasts("06-04-2017.mp3","Vært: Elias Rama<br>Emne: Kemisk angreb i Syrien<br>Gæster: Bilal Abdul Kareem og Khalid Al Subeihi");
    addPodcasts("13-04-2017.mp3","Vært: Elias Rama<br>Emne: Er Islam et tilvalg, hvor et arbejde er fravalget?<br>Gæst: Aqeel Abu Osama");
    addPodcasts("20-04-2017.mp3","Vært: Lamies Nassri<br>Emne: Stereotyper, repræsentation og tilhørsforhold.<br>Gæster: Amani Hassani,  Salma Elharjani & Fatima Awad");
    addPodcasts("27-04-2017.mp3","Vært: Lamies Nassri<br>Emne: Uddannelsesjunglen - do's and dont's<br>Gæster: Naual Kharbouch, Omar Salame & Mona El Hichou");
    addPodcasts("04-05-2017.mp3","Vært: Elias Rama<br>Emne: Aktivering, ringer det nogle klokker?<br>Gæster: Qasam N. Ahmad");
    plyr.setup();
    stateObj = { programmer: "programmer" };
    history.pushState(stateObj, "page 3", "#Samfund");
}

function apropos(){
    $(".podcastsPlayer").empty();
    addPodcasts("03:02-2017.mp3","Vært: Zainab Nasrati<br>Emne: Empati<br>Gæst: Ali Nicolaisen");
    addPodcasts("10:02-2017.mp3","Vært: Lubna Ahmed<br>Emne: Tonen i den offentlige debat<br>Gæst: Digter og debattør, Özcan Ajrulovski");
    addPodcasts("17:02-2017.mp3","Vært:Zainab Nasrati<br>Emne: Mindfulnessog den muslimske bøn <br>Gæst: Sprogpsykolog og mentor Hamida Naji");
    addPodcasts("24:02-2017.mp3","Vært: Aysha Farooqui<br>Emne: Uddannelsespres <br>Gæst: Jeannett Skov");
    addPodcasts("03-03-2017.mp3","Vært: Zainab Nasrati<br>Emne: Drømme for Danmark...<br>Gæster: Caroline Ousager & Osama Samsam ");
    addPodcasts("10-03-2017.mp3","Værter: Aysha Farooqui og Elias Rama<br>Emne: Nike's hijab, inklusion eller kapitalisering?<br>Gæster: Zarife Øzcan, Karima Doui og Laila Kristensen Rashid");
    addPodcasts("17-03-2017.mp3","Vært: Elias Rama<br>Emne: Old School vs. New School<br>Gæste: Imran Shah");
    addPodcasts("24-03-2017.mp3","Vært: Zainab Nasrati<br>Emne: Studiets ruter<br>Gæste: Samya Adnan & Mikkel Zacho Storm");
    addPodcasts("31-03-2017.mp3","Vært: Aysha Farooqui<br>Emne: Kropsidealer, skønhed og selvtillid blandt danske unge<br>Gæster:  Amina Djondjorova & Arshia Arshad");
    addPodcasts("14-04-2017.mp3","Vært: Aysha Farooqui<br>Emne: Mediernes muslim, SKAM og brdr. Prices halalkød<br>Gæster: Elias Rama og Sara H ");
    addPodcasts("21-04-2017.mp3","Vært: Elias Rama<br>Emne: fitnesskultur & dens sociale følger <br>Gæster:  Zaid Nasrati ");
    addPodcasts("28-04-2017.mp3","Vært: Zainab Nasrati<br>Emne: Somalisk sundhedsforbund<br>Gæster:  Hafsa Halane & Adar Mohamed Hassan");
    addPodcasts("05-05-2017.mp3","Vært: Zainab Nasrati<br>Emne: En kulturrig brudestylist<br>Gæster:  Iman Rose");
    stateObj = { programmer: "programmer" };
    history.pushState(stateObj, "page 4", "#Apropos");
}

function aktivister(){
    $(".podcastsPlayer").empty();
    addPodcasts("06-05-2017.mp3","Vært: Zainab Nasrati<br>Emne: Aktivisme<br>Gæst: Elias Rama");
    stateObj = { programmer: "programmer" };
    history.pushState(stateObj, "page 5", "#Aktivister");
}

function familie(){
    $(".podcastsPlayer").empty();
    addPodcasts("05:02-2017.mp3","Vært: Haisam Talat<br>Emne: Familien i et sociologisk perspektiv<br>Gæst: Sociolog, Ahmad Durani");
    addPodcasts("19:02-2017.mp3", "Værter: Haisam Talat & Bamba Diop<br>Emne: Den alternative familie fra gaden<br>Gæst: Abdel- Jaleel Lundberg Darku");
    addPodcasts("26:02-2017.mp3",  "Vært: Haisam Talat<br>Emne: En sjov familieting<br>Gæst: Abdullah Gh.");
    addPodcasts("05-03-2017.mp3",  "Vært: Haisam Talat & Bamba Diop<br>Emne: 'De 7 gyldne råd til børneopdragelse'<br>Gæst: Waseem Rana");
    addPodcasts("12-03-2017.mp3", "Vært: Haisam Talat & Bamba Diop<br>Emne: De 7 gyldne råd til børneopdragelse Del2<br>Gæst: Waseem Rana");
    addPodcasts("19-03-2017.mp3", "Vært: Haisam Talat<br>Emne: Kriminelle liv VS Familie liv<br>Gæst: Raza");
    addPodcasts("26-03-2017.mp3", "Vært: Haisam Talat<br>Emne: En sjov familieting<br>Gæst: Hussam Al-Mashadani");
    addPodcasts("09-04-2017.mp3",  "Vært: Haisam Talat<br>Emne: Hjælp mine børn er på gaden<br>Gæst: Omar Achikhane & Abdel- Jaleel Lundberg Darku");
    addPodcasts("23-04-2017.mp3",  "Vært: Haisam Talat<br>Emne: Misbrug i hjemmet<br>Gæst: Erik Hansen");
    addPodcasts("30-04-2017.mp3",  "Vært: Haisam Talat<br>Emne: En sjov familie ting, ægteskabsprocessen<br>Gæst: Tahir Mirza");
    addPodcasts("07-05-2017.mp3",  "Vært: Haisam Talat<br>Emne: Det der samler familien<br>Gæst: Abdel- Jaleel Lundberg Darku");
    stateObj = { programmer: "programmer" };
    history.pushState(stateObj, "page 6", "#Familie");
}
 */
