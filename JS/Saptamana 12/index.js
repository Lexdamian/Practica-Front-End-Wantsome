function mug(volume, handle, color, season) {
    this.volume = volume;
    this.handle = handle;
    this.color = color;
    this.season = season;
}

const christmasMug = new mug("250ml", 'yes', 'red', 'christmas');

// console.log(christmasMug);


const piano = {};

piano.color = "black";
piano.weigth = '150kg';
piano.keys = 84;
piano.brand = 'yamaha';

// console.log(piano);


// The Car and the Truck class have similar behavior and properties.
// Rewrite them in a way such that they share those properties.

// var Vehicle = function(driver) {
//     this.driver = driver;
//     this.speed = 0;
//     this.drive = function(mph) {
//         this.speed = mph;
//         return this.driver + ' driving at ' + mph + ' miles per hour';
//     };
// };

// var Car = function(driver) {
//     this.driver = driver;
//     this.speed = 0;
//     this.drive = function(mph) {
//         this.speed = mph;
//         return this.driver + ' driving at ' + mph + ' miles per hour';
//     };
// };

// var Truck = function(driver) {
//     this.driver = driver;
//     this.speed = 0;
//     this.cargo = [];
//     this.drive = function(mph) {
//         this.speed = mph;
//         return this.driver + ' driving at ' + mph + ' miles per hour';
//     };

//     this.loadCargo = function(cargo) {
//         this.cargo.push(cargo);
//         return this;
//     };

//     this.unloadCargo = function() {
//         return this.cargo.pop();
//     };
// };


// var Car = function(driver) {
//     this.prototype = new Vehicle(driver);
// };

// console.log(Car);

// var Truck = function(driver) {
//     this.cargo = [];
//     this.loadCargo = function(cargo) {
//         this.cargo.push(cargo);
//         return this.cargo;
//     };

//     this.unloadCargo = function() {
//         return this.cargo.pop();
//     };
//     this.prototype = new Vehicle(driver);
// };

// const newTruck = new Truck('Ovidiu');
// const newCar = new Car('Alex');

// console.log(newTruck);
// console.log(newCar);





var Person = function() {};

Person.prototype.initialize = function(name, age) {
    this.name = name;
    this.age = age;
}

const Trainer = function(subject) {
    // this.prototype = new Person();

    // ce e in plus si specific pentru trainer
    this.subject = subject;
    this.teach = () => {
        console.log(`${this.name} is now teaching ${this.subject}`);
    }
}

Trainer.prototype = new Person();
const Alex = new Trainer('Javascript');
Alex.initialize("Alex", 31);

//Creati un obiect numit Trainer care sa fie derivat din obiectul Person si implementati o metoda teach() ce primeste un string numit subject si printeaza
// [nume trainer] is now teaching [subject]