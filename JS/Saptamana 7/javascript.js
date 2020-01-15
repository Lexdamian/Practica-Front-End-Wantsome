// function noOfChoise(no) {
//     if (typeof no === 'number') {
//         for (i = 0; i < no; i++) {
//             console.log("Sunt la iteratia " + i)
//         }
//     } else {
//         console.log("Nu ati introdus un numar!")
//     };
// }

// noOfChoise(4);


// function noOfChoise(no) {
//     var i = 0;
//     if (typeof no === 'number') {
//         while (i < no) {
//             console.log("Sunt la iteratia " + i);
//             i++;
//         }
//     }
// }

// noOfChoise(12);


var arrayElements = ['Andrei', 'Bogdan', 'Tudor', 'Mirel'];

// function arrayPrint(randomArray) {
//     // var i;
//     for (i = 0; i < randomArray.length; i++) {
//         console.log(randomArray[i]);
//     }
// }

// arrayPrint(arrayElements);


// function arrayPrint(randomArray) {
//     var i = 0;
//     while (i < randomArray.length) {
//         console.log(randomArray[i]);
//         i++;
//     }
// }

// arrayPrint(arrayElements);



// var car = { name: "Toyota", origin: "Japan", gas: "Petrol" };

// function carDetails(carDetails) {
//     var objLength = Object.keys(car);
//     // console.log(objLength);
//     var lengthOf = objLength.length;
//     // console.log(lengthOf);

//     for (i = 0; i < lengthOf; i++) {
//         console.log(carDetails[objLength[i]]);
//     }
// }

// function carDetails() {
//     for (var key in car) {
//         console.log(car[key]);
//     }
// }

// carDetails(car);



// we declare a function;
// 
function count() {

    for (i = 0; i < 11; i++) {
        console.log(i * 100);
    }


}


count();