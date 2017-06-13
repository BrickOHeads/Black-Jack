/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to
   write your logic.
*/

// hand is the array

// A should be dealt with post - first summation due to optional 1 or 11..
 // "A":1,
  // "A":11,

  function handValue(hand) {

    let value = 0;

    hand.sort(card => card === "A"?1:-1);

      for (i=0; i < hand.length; i++){

        if ((hand[i]==="2") || (hand[i]==="3") || (hand[i]==="3") || (hand[i]==="4") || (hand[i]==="5") || (hand[i]==="6") || (hand[i]==="7") || (hand[i]==="8") || (hand[i]==="9") || (hand[i]==="10")){
          value += parseInt(hand[i]);
          // console.log("small card");
        }else if ((hand[i]==="K") || (hand[i]==="Q") || (hand[i]==="J")){
          value+=10;
          // console.log("face card");
        }else if (value > 10){
            value += 1;
        }
      }
      return value;
      console.log(value);
  }
  // console.log(handValue(hand));









/* -----  Hints ------

1..10   ==> Worth face value (1 = 1, 4 = 4, etc)
K, Q, J ==> Worth 10
A       ==> Worth 1 or 11

*/
