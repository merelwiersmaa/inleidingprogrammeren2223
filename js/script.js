///////////////////////////////////////////
////////VARIABELEN VOOR DIT SCRIPT//////// 
//////////////////////////////////////////

// hieronder worden de variabele aangemaakt voor het hamburger-icoonknop, de nav (waarin de kleuren staan) en het logo.
var button = document.querySelector(".hamburger");

var nav = document.querySelector("nav");

var logo = document.querySelector(".logo");

//variable voor de randomknop die in de functie van random namen wordt gebruikt
var knopRandom = document.querySelector(".knopRandom");

//hieronder de variabele voor de naam van het paard (de H1), deze wordt steeds aangepast bij het randomnizen
var randomPaardNaam = document.querySelector(".headingPaardNaam");

//hieronder de keuzes waaruit de randomfunctie kan kiezen (deze komen dus steeds in de H1)
var randomNamen = ["Johny","Johnson","Jonathan","Johnsontje","John","Joey","Rowan"];
var randomNaam;

// hieronder het P element die gewijzigd wordt tijdens het randomizen
var pElement = document.querySelector("p")

// hieronder zijn de variabelen voor de kleurenknoppen waarmee van kleur wordt veranderd
var vachtkleur1 = document.querySelector(".vachtkleur1");

var vachtkleur2 = document.querySelector(".vachtkleur2");

var vachtkleur3 = document.querySelector(".vachtkleur3");

var manenkleur1 = document.querySelector(".manenkleur1");

var manenkleur2 = document.querySelector(".manenkleur2");

var manenkleur3 = document.querySelector(".manenkleur3");

var uitrustingkleur1 = document.querySelector(".uitrustingkleur1");

var uitrustingkleur2 = document.querySelector(".uitrustingkleur2");

var uitrustingkleur3 = document.querySelector(".uitrustingkleur3");

//https://www.epidemicsound.com/sound-effects/
var audioHinniken = new Audio("./sound/hinniken.mp3");

//https://www.epidemicsound.com/sound-effects/
var audioMuisKlik = new Audio("./sound/muisKlik.mp3");

//////////////////////////////////////
////////// HAMBURGER MENU ///////////
//////////////////////////////////////


// de functie 'togglemenu' wordt aangemaakt, en de nav variabele krijgt een actie toegewezen:
// deze actie staat in de CSS als .toonMenu,
// de 'button' variabele krijgt de actie toegewezen die ervoor zorgt dat de functie van het .toonMenu
// wordt geactiveerd, dmv een click
function toggleMenu(event) {
    nav.classList.toggle("toonMenu");
    audioMuisKlik.play();
}
button.addEventListener("click", toggleMenu);


/////////////////////////////////////////////////////////
/////////// RANDOMIZER VAN NAMEN UIT DE ARRAY //////////
////////////////////////////////////////////////////////


//hieronder is de functie gemaakt die ervoor zorgt dat de H1 gemanipuleert wordt met random namen
// en in de console.log wordt de hoeveelheid (length) van namen in de array getoond
function toonRandomPaardNaam() {
    randomNaam = Math.random()* randomNamen.length ;
    console.log("namen",randomNamen.length)

    var randomNaam = Math.floor(randomNaam);
    randomPaardNaam.textContent = randomNamen[randomNaam];
    juisteNaam(randomNamen[randomNaam])

    audioMuisKlik.play();
}

// hiermee wordt de bovenstaande functie daadwerkelijk uitgevoerd met een actie, 
// wat ervoor zorgt dat er bij een klik op de knop een random naam komt te staan in de H1
knopRandom.addEventListener("click",toonRandomPaardNaam,false);


/////////////////////////////////////////////////////////////////////////////
////////// IF-ELSE STATEMENT MET CONSOLE LOG EN LOGO RONDDRAAIEN ////////////
////////////////////////////////////////////////////////////////////////////


// als via de random-knop 'johny' op de h1 tevoorschijn komt, zegt de console 'dat is de juiste naam!'
// hierbij doet het logo rechtbovenin ook een rondje draaien, zie 'animatie'. deze actie wordt uit de css gehaald en hier geactiveerd
// zo niet, dan zegt de console 'nee, raad maar door'
function juisteNaam(naam) {
    console.log('@@--', naam)
    if (naam == 'Johny'){
        console.log("Dat is de juiste naam!"); 
        pElement.innerHTML = "Dat is de juiste naam!!";
        logo.classList.add("animatie");
        audioHinniken.play();
    } else {
        console.log("Nee, raad maar door..");
        logo.classList.remove("animatie");
        pElement.innerHTML = " ";
    }
}


//////////////////////////////////////////////////
////////// PAARD CUSTOMIZEN FUNCTIES ////////////
/////////////////////////////////////////////////


// hieronder de VACHT die wordt veranderd via de kleurenknoppen
var paard = document.querySelector(".paard");

function paardBruin() {
    paard.src = "./images/paardVachtBruin.png";
    audioMuisKlik.play();
    }

vachtkleur1.addEventListener("click", paardBruin);

function paardZwart() {
    paard.src = "./images/paardVachtZwart.png";
    audioMuisKlik.play();
    }

vachtkleur2.addEventListener("click", paardZwart);

function paardVos() {
    paard.src = "./images/paardVachtVos.png";
    audioMuisKlik.play();
    }

vachtkleur3.addEventListener("click", paardVos);



//hieronder dezelfde vacht + manenkleur wordt veranderd
function paardVosBlondeManen() {
    paard.src = "./images/paardVosVachtBlondManen.png";
    audioMuisKlik.play();
    }

manenkleur1.addEventListener("click", paardVosBlondeManen);

function paardBruinZwarteManen() {
    paard.src = "./images/paardBruinVachtZwartManen.png";
    audioMuisKlik.play();
    }

manenkleur2.addEventListener("click", paardBruinZwarteManen);

function paardZwartWitteManen() {
    paard.src = "./images/paardZwartVachtWitManen.png";
    audioMuisKlik.play();
    }

manenkleur3.addEventListener("click", paardZwartWitteManen);

//hieronder dezelfde vacht & manenkleur + uitrusting wordt veranderd
function paardVosBlondBlauweUitrusting() {
    paard.src = "./images/paardVosBlondBlauweUitrusting.png";
    audioMuisKlik.play();
    }

uitrustingkleur1.addEventListener("click", paardVosBlondBlauweUitrusting);

function paardZwartWitPaarseUitrusting() {
    paard.src = "./images/paardZwartWitPaarseUitrusting.png";
    audioMuisKlik.play();
    }

uitrustingkleur2.addEventListener("click", paardZwartWitPaarseUitrusting);

function paardBruinZwartGroeneUitrusting() {
    paard.src = "./images/paardBruinZwartGroeneUitrusting.png";
    audioMuisKlik.play();
    }

uitrustingkleur3.addEventListener("click", paardBruinZwartGroeneUitrusting);