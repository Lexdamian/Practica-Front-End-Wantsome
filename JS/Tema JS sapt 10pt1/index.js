const body = document.querySelector('body');
const forms = document.createElement('form');
const title = document.createElement('h1');
const input = document.createElement('input');
const label = document.createElement('label');

title.innerText = "Create your Sites 42 Sites accound in seconds";
forms.appendChild(title);

label.innerText = 'Username: ';
forms.appendChild(label);

input.id = "userName";
input.type = "text";
input.name = "username";
input.style.width = "550px";
forms.appendChild(input);


forms.style.width = "780px";
forms.style.alignItems = "center";
forms.style.border = "1px";
forms.style.borderStyle = "solid";
forms.style.borderColor = "black";


body.appendChild(forms);


