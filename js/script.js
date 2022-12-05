// hieronder worden de variabele aangemaakt voor de navigatie en de menuknop
var button = document.querySelector(".hamburger");

var nav = document.querySelector("nav")

// de fucntie 'togglemenu' wordt aangemaakt, en de nav variabele krijgt een actie toegewezen,
// deze actie staat in de CSS als .toonMenu,
// de 'button' variabele krijgt de actie toegewezen die ervoor zorgt dat de functie van het .toonMenu
// wordt geactiveerd, dmv een click

function toggleMenu(event) {
    nav.classList.toggle("toonMenu");
}
button.addEventListener("click", toggleMenu);

//variable voor de button die de functie activeerd
var knopRandom = document.querySelector(".knopRandom")

//hieronder de variabele voor de naam van het paard (de H1)
var randomPaardNaam = document.querySelector(".headingPaardNaam")

//hieronder de keuzes waaruit de randomfunctie kan kiezen
var randomNamen = ["Johny","Johnson","Jonathan","Johnsontje","John","Joey","Rowan"]

//hieronder is de fucntie gemaakt die ervoor zorgt dat de H1 gemanipuleert wordt met random namen
// en in de console.log wordt de hoeveelheid (length) van namen in de array getoond
function toonRandomPaardNaam() {
    var randomNaam = Math.random()* randomNamen.length ;
console.log("namen",randomNamen.length)

randomNaam = Math.floor(randomNaam);
    randomPaardNaam.textContent = randomNamen[randomNaam];
}

// hiermee wordt de bovenstaande functie daadwerkelijk uitgevoerd met een actie, 
// wat ervoor zorgt dat er bij een klik op de knop een random naam komt te staan in de H1
knopRandom.addEventListener("click",toonRandomPaardNaam,false);

// ik wil graag dat er een reactie komt op de de randomnizer met de juiste naam: Johny.
// dus dat als er op de random naam knop wordt gedrukt, en de naam komt op Johny terecht,
// dat de console dus de true statement toont (of false, in het geval dat er een 'verkeerde
// naam staat).
var Johny = randomNamen[0]; true; 

function juisteNaam() {
    if (Johny === randomNamen[0],true) {
        console.log("Dat is de juiste naam!")
    } else === (randomNamen){1, 2, 3, 4, 5, 6} {
        console.log("Nee, raad maar door..")
    }
}

juisteNaam();




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

