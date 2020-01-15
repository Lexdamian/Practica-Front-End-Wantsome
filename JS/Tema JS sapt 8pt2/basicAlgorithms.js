//Implementati toate exercitiile folosind sintaxa ES6
//Toate denumirile de variabile si functii trebuie sa fie in EN
//Folositi nume sugestive si aveti grija la indentare

/*
1. Implementati o functie care accepta ca parametru o valoare numerica si returneaza suma numerelor de la 1 pana la valoarea specificata
*/
const sumNumberUpToNew = limit => {
  let sum = 0;
  for (let i = 1; i <= limit; i++) {
      sum += i;
  }
  return sum;
};

// console.log(sumNumberUpTo(6));



/*
2. Implementati o functie care accepta ca parametru un string si returneaza cel mai lung cuvant din acel string.
*/

const longestStr = str => {
  let sortedArr = str.split(' ').sort((a, b) => b.length - a.length);
  return sortedArr[0];
}

// console.log(longestStr("Andrei are Mercedes-Benz"));

/*
3. Implementati o functie care accepta ca parametru un string si ii face 'reverse'
*/

const reverseStr = str =>  { let reversed = str.split('').reverse().join(''); return reversed; }
// console.log(reverseStr("bibistrocel"));

/*
4. Implementati o functie care accepta ca parametru un string si inlocuieste fiecare litera din acesta cu urmatoarea litera din alfabet
*/

const nextLetter = str => {
  var nextLet = [];
  var strArr = str.split('');
  for (i = 0; i < strArr.length; i++) {
      var letter = strArr[i].charCodeAt(strArr[i]);
      // console.log("first =>", letter);
      var nextLetter = letter + 1;
      // console.log("next leter =>", nextLetter);
      var result = String.fromCharCode(nextLetter);
      // console.log(result);
      nextLet.push(result);
  }
  var joined = nextLet.join('');
  return joined;
}
// console.log(nextLetter("Abcdefgh"));

/*
5. Implementati o functie convertToTime care accepta ca parametru o valoare numerica si o converteste la numarul de ore si minute corespunzatoare.
Exemplu: input: 64  ->  output: 1:4
*/

const convertToTime = nr => {
  if (nr < 60) { 
    return nr
  } else if (nr>=60) {
    return nr/60;
  }

} 
// console.log(convertToTime(64));

/*
6. Implementati o functie care accepta ca parametru un string si returneaza string-ul cu toate literele ordonate alfabetic
*/

const alphabetical = str => { let strArr = str.split('').sort((a, b) => a.charCodeAt() - b.charCodeAt()).join(''); return strArr; }
// console.log(alphabetical("bdca"))

/*
7. Implementati o functie care accepta ca parametru un string si verifica daca inainte si dupa fiecare litera din cadrul sau se afla caracterul '+'
Exemplu: input: "+a+b+c+"   ->   output: true
Exemply: input: "+ab+c+d+"  ->   output: false
*/

const plusSign = str => {
  let strArr = str.split('');
  for (let i = 0; i < strArr.length; i+=2) {
    if (strArr[i] !== "+") return false; 
  } return true;
}
// console.log(plusSign("+ab+c+d+e"));