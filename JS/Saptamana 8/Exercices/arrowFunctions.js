//Implementati toate exercitiile folosind sintaxa ES6
//Toate denumirile de variabile si functii trebuie sa fie in EN
//Folositi nume sugestive si aveti grija la indentare

/*
1. Implementati o functie care accepta ca parametru o valoare numerica si returneaza suma numerelor de la 1 pana la valoarea specificata
*/

// ES5

// function expression - variabila in care stochez ca si valoare o functie
var sumNumberUpTo = function(limit) {
    var sum = 0;
    for (var i = 0; i <= limit; i++) {
        sum += i;
    }
    return sum;
};


// ES6

const sumNumberUpToNew = limit => {
    let sum = 0;
    for (let i = 1; i <= limit; i++) {
        sum += i;
    }
    return sum;
};



/*
2. Implementati o functie care accepta ca parametru un string si returneaza cel mai lung cuvant din acel string.
*/

// ES5
var longestStr = function(str) {
        var strArr = str.split(" ");
        console.log(strArr);
        var sorted = strArr.sort(function(a, b) {
            return b.length - a.length;
        })
        return sorted[0];
    }
    // console.log(longestStr("Suntem la curs de JavaScript"));

// ES6
const longestStr2 = str => {
    let strArr = str.split(" ");
    strArr.sort((a, b) => b.length - a.length);
    return strArr[0];
}

// console.log(longestStr2("Suntem la curs de JavaScript"));

/*
3. Implementati o functie care accepta ca parametru un string si ii face 'reverse'
*/

// ES5 
var strReverse = function(str) {
        var strArr = str.split('');
        var reverse = strArr.reverse();
        var result = reverse.join('');
        return result;
    }
    // console.log(strReverse("Javascript"));

// ES6
const strReverse2 = str => {
        let result = str.split('').reverse().join('');
        return result;
    }
    // console.log(strReverse2("Javascript"));

/*
4. Implementati o functie care accepta ca parametru un string si inlocuieste fiecare litera din acesta cu urmatoarea litera din alfabet
*/

// ES5
var nextLetter = function(str) {
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
console.log(nextLetter("Nostradamus"));

// ES6


/*
5. Implementati o functie convertToTime care accepta ca parametru o valoare numerica si o converteste la numarul de ore si minute corespunzatoare.
Exemplu: input: 64  ->  output: 1:4
*/

/*
6. Implementati o functie care accepta ca parametru un string si returneaza string-ul cu toate literele ordonate alfabetic
*/

/*
7. Implementati o functie care accepta ca parametru un string si verifica daca inainte si dupa fiecare litera din cadrul sau se afla caracterul '+'
Exemplu: input: "+a+b+c+"   ->   output: true
Exemply: input: "+ab+c+d+"  ->   output: false
*/