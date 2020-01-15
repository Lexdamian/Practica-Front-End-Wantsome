// we declare the function named "gender".
// We give the function "cnpInput" parameter.
// We transform parameter to string. 
// In the function block we will use if statements to verify the index 0 of the parameter. 
// If the first value in not 1 or 2, the function will return "The CNP you entered is not valid"
// If the first value is 1 the function will return "The person verified is male."
// If the first value is 2 the function will return "The person verified is female."
// We create a second function to get CNP value from input and then display it in console. 

var gender = function(cnpInput) {
    var firstDigit = cnpInput.toString().charAt(0);
    if (firstDigit !== "1" && firstDigit !== "2") { return "CNP-ul introdus nu este valid" };
    if (firstDigit === "1") { return "Persoana verificata are sexul masculin" };
    if (firstDigit === "2") { return "Persoana verificata are sexul feminin" };
}

console.log(gender(2454353234));




// Exericitul 2

// we declare the function expression taking "points" as a parameter.
// inside the function we declare a variable for marks wich we will asign a value to for each condition.
// we use if/else to verify the points and return the correct grade.



var grade = function(points) {
    var mark;
    if (points >= 1 && points <= 3) {
        mark = "E";
        return "Calificativul corespunzator punctajului " + points + " este " + mark;
    } else if (points > 3 && points <= 6) {
        mark = "D";
        return "Calificativul corespunzator punctajului " + points + " este " + mark;
    } else if (points >= 7 && points <= 8) {
        mark = "B";
        return "Calificativul corespunzator punctajului " + points + " este " + mark;
    } else if (points == 9) {
        mark = "A";
        return "Calificativul corespunzator punctajului " + points + " este " + mark;
    } else if (points == 10) {
        mark = "A+";
        return "Calificativul corespunzator punctajului " + points + " este " + mark;
    }
}

console.log(grade(10));




// Exercitiul 3 
// v1

// we create and object called "cars" containing the manufacturer as keys and the production location as values.
// we declare a function expression "car1" 
// we check if the argument exists in the object cars, if not we return "marca [marca] nu exista"
// if the argument given to car1 exists in the object cars we will return "return "Marca " + carMake + " se produce in " + cars[carMake]";

var cars = {
    tesla: "Statele unite ale Americii",
    volvo: "Suedia",
    kia: "Korea",
    toyota: "Japan",
    bmw: "Germany",
    dacia: "Romania"
}

var car1 = function(carMake) {
    if (!cars[carMake]) return "Marca " + carMake + " nu exista";
    return "Marca " + carMake + " se produce in " + cars[carMake];
}
console.log(car1("kia"));


// v2

// we create and object called "cars" containing the manufacturer as keys and the production location as values.
// we declare a function expression "car2" 
// we make sure the argument given is lowercase.
// we use if/else statements for each key in the object cars.
// if the argument does not exists we return "Marca [marca] este necunoscuta"

var car2 = function(carMake) {
    var maker = carMake.toLowerCase();
    if (maker === "tesla") {
        return "Marca " + maker + " se produce in " + cars.tesla;
    } else if (maker === "volvo") {
        return "Marca " + maker + " se produce in " + cars.volvo;
    } else if (maker === "kia") {
        return "Marca " + maker + " se produce in " + cars.kia;
    } else if (maker === "toyota") {
        return "Marca " + maker + " se produce in " + cars.toyota;
    } else if (maker === "bmw") {
        return "Marca " + maker + " se produce in " + cars.bmw;
    } else if (maker === "dacia") {
        return "Marca " + maker + " se produce in " + cars.dacia;
    } else {
        return "Marca " + maker + " este necunoscuta.";
    }

}
console.log(car2("BMW3"));


//  v3

// we create and object called "cars" containing the manufacturer as keys and the production location as values.
// we declare a function expression "car3" 
// we make sure the argument given is lowercase.
// we use switch cases for each key in the object cars.
// if the argument does not exists we return "Marca [marca] este necunoscuta"

var car3 = function(carMake) {
    var maker2 = carMake.toLowerCase();
    switch (maker2) {
        case "tesla":
            return "Marca " + maker2 + " se produce in " + cars.tesla;
            break;
        case "volvo":
            return "Marca " + maker2 + " se produce in " + cars.volvo;
            break;
        case "kia":
            return "Marca " + maker2 + " se produce in " + cars.kia;
            break;
        case "toyota":
            return "Marca " + maker2 + " se produce in " + cars.toyota;
            break;
        case "bmw":
            return "Marca " + maker2 + " se produce in " + cars.bmw;
            break;
        case "dacia":
            return "Marca " + maker2 + " se produce in " + cars.dacia;
            break;
        default:
            return "Marca " + maker2 + " este necunoscuta";
    }
}
console.log(car3("Dacia"));



// exercitiul 4

// we declare an array of objects called employes
// we create a IIFE in wich we use .sort() to return the array sorted by salary
// we use console.log(array) to print the sorted array.


var employees = [
    { name: "John", salary: 20000 },
    { name: "Danny", salary: 30500 },
    { name: "Bekker", salary: 15000 }
];

(function() {
    return employees.sort(function(a, b) {
        return (a.salary - b.salary);
    })
})();

console.log(employees);