/*### The Fortune Teller
Challenge: create a file called `fortune.js` in your Cloud9 project.
Running this file should output a random quote from a list of 10 different quotes.
Make sure to add/commit this file and push it to your GitHub.
*/


    var quotes = ["Life is like a box of chocolates, you never know what you are going to get.- Forrest Gump", 
    "You can do anything, but not everything.—David Allen", 
    "You miss 100 percent of the shots you never take.—Wayne Gretzky",
    "Courage is not the absence of fear, but rather the judgement that something else is more important than fear.—Ambrose Redmoon",
    "When hungry, eat your rice; when tired, close your eyes. Fools may laugh at me, but wise men will know what I mean.—Lin-Chi",
    "A wise man gets more use from his enemies than a fool from his friends.—Baltasar Gracian",
    "The real voyage of discovery consists not in seeking new lands but seeing with new eyes.—Marcel Proust",
    "Work like you don’t need money, love like you’ve never been hurt, and dance like no one’s watching—Unknown Author",
    "What the world needs is more geniuses with humility, there are so few of us left.—Oscar Levant",
    "Always forgive your enemies; nothing annoys them so much.—Oscar Wilde"];
    var random = 10 * Math.random();
    function fortune() {
        if(random < 1) {
            console.log(quotes[0]);
        }
        else if(random>1 && random < 2) {
            console.log(quotes[1]);
        }
         else if(random >2 && random < 3) {
           console.log(quotes[2]);
        }
         else if(random >3 && random < 4) {
            console.log(quotes[3]);
        }
         else if(random >4 && random < 5) {
           console.log(quotes[4]);
        }
         else if(random >5 && random < 6) {
            console.log(quotes[5]);
        }
        else  if(random >6 && random < 7) {
            console.log(quotes[6]);
        }
        else  if(random >7 && random < 8) {
            console.log(quotes[7]);
        }
        else if(random >8 && random < 9) {
           console.log(quotes[8]);
        }
         else if(random >9 && random < 10) {
            console.log(quotes[9]);
        }
       
}

fortune();