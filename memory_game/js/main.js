// console.log("Up and running!");

// var cardOne = "queen";
// var cardTwo = "queen";
// var cardThree = "king";
// var cardFour = "king";

// console.log("User flipped " + cardOne);
// console.log("User flipped " + cardThree);


 // var cardOne  = cards[0];
 //  cardsInPlay.push(cardOne);
 //  console.log("user flipped " + cardOne);

 //  var cardTwo = cards[2];
 //  cardsInPlay.push(cardTwo);
 //  console.log("user flipped " + cardTwo);

 // if(cardsInPlay[0] === cardsInPlay[1]) {
 //      alert("You found a match.")
 //    } else {
 //      alert ("Sorry try again.")
 //      }


// var cards = ["queen", "queen", "king", "king"];

var cards = [ 

{
rank: "queen",
 suit: "hearts",
 cardImage: "images/queen-of-hearts.png"
},


{
 rank: "queen",
 suit: "diamonds",
 cardImage: "images/queen-of-diamonds.png"

},

{
rank: "king",
suit: "hearts",
cardImage: "images/king-of-hearts.png"

},

{

rank: "king",
suit: "diamonds",
cardImage: "images/king-of-diamonds.png"

}


];




var cardsInPlay = [];

var checkForMatch = function(){
  if (cardsInPlay[0] === cardsInPlay[1]){
    alert("You found a match!");
  } else {
      alert("Sorry, try again.");
    }
}

var flipCard = function() {

	cardId = this.getAttribute('data-id')

console.log(`User flipped ${cards[cardId].rank}`)
console.log(cards[cardId].cardImage)
console.log(cards[cardId].suit)
cardsInPlay.push(cards[cardId].rank);

this.setAttribute("src", cards[cardId].cardImage)

  if (cardsInPlay.length === 2) {
      checkForMatch();
  }
}



// flipCard(0);
// flipCard(2);
 
 var createBoard = function () {

 	for (var i = 0; i < cards.length; i++){

      var cardElement = document.createElement('img');
      cardElement.setAttribute('src', 'images/back.png')
      cardElement.setAttribute('data-id', i)
      cardElement.addEventListener('click', flipCard)
      document.getElementById('game-board').appendChild(cardElement);

 	}

 }

createBoard();





           