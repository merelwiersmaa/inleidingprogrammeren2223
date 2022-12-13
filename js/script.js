// hieronder worden de variabele aangemaakt voor de navigatie en de menuknop
var button = document.querySelector(".hamburger");

var nav = document.querySelector("nav");

var logo = document.querySelector(".logo");
// de fucntie 'togglemenu' wordt aangemaakt, en de nav variabele krijgt een actie toegewezen,
// deze actie staat in de CSS als .toonMenu,
// de 'button' variabele krijgt de actie toegewezen die ervoor zorgt dat de functie van het .toonMenu
// wordt geactiveerd, dmv een click

function toggleMenu(event) {
    nav.classList.toggle("toonMenu");
}
button.addEventListener("click", toggleMenu);

//variable voor de button die de functie activeerd
var knopRandom = document.querySelector(".knopRandom");

//hieronder de variabele voor de naam van het paard (de H1)
var randomPaardNaam = document.querySelector(".headingPaardNaam");

//hieronder de keuzes waaruit de randomfunctie kan kiezen
var randomNamen = ["Johny","Johnson","Jonathan","Johnsontje","John","Joey","Rowan"];
var randomNaam;

//hieronder is de fucntie gemaakt die ervoor zorgt dat de H1 gemanipuleert wordt met random namen
// en in de console.log wordt de hoeveelheid (length) van namen in de array getoond
function toonRandomPaardNaam() {
    randomNaam = Math.random()* randomNamen.length ;
    console.log("namen",randomNamen.length)

    var randomNaam = Math.floor(randomNaam);
    randomPaardNaam.textContent = randomNamen[randomNaam];
    juisteNaam(randomNamen[randomNaam])
}

// hiermee wordt de bovenstaande functie daadwerkelijk uitgevoerd met een actie, 
// wat ervoor zorgt dat er bij een klik op de knop een random naam komt te staan in de H1
knopRandom.addEventListener("click",toonRandomPaardNaam,false);

// ik wil graag dat er een reactie komt op de de randomnizer met de juiste naam: Johny.
// dus dat als er op de random naam knop wordt gedrukt, en de naam komt op Johny terecht,
// dat de console dus de true statement toont (of false, in het geval dat er een 'verkeerde
// naam staat).

// LOGO MOET RONDDRAAIEN BIJ DE NAAM 'JOHNY'

function animatie(event) {
    logo.classList("animatie");
}

function juisteNaam(naam) {
    console.log('@@--', naam)
    if (naam == 'Johny'){
        console.log("Dat is de juiste naam!"); 
        logo.classList.add("animatie");
    } else {
        console.log("Nee, raad maar door..")
        logo.classList.remove("animatie");
    }
}








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

// hieronder de VACHT die wordt veranderd via de kleurenknoppen

var paard = document.querySelector(".paard");

function paardBruin() {
    paard.src = "./images/paardVachtBruin.png";
    }

vachtkleur1.addEventListener("click", paardBruin);

function paardZwart() {
    paard.src = "./images/paardVachtZwart.png";
    }

vachtkleur2.addEventListener("click", paardZwart);

function paardVos() {
    paard.src = "./images/paardVachtVos.png";
    }

vachtkleur3.addEventListener("click", paardVos);



//hieronder dezelfde vacht + manenkleur wordt veranderd

function paardVosBlondeManen() {
    paard.src = "./images/paardVosVachtBlondManen.png";
    }

manenkleur1.addEventListener("click", paardVosBlondeManen);

function paardBruinZwarteManen() {
    paard.src = "./images/paardBruinVachtZwartManen.png";
    }

manenkleur2.addEventListener("click", paardBruinZwarteManen);

function paardZwartWitteManen() {
    paard.src = "./images/paardZwartVachtWitManen.png";
    }

manenkleur3.addEventListener("click", paardZwartWitteManen);

//hieronder dezelfde vacht & manenkleur + uitrusting wordt veranderd

function paardVosBlondBlauweUitrusting() {
    paard.src = "./images/paardVosBlondBlauweUitrusting.png";
    }

uitrustingkleur1.addEventListener("click", paardVosBlondBlauweUitrusting);

function paardZwartWitPaarseUitrusting() {
    paard.src = "./images/paardZwartWitPaarseUitrusting.png";
    }

uitrustingkleur2.addEventListener("click", paardZwartWitPaarseUitrusting);

function paardBruinZwartGroeneUitrusting() {
    paard.src = "./images/paardBruinZwartGroeneUitrusting.png";
    }

uitrustingkleur3.addEventListener("click", paardBruinZwartGroeneUitrusting);