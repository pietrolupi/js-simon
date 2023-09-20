
/* 
* creo un bottone start e al suo click:
* genero e stampo in pagina 5 numeri random univoci
* utilizzo una function per far scomparire i numeri DOPO 5 secondi e far contemporaneamente apparire 5 prompt che chiedono all'utente di inserire i numeri visti in ordine
* pusho i numeri inseriti in un array
* leggo l'array dei numeri inseriti con un ciclo e lo confronto con l'array dei numeri generati. 
* pusho in un array RISULTATI tutti i numeri presenti in entrambe le liste

* stampo messaggio che comunichi la lenght dell'arrayRisultati (QUANTI numeri hai indovinato), e i numeri indovinati (quindi altro ciclo che legga l'arrayRisultati).

*/

const gameContainer = document.getElementById('game-container');

const btnGenera = document.getElementById('btn-genera');

const generatedContainer = document.querySelector('.numeri-generati');
const resultContainer = document.querySelector('.risultati');

let generatedList = [];

let playerList = [];

