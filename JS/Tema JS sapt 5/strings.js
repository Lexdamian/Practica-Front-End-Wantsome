// exercitiul 1
function isStringOrNumber(verification) {
    return typeof verification === 'string';
}

// console.log(isStringOrNumber('w3resources'));
// console.log(isStringOrNumber(2));

// exercitiul 2
function isBlank(blank) {
    return (!blank || 0 === blank.length);
}

// console.log(isBlank(''));



// exercitiul 3
function stringToArray(strToArray) {
    return strToArray.split(' ');
}
// console.log(stringToArray("This function transforms strings to arrays"));

//exercitiul 4
function abbrevName(abreviation) {
    var name = abreviation.split(' ');
    var firstName = name[0];
    var firstLetter = name[1].charAt(0);
    return firstName.concat(" ", firstLetter.toUpperCase(), ".");
}

// console.log(abbrevName("Alexandru Damian"));



// exercitiul 5
function capitalize(firstLetter) {
    return firstLetter[0].toUpperCase() + firstLetter.slice(1);
}

// console.log(capitalize("romania"));



// exercitiul 6
function truncateString(myInput, byHowMany) {
    return myInput.substr(0, byHowMany);
}
// console.log(truncateString("enciclopedie", 6));

// exercitiul 7 
function isUpperCaseAt(upperCaseInput, wichOne) {
    return upperCaseInput.charCodeAt(wichOne) <= 90 && upperCaseInput.charCodeAt(wichOne) >= 60;
}
// console.log(isUpperCaseAt("RomaNia este o tara", 7));



// exercitiul 8
function strInsert(str, strToBeInserted, atIndex) {
    return str.slice(0, atIndex) + strToBeInserted + " " + str.slice(atIndex);
}
// console.log(strInsert("Noi destepti", "Andrei", 7));



// exercitiul 9
function removeFirstOccurence(element, toBeRemoved) {
    return element.replace(toBeRemoved, "");
}

console.log(removeFirstOccurence("The quick brown fox jumps over the lazy dog.", 'the'));


// exercitiul 10
function compareStrings(str1, str2) {
    return str1.toUpperCase() == str2.toUpperCase();
}
// console.log(compareStrings("abcd", "AbcD"));


// exercitiul 11
function uncapitalize(firstCharacter) {
    return firstCharacter[0].toLowerCase() + firstCharacter.slice(1);
}
// console.log(uncapitalize("Javascript course"));