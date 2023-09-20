const gameContainer = document.getElementById('game-container');

const btnGenera = document.getElementById('btn-genera');

const generatedContainer = document.querySelector('.numeri-generati');
const resultContainer = document.querySelector('.risultati');
const guessedNumber = document.querySelector('.numeri-indovinati');

let generatedList = [];
let playerList = [];
let guessedList = []; 

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

  }, 5000)

  //NB: creo DUE timeout functions distinte con leggerissimo scarto perchè se avviene tutto in contemporanea i prompt "fissano" la pagina prima che i numeri vengano nascosti correttamente
  setTimeout(function() 
  {
    for(let c = 0; c < 5; c++){
      
      const numSelected = parseInt(prompt(`quale era il numero in posizione ${c} ?`))

      playerList.push(numSelected);
    }
  
    console.log('PLAYERLIST--' + playerList)

    for(let i = 0; i < 5; i++){
      if(generatedList[i] == playerList[i]){
        correctCounter ++;
        guessedNumber.innerHTML += '  ' + playerList[i];
      }
    }
    
    if(correctCounter === 0){
      guessedNumber.classList.remove('d-none')
      guessedNumber.innerHTML = 'PESSIMO! 0 numeri indovinati'
    }else{
      guessedNumber.classList.remove('d-none')
      resultContainer.innerHTML = `Hai indovinato ${correctCounter} numeri su 5!`
      console.log('CORRECT COUNTER ----' + correctCounter);
      console.log('RANDOMNUMBERS ---' + generatedList)
    }
    
  }, 5200)
  
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