/* Ex.1
Loop through the Array and remove all non-active users from the initial Array */

const myData = [{
    name: 'Iggy Turskis',
    active: false
}, {
    name: 'Geoff Newell',
    active: true
}, {
    name: 'Peter Newnham',
    active: true
}, {
    name: 'James Walker',
    active: false
}];


let nonActive = myData.filter(myData => myData.active);
const body = document.querySelector('body');
const list = document.createElement('ul');
body.appendChild(list);

const listElem1 = document.createElement('li');
list.appendChild(listElem1);
listElem1.innerText = nonActive[0].name;
const listElem2 = document.createElement('li');
list.appendChild(listElem2);
listElem2.innerText = nonActive[1].name;