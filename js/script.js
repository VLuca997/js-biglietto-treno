// Chiedere all'utente il numero di chilometri da percorrere
const km = parseFloat(prompt("Inserisci il numero di chilometri da percorrere:"));




// Chiedere all'utente l'età del passeggero
const age = parseInt(prompt("Inserisci l'età del passeggero:"));




// Calcolare il prezzo del biglietto
const ticketPrice = km * 0.21; // Prezzo del biglietto in base ai chilometri




// Sconto in base all'età
const discount = 0; // Valore percentuale dello sconto

if (age < 18) {
  discount = 20; // Sconto del 20% per i minorenni
  ticketPrice *= 0.8; // Applicare lo sconto al prezzo del biglietto
} 
else if (age >= 65) {
  discount = 40; // Sconto del 40% per gli over 65
  ticketPrice *= 0.6; // Applicare lo sconto al prezzo del biglietto
}




// Formattare il prezzo del biglietto
const formattedPrice = ticketPrice.toFixed(2) + " €"; // Prezzo del biglietto con due decimali




// Creare il messaggio finale da visualizzare
const message = "Numero di chilometri: " + km + " Km Da Percorrere" + "<br>" +
        "Prezzo del biglietto: " + formattedPrice + "<br>" +
        "Età del passeggero: " + age + "<br>" +
        "Sconto: " + discount + "%";




// Stampare il messaggio finale a schermo
document.write(message);