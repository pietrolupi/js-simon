
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

let extractedNumbers = []; //utilizzo solo per generare num random univoco 

let correctCounter = 0;

btnGenera.addEventListener('click', function(){


  for(let i = 0; i < 5; i++){
    btnGenera.classList.add('d-none')
    let randomizedNum = getUniqueRandomNumber(1, 20);
    
    generatedList.push(randomizedNum);

    generatedContainer.innerHTML += '  ' + randomizedNum;
  }

  setTimeout(function()
  {
    clearText(generatedContainer);

  }, 2000)


  setTimeout(function() 
  {
    for(let c = 1; c <= 5; c++){
      
      const numSelected = prompt(`quale era il numero in posizione ${c} ?`)

      playerList.push(numSelected);
    }

    console.log('PLAYERLIST--' + playerList)

    for(let x = 0; x < 5; x++){
      if(generatedList[x] === playerList[x]){
        correctCounter ++;
        resultContainer.innerHTML += playerList[x];
      }
    }
    console.log(correctCounter);
  }, 2100)


  
})








//FUNCTIONS


function getRandomNumber(min, max){
  return Math.floor(Math.random() * (max - min + 1) + min);
}


function getUniqueRandomNumber(min, max ){
  
  let randomNumber;
  let isValidNumber = false;

  while(!isValidNumber){
    randomNumber = getRandomNumber(min, max);
    
    if(!extractedNumbers.includes(randomNumber)){ 
      extractedNumbers.push(randomNumber);
      isValidNumber = true;
    }
  }
  return randomNumber;
}

function clearText(whatToClear){
  whatToClear.innerHTML = ''
}