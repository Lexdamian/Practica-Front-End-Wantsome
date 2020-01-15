/* 
1. Creati o pagina HTML care sa includa un buton; Intr-un fisier index.js separat 
definiti o functie buttonEventHandler al carei cod sa porneasca o fereastra
de tip alerta in care se va afisa textul "Ai apasat pe buton.". Specificati prin 
intermediul onclick atasat elementului buton un event listener care sa declanseze
functia buttonEventHandler atunci cand se apasa pe buton.
*/

const button = document.getElementById('buton');
const buttonEventHandler = () => { return alert("Ai apasat pe buton.") }
button.onclick = buttonEventHandler;



/*
2. Adaugati un nou element de tip text input. Specificati o noua functie textInputEventHandler.
care afiseaza o alta alerta cu textul ("Textul din input a fost schimbat"). Specificati
un event listener care sa corespunda actiunii descrise in textul afisat de alerta.
*/

const text = document.getElementById('text')
const textInputEventHandler = () => { return alert("Textul din input a fost schimbat.") }
text.onkeydown = textInputEventHandler;

/*
3. Adaugati un nou element de tip paragraf care sa contina textul "Sunt un cameleon.".
Definiti o noua functie cameleonEventHandler care schimba random culoarea paragrafului
atunci cand user-ul apasa orice tasta.
Hint: folositi addEventListener
*/

const paragraph = document.getElementById('para');

const colors = {
    color1: "green",
    color2: "red",
    color3: "blue",
    color4: "magenta",
    color5: "yellow",
    color6: "aqua",
}


// let colorRandom = color[random];
// console.log(colorRandom);

const cameleonEventHandler = () => {
    let random = Math.floor((Math.random() * 6) + 1);
    let color = Object.values(colors);
    let colorRandom = color[random];
    return paragraph.style.backgroundColor = colorRandom;
}

paragraph.onclick = cameleonEventHandler;