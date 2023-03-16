let letters = 'abcdefghijklmnopqrstuvwxyz';
let lettersArr = Array.from(letters);
let lettersContainer = document.querySelector(".letters");

lettersArr.forEach(e =>{
  let span = document.createElement('span');
  span.className = 'letter-box'
  let spanText = document.createTextNode(e.toUpperCase());
  span.appendChild(spanText);
  lettersContainer.appendChild(span);
})

let word = {
  people: ['Muhammad Noor','Leo Messi', 'Afsha', 'Amr Diab', 'Cristiano Ronaldo', 'Tom Cruise', 'Bahgat Saber','Obama','Mohamed Salah','Tom Hanks','Leonardo Dicaprio','Albert Einstien','Nicola Tesla','Pitso Mosimane','Quintin Tarantino'],
  movies: ['Mission Impossible','The Hangover','Titanic','Django','Spider Man', 'The Avengers','Batman','Pulp Fiction','The Shawshank Redemption','The Godfather','Inception','Interstellar','Fight Club','Forrest Gump','Star Wars','The Green Mile','Parasite','Gladiator'],
  jobs: ['Engineer','Doctor','Dentist','Police Man','Teacher','Professor','Driver','Actor','Singer','Blogger','Programmer'],
  anime: ['One Piece','Dragon Ball','Attack On Titan', 'Vinland Saga','Yu Gi Oh','Death Note', 'Gintama','Bleach','Naruto'],
  countries : ['Egypt','USA','UAE','Palestine','Saudi Arabia','Libya','Tunisia','Morocco','Comoros','Spain','Germany','Italy','Greece','Turkey','China','Japan','Australia','South Africa','Mexico','Canada','Brazil','Argentina','Chile','Algeria','Yemen','Qatar','Iran']
}

let randomProp = Object.keys(word)[Math.floor(Math.random()*Object.keys(word).length)];

let randomValue = word[randomProp][Math.floor(Math.random()*word[randomProp].length)];
let randomValueArr = Array.from(randomValue);


document.querySelector(".category span").appendChild(document.createTextNode(randomProp.toString().toUpperCase()));
let letterGuessContainer = document.querySelector(".letters-guess");
randomValueArr.forEach(e =>{
  let span = document.createElement('span');
  if (e === ' '){
    span.className = 'spaced'
  }
  letterGuessContainer.appendChild(span);
})
let guessSpans = document.querySelectorAll('.letters-guess span');

let wrongAttempts = 0;
document.addEventListener('click',e =>{
  state = false;
let emptyArray = [];

  if (e.target.className === 'letter-box'){

    e.target.classList.add('clicked');

    randomValueArr.forEach((wordLetter,index)=>{
      if (e.target.innerHTML.toLowerCase() == wordLetter.toLowerCase()){
        guessSpans.forEach((span , spanIndex)=>{
          if (spanIndex === index){
            span.innerHTML = e.target.innerHTML;
            state = true;
          }
        })
      }
    })

    if (state === false){
      wrongAttempts++;
      document.querySelector('.hangman-draw').classList.add(`wrong-${wrongAttempts}`)
    }
    
    if (wrongAttempts === 8){
      endGame();
      document.querySelectorAll('.letter-box').forEach(e =>{
        e.style.pointerEvents = 'none';
      })
    }
  }
  let filteredWord = randomValue.toUpperCase().split("").filter((e) => {
    return e != ' ';
  }).join('')
  guessSpans.forEach((e,index) =>{
  emptyArray[index] = e.innerHTML;
  })
  if (emptyArray.join('').toLowerCase() == filteredWord.toLowerCase()){
    document.querySelectorAll('.letter-box').forEach(e =>{
      e.style.pointerEvents = 'none';
    })
    youWin();
  }
})

function endGame(){
  let counter = 5;
  let counting = setInterval (() =>{
    counter--;
    div.appendChild(text);
    document.body.appendChild(div);
    if (counter === 0){
      location.reload()
    }
  },1000)
  let div = document.createElement('div');
  div.className ='game-over'
  let text = document.createTextNode(`Game Over the Correct Word Was ${randomValue} the page will refresh in ${counter} s`)
}
function youWin() {
  let counter = 5;
  let counting = setInterval (() =>{
    counter--;
    div.appendChild(text);
    document.body.appendChild(div);
    if (counter === 0){
      location.reload()
    }
  },1000)
  let div = document.createElement('div');
  div.className ='you-win'
  let text = document.createTextNode(`You Win your wrong Attempts were ${wrongAttempts} Attempts the page will refresh in ${counter} s`)
}