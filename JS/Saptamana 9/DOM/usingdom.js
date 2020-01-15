//Selectati fiecare element cu metodele ajutatoare
// primul dupa id - getElementById
const testId = document.getElementById('test');
testId.style.backgroundColor = 'red';

//al doilea si al 3lea cu getElementsByClassName
const testClass = document.getElementsByClassName('test');
testClass[0].style.backgroundColor = 'blue';
testClass[1].style.backgroundColor = 'green';
//cele 2 section cu getElementByTagName

const sectionTag = document.getElementsByTagName('section');
sectionTag[0].style.backgroundColor = 'orange';
sectionTag[1].style.backgroundColor = 'black';
//etc
// La fiecare selectie vom schimba background color-ul cu o culoare diferita pentru fiecare metoda

const querySelector = document.querySelector('#test-query');
querySelector.style.backgroundColor = 'violet';

const querySelectorAll = document.querySelectorAll('.test-query-all');
querySelectorAll[0].style.backgroundColor = 'yellow';
querySelectorAll[1].style.backgroundColor = 'brown';