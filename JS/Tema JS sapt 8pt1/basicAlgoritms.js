// /Ex1
//Vreau sa am o functie care sa-mi calculeze suma dintre 2 numere daca ele sunt diferite iar daca sunt egale sa-mi imulteasca suma lor cu 5
//ex myFunction(10, 5) - output 15 // myFunction(10,10) - output 100

function sumAndMultiply(firstNumber, secondNumber) {
  firstNumber !== secondNumber ? console.log(firstNumber + secondNumber) : console.log((firstNumber + secondNumber) * 5);
}

// sumAndMultiply(5,5);

//Ex2
//Vreau sa am o functie care sa returneze true daca ambele numere sunt egale cu 30 sau daca suma lor este egala cu 30
//ex testFunction(30, 30) - true 
//testFunction(15,15) - true
//testFunction(10, 15) - false

function testFunction(numberOne, numberTwo) {
  if (numberOne && numberTwo === 30) {
    return true;
  } else if (numberOne + numberTwo === 30) {
    return true;
  }
  return false;
}
// console.log(testFunction(30, 30));


//Ex3
//Vreau sa am o functie care sa verifice un string si daca stringul incepe cu 'JS' sa returneze acel string iar daca nu incepe sa-l adauge
//checkString('JSisAwsome') - JSisAwsome
//checkString('isEasy') - JSisEasy
//checkString(null) - JS

function checkString(str) {
  if (str.startsWith("JS")) {
    return str;
  }
  return "JS" + str;
}
// console.log(checkString("Is fun"));


//Ex4
//Scrieti o functie care sa scoata literele/cifrele duplicate dintr-un string/numbar
//removeDuplicates('aabcdeef') - 'abcdef'
//removeDuplicates(122334) - 1234

function remDuplicates(param) {
  var strClean = [];
  for (var i = 0; i < param.length; i++) {
    if (strClean.indexOf(param[i]) == -1) {
      strClean.push(param[i]);
    }
  }
  let result = strClean.join('');
  return result;
}
// console.log(remDuplicates("11223344"));


//Ex5
// Gasiti cel mai lung string intr-o fraza
//findLongestString('Wantsome is Awsomeeee today') - output 'Awsomeeee'
const longestWord = phrase => {
  let phraseArr = phrase.split(' ').sort((a, b) => { return b.length - a.length });
  return phraseArr[0];
}
// console.log(longestWord("We are wantsome and is fun."));



//Ex6
//Scrieti o functie care sa aiba output-ul asta
// *  
// * *  
// * * *  
// * * * *  
// * * * * *  

const addToTheEnd = (somethign, byHowMany) => {
  let result = '';
  for (i = 0; i < byHowMany; i++) {
    result += " " + somethign;
    console.log(result);
  } return result;
}
// addToTheEnd("Eu", 8);



//ex7
const negativeNumbers = [];

function extractNegativeNumbers(numbers) {
  // append any negative numbers found in the numbers array 
  // into the negativeNumbers array constant variable above
  for (i = 0; i < numbers.length; i++) {
    if (numbers[i] < 0) { negativeNumbers.push(numbers[i]) };
  } return negativeNumbers;
}
// console.log(extractNegativeNumbers([1,2,-5,4,-6]));



//ex8
//Avem o functie cu 2 numere si un operator, vrem sa obtinem rezultatul in functie de operator - "add", "substract", "multiply", "divide"
//ex calculate(2, 5, "add") => 7
//calculate(10, 8, "substract") => 2

const calculate = (a, b, operator) => {
  switch (operator) {
    case 'add':
      return a + b;
    case 'subtract':
      return a - b;
    case 'multiply':
      return a * b;
    case 'divide':
      return a / b;
  }
}
// console.log(calculate(3, 4, "divide"));




//Ex9
// Vreau sa am o functie care sa verifice daca numarul dat este divizibl cu 3, 5 sau ambele si sa printeze "THREE", "FIVE", "BOTH" iar daca nu este cu niciunul sa returneze numarul
// isDiv(15) => "BOTH"
// isDiv(9)=> "THREE"
// isDiv(7)=> 7

const divideVerification = param => {
  if (param % 3 === 0 && param % 5 === 0) {
    return "BOTH"
  } else if (param % 5 === 0) {
    return "FIVE"
  } else if (param % 3 === 0) {
    return "THREE"
  } else {
    return param;
  }
}
// console.log(divideVerification(7));


//Master exercises
//Ex9 
// Vreau sa pot afisa data si ziua sub urmatorul format:
// Azi este : Luni. 
// Ora este : 20 PM : 30 : 38

const dateAndTime = () => {
  var date = new Date(),
    seconds = date.getSeconds().toString().length == 1 ? '0' + date.getSeconds() : date.getSeconds(),
    minutes = date.getMinutes().toString().length == 1 ? '0' + date.getMinutes() : date.getMinutes(),
    hours = date.getHours().toString().length == 1 ? '0' + date.getHours() : date.getHours(),
    ampm = date.getHours() >= 12 ? 'pm' : 'am',
    days = ['Duminica', 'Luni', 'Marti', 'Miercuri', 'Joi', 'Vineri', 'Sambata'];
  return "Astazi este: " + days[date.getDay()] + '\n' + "Ora este: " + hours + ampm + ' : ' + minutes + ' : ' + seconds;
}

// console.log(dateAndTime());


//ex10
// ATM-urile iti dau voie sa folosesti pin-uri din 4 sau 6 cifre. Faceti o functie care sa returneze true daca pin-ul e corect si false daca e gresit
// validPin("1234") => true
// validPin("12345") => false
// validPin("z23f") => false
const pinVerification = pin => {
  let str = pin.toString();
  let verification;
  typeof pin === 'number' && str.length === 4 ? verification = true : verification = false;
  return verification;
}
// console.log(pinVerification("z234"));


//ex11 
//Folosind regex vreau sa scot toate vocalele dintr-un string
// removeVowels("Hey I am developer") => "Hy m dvlpr"
const removeVowels = str => {
  let strToLow = str.toLowerCase();
  let cleanString = strToLow.replace(/[aeiou]/g, "");
  return cleanString;
}
// console.log(removeVowels("Eu sunt un cursant la wantsome"));


//ex12
//Vreau sa am o functie care sa verifice daca un numar este patrat
// isSquareNumber(-1) => false
// isSquareNumber(25) => true
// isSquareNumber(3) => false
const isSquareNumber = num => { return num > 0 && Math.sqrt(num) % 1 === 0 }
// console.log(isSquareNumber(25));


//ex13
// Vreau sa am o functie care sa verifice daca un cuvant este o anagrama- daca toate literele din primul string se regasesc in al doilea
// isAnagram("School master", "The class room") => true
// isAnagram("silent", "listen") => true

const isAnagram = (str1, str2) => {
  let strArr = str1.split('');
  let str2Arr = str2.split('');
  for (let i = 0; i < strArr.length; i++) {
    if (!str2.includes(strArr[i])) {
      return false
    } else if (str2Arr.length !== strArr.length) {
      let joined1 = strArr.join('').replace(/[' ']/g, '');
      let joined2 = str2Arr.join('').replace(/[' ']/g, '');
      return true
      } 
  } 
}
console.log(isAnagram("school master", "the slass room"));
