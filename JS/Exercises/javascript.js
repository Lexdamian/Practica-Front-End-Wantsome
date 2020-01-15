// Protect email -  JavaScript function to hide email addresses to protect from unauthorized user
// function protectEmail(email) {
//     var arrEmail = email.split("@");
//     console.log(arrEmail);
//     return arrEmail[0].substr(0, 4) + "...@" + arrEmail[1];
// }
// // console.log(protectEmail("damian.alecsandru@gmail.com"));


// // Uppercase every first letter of a word

// function upperCaseEveryWord(param) {
//     var strToArray = param.split(" ");
//     // console.log(strToArray);
//     var arrLength = strToArray.length;
//     // console.log(arrLength);
//     var result = [];
//     for (i = 0; i < arrLength; i++) {
//         result.push(strToArray[i].charAt(0).toUpperCase() + strToArray[i].slice(1).toLowerCase() + " ");
//     }
//     return result.join(" ");
// }

// // console.log(upperCaseEveryWord("test de transformare al stringului"));




// // invert uppercase to lowercase

// function invertCase(invert) {
//     var toString = invert.split("");
//     var toStringLength = toString.length;
//     // console.log(toString);
//     var result = [];
//     for (i = 0; i < toStringLength; i++) {
//         if (toString[i] !== toString[i].toLowerCase()) {
//             result.push(toString[i].toLowerCase());
//         } else {
// //             result.push(toString[i].toUpperCase());
// //         }
// //     }
// //     return result.join("");
// // }

// // console.log(invertCase("suAASdudD"));



// // Concatenation of strings

// function concatStrings(strInput, byHowMany) {
//     let output = "";
//     for (let i = 0; i < byHowMany; i++) {
//         output = output + strInput;
//     }
//     return output;
// }

// // console.log(concatStrings("We", 10));




// // Palindrome verification 

// // I declare a function to verify if a string is a palindrome
// // I make the parameter to lowercase
// // I transform the string to array, revers it and then join it to a string again. 
// // I return the value for their comparison.

// function palindromeVerification (palInput) {
//     let palInputToLow = palInput.toLowerCase();  
//     // console.log(palInputToLow);
//     let palInputArr = palInputToLow.split("");
//     let reversePal = palInputArr.reverse();
//     let reversePalJoin = reversePal.join("");
//     // console.log(reversePalJoin);

//     return palInputToLow === reversePalJoin;
//     }


// // console.log(palindromeVerification("Level"));



// // Exercise 6

// // I declared a variable containing a random array
// let randomArray = [
//   [1, 7, 3, 4],
//   [7, 4, 9, 5],
//   [2, 3, 5, 8]
// ]

// // a function wich sorts the numbers inside the array and returns only the biggest numbers
// function arrSort() {
// // result is a variable wich will store the array containg the biggest numbers
//   let result = [];
// // we measure the array length to know hay many iterations we`ll need to do
//   let length = randomArray.length;
// // the variable pos stores each array inside the main array 
//   let pos = [];
// // we use for loop to sort every small array inside the main array and then push to result the last position (being the biggest number after sort)
//   for (i = 0; i < length; i++) {
//     pos = randomArray[i];
//     pos.sort(function (a, b) {
//       return a - b;
//     })
//     console.log(pos);
//     result.push(pos.pop());
//   }
// // we sort the result and then return the result
//   result.sort(function (a, b) { return a - b;})
//   return result;
// }

// console.log(arrSort(randomArray));




// // Exercitiul 7


// // we create a function to reverse a string 
// function strReverse (str) {
// // we transform the string to array 
//   let strArr = str.split("");
// // we reverse the array 
//   let reverse = strArr.reverse();
// // we transform the reversed array into string
//   let result = reverse.join("");
//   return result;
// }

// console.log(strReverse("Avem fanta roz"));




// // Exercitiul 8

// // we create a function to calculate the factorial of a number
// function factorial (nr) {
// // we use conditionals to verify the value of the given parameter and then calculate the factorial of that number
//   return (nr < 2) ? 1 : factorial(nr-1) * nr;
// }

// console.log(factorial(6));




// // Exercitiul 9 

// // create a function to verify if the first string parameter and with the second string parameter
// function strTermination (firstStr, secondStr) {
//   if (firstStr.endsWith(secondStr)) {
//     return true;
//   }
//   return false;
// }
// // lazy method
// console.log(strTermination("Andrei are mere", "pere"));



// // Exercitiul 10

// // declare a variable containing an array of numbers
// let somethingArr = [1,2,5,4,6,19];
// // we get the array length
// let length = somethingArr.length;

// // create a function wich returns only the even numbers from the given array
// function arrSortEven () {
// // declare a variable wich will hold and array with the even numbers
//   let result = []; 
// // use for loop to verify every number in the array and then conditional to see if it is even
//   for (i = 0; i < length; i++) {
//     if (somethingArr[i] % 2 == 0) {
// // it the number is even we push it to the variable declared in this function scope
//      result.push(somethingArr[i]) 
//     }
//   } 
// // return the result
//   return result;
  
// }
// console.log(arrSortEven(somethingArr));



// // Exercitiul 11 

// // create a function to compare if first string contains all the letters from the second string
// function lettersComparison (str1, str2) {
// // we transform the string to array
//   let str2Arr = str2.split("");
// // we store the array length
//   let length = str2Arr.length;
// // use for loops to parse through every element in the array 
//   for (let i = 0; i < length; i++) {
// // we verify if first string includes the leter from the second string and if not that means the result is false, else we return true
//     if (!str1.includes(str2Arr[i])) return false;
//   }
//   return true;
// }

// console.log(lettersComparison("Andrei", "edi"));



// Exercitiul 12

// let arr = [1,5,7,2,6];

// function arrDisplay (arr, valParam) {
//     let output = [];
//     for (i = 0; i < arr.length; i++) {
//       output.push(arr[i]);
//       if (i === valParam) {
//         return output;
//       }
//     } 
// }

// console.log(arrDisplay(arr, 2));




// // Exercitiul 13
let item = null;
let randomArr = [1, "andrei", undefined, "Alex", NaN, 0, false, item, "John", ""];

function filterArray(param) {
  return param.filter(Boolean);
}
// console.log(filterArray(randomArr));

function filterArray(param) {
  let output = [];
  let bool = []; 
  for (i = 0; i < param.length; i++) {
    if (isNaN(param[i]) && typeof param[i] !== 'string' || param[i] === 0 || param[i] === "") {
      bool.push(param[i]);
      console.log('bool =>', bool);
    } else if (typeof param[i] === 'string' || typeof param[i] === 'number') {
        output.push(param[i]);
        console.log('output =>', output);
    }

  }
  return output;
} 


// console.log(filterArray(randomArr));




function filterArray(param) {
  let output = []; 
  for (i = 0; i < param.length; i++) {
    if (param[i]) {
      output.push(param[i]); 
    }         
 } return output;
}
console.log(filterArray(randomArr));


