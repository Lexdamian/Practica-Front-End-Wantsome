//1. Creati o clasa Person care sa aiba firstName si lastName in constructor
//2.aduagati o metoda displayPersonName care sa returneze numele complet
//3. creati o persoana cu noua clasa unde dati un nume si-un prenume si apelati metoda respectiva


class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }

    displayName() {
        return `${this.name} ${this.surname}`;
    }
};


const vladimir = new Person("Vladimir", 'Bostan');

// console.log(vladimir.displayName());




//1. Creati o clasa Animal care sa aiba in constructor name si weight
//2. Creati urmatoarele metode: eatFood, sleep, weakingUp - fiecare metoda o sa returneze un string '$name is eating' '$name is sleeping' '$name is weaking up'
//3. Creati o clasa noua care sa faca extend la clasa Animal si sa ia numele si weight-ul de la el(tip: super) - ex: class Elephant, class Lion etc
//4. Adaugati 4 metode noi:
//   walking - $name is walking
//   rage - $name is rageing 
//   showBehaviour - returnati metodele eatFood si rage
//   dailyRoutine - returnati metodele weakingUp, rage, eatFood si sleep

//5. Creati o constanta noua din clasa cu numele de animal pe care ati scris-o mai sus( NU DIN clasa Animal ci din clasa Elephant, Monkey, Lion etc etc);
//6. Accesati toate cele 4 metode de pe noul animal. 


class Animal {
    constructor(name, weigth) {
        this.name = name;
        this.weigth = weigth;
    };

    eatFood() {
        return `${this.name} is eating.`;
    }

    sleep() {
        return `${this.name} is sleeping.`;
    }

    wakingUp() {
        return `${this.name} is waking up.`;
    }
};


class Hipo extends Animal {
    constructor(name, weigth, eatFood, wakingUp, sleep) {
        super(name, weigth, eatFood, wakingUp, sleep);
    }


    walking() {
        return `${this.name} is running from mice.`
    };

    rage() {
        return `${this.name} is rageing.`
    };

    showBehaviour() {
        return `${super.eatFood()} ${this.rage()}`
    };

    dailyRoutine() {
        return `${super.wakingUp()}, ${this.rage()}, ${super.eatFood()}, ${super.sleep()}.`;
    };

};


const jumbo = new Hipo('suka', 130);


const noJumbo = new Hipo('mirel', 15);



// console.log(jumbo.showBehaviour());




//1. creati o clasa Account care sa aiba location si name la constructor
//2. creati o clasa Transaction care sa aiba sender, bank, amount si reference la constructor
//2.1 - clasa Transaction sa aiba un getter finalSum() care sa scada din amount 10;
//3. creati o clasa Table care sa aiba in cunstructor un array gol transactions
//3.1 Clasa Table sa aiba o metoda addTransaction unde sa putem adauga tranzactiile pe care o sa le creem mai tarziu




// const bankAccount = ...;
// const transaction1 = ...;
// const transaction2 = ...;
// const table = ...;
// table.addTransaction(...)
// console.log(table)


class Account {
    constructor(name, location) {
        this.name = name;
        this.location = location;
    }
};

class Transaction {
    constructor(sender, bank, amount, reference) {
        this.sender = sender;
        this.bank = bank;
        this.amount = amount;
        this.reference = reference;
    }

    finalSum() {
        return this.amount - 10;
    }
}


class Table {
    constructor(transactions) {
        this.transactions = transactions;
        let arr = [];
    }

    addTransaction() {

    }
};


let transaction1 = new Transaction('Trump', 'ING', 3500, '09988766');
let transaction2 = new Transaction('Dragnea', 'BT', 12000, '09912766');
let transaction3 = new Transaction('Mama', 'Raiffeisen', 500, '45688766');