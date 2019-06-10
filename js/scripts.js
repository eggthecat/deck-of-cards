$(document).ready(function(){
  var deck = []
  $ ('form').submit(function(event){
    event.preventDefault();

    for (var i = 0; i < 4; i += 1) {
      var suit;
      if (i === 0) {
        suit = " of spades";
      } else if (i === 1) {
        suit = " of hearts"
      } else if (i === 2) {
        suit = " of clubs"
      } else {
        suit = " of diamonds"
      }
      for ( var n = 1; n <= 13; n += 1) {
        var name;
        if (n === 1) {
          name = "Ace";
        } else if (n === 11) {
          name = 'Jack';
        } else if (n === 12) {
          name = 'Queen';
        } else if (n === 13) {
          name = 'King';
        } else {
          name = n;
        }
        deck.push(name + suit);
      }
    }
    console.log(deck);
    for (var d = 0; d < deck.length; d++) {
      $("ol").append("<li>" + deck[d] + "</li>");
    }
  });
});










// $(document).ready(function(){
//   $("form").submit(function(event){
//     event.preventDefault();
//     var total = 0;
//     for (var currentNumber = 1; currentNumber <= 5; currentNumber += 1) {
//       total += currentNumber;
//         alert("Total is: " + total);
//     var cards = ['clubs', 'spades', 'hearts','diamonds'];
//     for (var index 1; index <= 9; index +=1){
//       alert(''+ ' of ' +'cards[index]');
//       }
//     }
//   });
// });
