// First comment
/*Write a function that takes a string and returns the first character of the string.
Test your function on a few inputs, including the empty string.*/

var name = "Randy";
var thing = "Table";
var empty = " ";

function firstLetter(string) {
    console.log(string.substring(0,1));
}

firstLetter(name);
firstLetter(thing);
firstLetter(empty);

/* Write a function that takes a string and returns the last character of a string.
Test your function on a few inputs, including the empty string.*/

var name = "Randy";
var thing = "Table";
var empty = "";

function lastLetter(string) {
    console.log(string.slice(-1));
}

lastLetter(name);
lastLetter(thing);
lastLetter(empty);


/*
Write a function that takes a string and a number,and returns the character at the position represented by the number.
The indexing of number should start at 0. Test your function on a few inputs, including the empty string.*/

var name = "Randy";
var thing = "Table";
var empty = "";

function stringLocation(string, num) {
    console.log(string.charAt(num));
}

stringLocation(name,1);
stringLocation(thing,2);
stringLocation(empty,3);


/*Write a function that takes two numbers and adds them together.Test your function on a few inputs.
Write in the comments what happens when you pass something other than a number to your function.*/

function sum(a, b) {
    return a + b;
}

console.log(sum(2, 3));
console.log(sum(10, -3));
console.log(sum("3", "car"));
console.log(sum(false, true));

/*If we insert values different than a number, then different things will happend depending on the type of data. 
If we insert strings, then the function will return a sentence with the 2 strings together. if we insert a boolean,
we will get different outputs depending if the boolean is true=(+1) or false=(0).*/

/*Write a function that takes two numbers and multiplies them together.Test your function on a few inputs.
Write in your comments what happens when you pass something other than a number to your function.*/

function multiply(a, b) {
    return a * b;
}

console.log(multiply(2, 3));
console.log(multiply(10, -3));
console.log(multiply("3", "car"));
console.log(multiply(false, true));

/* If we insert strings, then it will tell us that it is not a number(NaN). If we use booleans then we will get the output of 0.*/

/*Write a function that takes two numbers and a string. If the string is ‘add’, then return the sum of the numbers.
If the string is ‘subtract’, return the difference. If the string is ‘mult’, return the product.
If the string is ‘div’, return the ratio. Otherwise return 0.*/

function stringSays(num1, num2, str) {
    if(str === 'add'){
        return num1 + num2;
    }
    else if(str === 'subtract') {
        return num1 - num2;
    }
    else if(str === 'mult') {
        return num1 * num2;
    }
    else if (str === 'div') {
        return num1/num2;
    }
}
console.log(stringSays(2, 3, 'add'));
console.log(stringSays(2, 3, 'subtract'));
console.log(stringSays(2, 3, 'mult'));
console.log(stringSays(2, 3, 'div'));


/*Write a function that takes a string and a number, and returns the string repeated that many number of times.
Test your function with various inputs.*/

function repeatString(str, num) {
    //return (new Array(num+1)).join(str);
    var output="";
    for (var i=0; i<num; i++){
        output +=str;
    }
    return output;
}

console.log(repeatString("Loco",3));
console.log(repeatString("cat",5));
console.log(repeatString("Canada",4));

/*Write a function that uses a for loop to print the numbers from 1 to 10 inclusively.*/

function oneToTen() {
    var counter="";
    for(var i=0; i<11; i++){
        var counter = counter +i;
    }
    return counter;
}

console.log(oneToTen());

/*Write a function that uses a for loop to print the numbers from 1 to 10 inclusively,
but as words ("one", "two", ...). As an extra challenge, try to find a solution that does not use an if/else:*/

function oneToTenString() {
    var counter=["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"];
    var total=[];
    for(var i=0; i<counter.length; i++){
        total[i] = '"' + counter[i] +'" ';
    }
    return total.join(", ");
}

console.log(oneToTenString());

/*Write a function that uses a for loop to print the numbers from 1 to 10 inclusively,
but for each number, print it that many number of times:*/

function oneToTenByN() {
    var counter="";
    for(var i=1; i<11; i++){
        var counter = counter +i;
        for(var j=1; j<counter.length; j++){
            if(i>j) {
                var counter = counter +i;
            }
        }
        
    }
    return counter;
}

console.log(oneToTenByN());

/*Write a function that takes a string, and returns the reverse of that string.
For example, if you pass the function the string “hello”, it should return “olleh”.
Test your function on a few inputs, including the empty string.*/


function reverseString (str) {
  
  return str.split("").reverse().join("");
}

reverseString("hello");

/*Write a function that takes a number and returns the factorial of a number.
The factorial of 5 is 5x4x3x2x1. The factorial of 0 is 1.
Test your input on a few numbers, including negative numbers.*/

function factorial(num) {
    if(num === 0) {
        return 1;
    }
    return num * factorial(num-1);
}

console.log(factorial(5));
/*console.log(factorial(-5));Factorial doesnt work for negative numbers*/
console.log(factorial(15));


/*Write a function that takes a phrase as a string, and returns the longest word in that phrase.
If the phrase contains more than one such word, return the first occurrence. Test your function on a few inputs.*/

function findLongestWord(str) {
    var strSplit= str.split(" ");
    var longestWord= "";
    for (var i= 0; i< strSplit.length; i++) {
        if (strSplit[i].length > longestWord.length) {
           longestWord= strSplit[i];
        }
    }
    return longestWord;
}

console.log(findLongestWord("I love to eat chocolate cake"));

/*Write a function that takes a phrase, and returns the same phrase with every word capitalized.
For example, if you pass your function "hello world", it should return "Hello World"
and if you pass it "HELLO WORLD" or even "HeLLo WoRLD", it will also return "Hello World".
Test your function of a few inputs.*/
 
 function capitalized(str) {
  str= str.toLowerCase().split(" ");
  for(var i=0;i<str.length;i++){
    str[i]= str[i].charAt(0).toUpperCase() + str[i].slice(1);
  }
  return str.join(" ");
}
 
console.log(capitalized("I like to play futbol"))


/*Write a function that takes an array and returns the largest number of the array.
Test your function on a few inputs.*/

function largestNumber(array){
    var largestNum=0;
    for (var i=0; i<array.length; i++) {
        if(array[i] > largestNum) {
            largestNum= array[i];
        }
    }
    return largestNum;
}

console.log(largestNumber([5, 10, 15, 20]));

/*Write a function that takes an array, and returns a filtered array. 
The filtered array should only contain the truthy values from the initial array.
Hint: there is an array method called filter that can help you with this :)*/

function filteredArray(arr){
    return arr.filter(function(element){return element});
}


console.log(filteredArray([true, 233, "Randy", false, 0]));


/*Write a function that takes an array of numbers, and returns the sum of all the numbers in the array.*/

function sumArr(arr) {
    var total=0;
    for (var i=0; i<arr.length; i++){
         total += arr[i];
    }
    return total;
}

console.log(sumArr([2, 4, 6, 8]));
console.log(sumArr([1, 1, 1, 1]));

/*Write a function that takes two arrays, and returns an array of all elements that are only in one array.
For example, with [1,2,3] and [1,2,4,5] the function should return [3,4,5]. 
Test your function on different inputs. Hint: you should look up array methods indexOf and slice.*/

function oneArr(arr1, arr2) {
    if (arr1>arr2) {
        var arrayLong = arr1;
        var arrayShort = arr2;
    }
    else { 
        var arrayLong = arr2;
        var arrayShort = arr1;
    }
    var tempArray=[];
    for(var i= 0; i<arrayLong.length; i++) {
        var position = arrayShort.indexOf(arrayLong[i]);
        console.log("position",position);
        var newShortArray = arrayShort.slice(position);
         if(position == -1) {
             tempArray.push(arrayLong[i]);
         }
    }
    
      var finalArray = tempArray.concat(newShortArray);
      return finalArray;
}

console.log(oneArr([1,2,3], [1,2,4,5]));


/*Mini Challenge: write a function that takes an array and a function as arguments. The function should return a new array that maps every element of the input array by passing it through the function you received. You are not allowed to use Array.map for this challenge, otherwise it would be too easy :)*/
