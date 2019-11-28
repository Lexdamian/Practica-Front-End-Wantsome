// acum se printeaza in consola '1' '2' '3' '4' '5' .
// Vrem sa fie ordinea '3' '5' '2' '1' '4'
//hint setTimeout

const func1 = () => {
    setTimeout(() => console.log('1'), 700);
}

const func2 = () => {
    setTimeout(() => console.log('2'), 500);
}

const func3 = () => {
    console.log('3')
}

const func4 = () => {
    setTimeout(() => console.log('4'), 1000);
}

const func5 = () => {
    setTimeout(() => console.log('5'), 300);
}


// func1();
// func2();
// func3();
// func4();
// func5();




// 1
/*
Write a function that accepts 3 params(1 - array, 2 - function, 3 - function). 
- first param defines an array of items: ex: an array of rooms:  ['bedroom', 'bathroom', 'lounge']
- second param defines an action that has to be executed for each item - ex: I want to clean the house, I want to display in console 'I cleaned x', 'I cleaned y', 'I cleaned z', for each room
- third param defines an action that has to be executed at the end, when I finished doing the action for each item - ex: I want to print 'yey, now I can drink and play games!'
*/
const cleanedRooms = room => console.log(`I cleaned ${room}.`)
const doneCleaning = () => console.log(`Yay, now I can drink and play games`);

const house = ["livingroom", "bathroom", "kitchen"];
const cleanRooms = (rooms, cleanedRooms, doneCleaning) => {
    for (let i = 0; i < house.length; i++) {
        cleanedRooms(house[i]);
    }
    doneCleaning();
}

// cleanRooms(house, cleanedRooms, doneCleaning);



// 2

function customMap(array, callback) {
    var arr = [];
    for (var index in array) {
        arr.push(callback(array[index]));
    }
    return arr;
}

const increment = a => ++a;
const double = a => a * 2;
const square = a => {
    result = Math.pow(a, 2);
    return result;
}

var randomArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// console.log(customMap(randomArray, increment)); // Implement the function named print so that thos console.log would display the result [ 2, 3, 4, 5, 6, 7, 8, 9, 10 ] in the console
// console.log(customMap(randomArray, double)); // Implement the function named double so that thos console.log would display the result [ 2, 4, 6, 8, 10, 12, 14, 16, 18 ]
// console.log(customMap(randomArray, square)); // Implement the function named square so that thos console.log would display the result [ 1, 4, 9, 16, 25, 36, 49, 64, 81 ]

// Now translate the upper function to ES6 syntax


// 3


// This function will go over every element in an array one by one, calling the
// callback with each item, adding the element to a new array only if
// the callback returns true, and finally returning the new array.

// const filter = (array, callback) => {
//   var filteredArray = [];
//   for (var i = 0; i < array.length; i++) {
//     var result = array[i];
//     if (callback(result)) {
//       filteredArray.push(result);
//     }
//   }
//   return filteredArray;
// };

const evenNumbers = even => even % 2 === 0 ? true : false;
const oddNumbers = odd => odd % 2 !== 0 ? true : false;
const divideByThree = byThree => byThree % 3 === 0 ? true : false;
const divideByFive = byFive => byFive % 5 === 0 ? true : false;
const squared = square => Number.isInteger(Math.sqrt(square)) ? true : false;

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(filter(arr, squared));

// Call the filter function in 5 different cases ( 5 different filtering functions - example: filters the odd items, filter the items which are divisible by 3, etc... )

// Now translate the upper function to ES6 syntax


// 4 

/*
Write a function named multipleCallbacks that accepts 3 arguments:
	- an object containing a key name status that can have 2 different values: success or error
  - a function that should be called if the value of the status key is success
  - a function that should be called if the value of the status key is error

The function should be written directly into ES6 specific syntax
*/
const someObj = { status: ["success", "error"], }

const getRandomInt = max => Math.floor(Math.random() * Math.floor(max));

let randomStatus = getRandomInt(2);


const succes = () => { console.log("The status has the value succes") }
const error = () => { console.log("The status has the value error") }


const multipleCallbacks = (obj, validationSucces, validationError) => {
    if (obj.status[randomStatus] === 'success') {
        return validationSucces();
    } else {
        return validationError();
    };
}

// console.log(multipleCallbacks(someObj, succes, error));




// 5

// -- FAKE DATA FETCHER --


const filter = (array, callback) => {
    var filteredArray = [];
    for (var i = 0; i < array.length; i++) {
        var result = array[i];
        if (callback(result)) {
            filteredArray.push(result);
        }
    }
    return filteredArray;
};

const simulateServerCall = (url, params) => {
    console.log(`Fetching data for ${params.userId} from: `, url);
    setTimeout(() => {
        console.log('Server responded with success');
        const fakeData = {
            numberOfEmployees: 4,
            employees: [{
                    name: 'Employee1',
                    age: 33,
                    title: 'Developer',
                },
                {
                    name: 'Employee2',
                    age: 28,
                    title: 'Manager',
                },
                {
                    name: 'Employee3',
                    age: 32,
                    title: 'Tester',
                },
                {
                    name: 'Employe4',
                    age: 31,
                    title: 'Developer',
                },
            ]
        };
        // now what ?
        const developers = () => {
            const developer = [];
            // console.log(developer);
            for (i = 0; i < fakeData.employees.length; i++) {
                if (fakeData.employees[i].title === "Developer") {
                    developer.push(fakeData.employees[i]);
                    // console.log(developer);
                }
                // console.log(developer);
            }
            console.log(developer);
        }

        filter(fakeData.employees, developers);
    });
};



const fetchDataFor = userId => {
    simulateServerCall('https://server.com/employee', { userId: userId });
};

fetchDataFor();

// Adjust the upper functions so that a callback that filters the employees if they have a developer role
// is executed within the setTimeout that simulates a request to the server; The callback should be implemented by you
// and should print on the browser's console only the employees that are developers;
// Requirement: reuse the filtering function that you have already implemented


// 6
/*
Read about setInterval here: https://www.w3schools.com/jsref/met_win_setinterval.asp
Using setInterval, implement a function called theFinalCountdown that accepts as a parameter a numeric value and counts down until 0 every 1s.
The countdown will be displayed in the console.
Ex:
theFinalCountdown(10); call will display:

10
(...after 1s)
9
(...after 1s)
8
(...after 1s)
7
...
...
0

and then stops
*/

// const theFinalCountdown = sec => {
//     if ()
//         console.log(sec);
// }

// setInterval(theFinalCountdown(10), 1000);