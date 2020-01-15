let nr = Math.floor(Math.random() * 30).toFixed(0);
// console.log(nr);
const greaterThenTen = nr => {
    // console.log(nr);
    let great = new Promise((resolve, reject) => {
        if (nr > 10) {
            resolve("The number is greater then 10");
        } else {
            reject("The number is lower then 10");
        }
    });

    great.then((greater) => {
        console.log(greater);
    }).catch((reason) => {
        console.log(`Not showing the number because ${reason}`)
    });

};

// greaterThenTen(nr);



let str = "Alex works with js";

const containsPromise = str => {
    let contains = new Promise((resolve, reject) => {
        let strToArr = str.split(' ');
        console.log(strToArr);
        for (i = 0; i < strToArr.length; i++) {
            if (strToArr[i] === "promise") {
                resolve(`The sentence cotains the word promise`);
            };
        };

        reject(`The sentence does not contain the word promise`);
    });

    contains.then((contain) => {
            console.log(contain);
        })
        .catch((doesNot) => {
            console.log(doesNot);
        })
};

// containsPromise(str);





let strInput = "yolo";

const isString = param => {
    let succes = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof param !== "string") {
                reject(param);
                return;
            };

            resolve(param.toUpperCase());
        }, 500)
    });


    succes.then((elem) => console.log(elem))
        .catch((elem1) => console.log(elem1));
};

// isString(strInput);




const capitalizeWords = arr => {
    let toUpper = new Promise((resolve, reject) => {
        resolve(arr.forEach(element => element.toUpperCase()));
        reject('');
    });

    toUpper.then((elem) => console.log(elem))
        .catch((elem1) => console.log(elem1));
}

capitalizeWords(['abc', 'dorel', 'trei']);