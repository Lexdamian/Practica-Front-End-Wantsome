const books = [
  {
    title: 'The Power of Habit',
    author: 'Charles Duhigg',
    read: true
  },
  {
    title: 'Mindset: The New Psychology of Success',
    author: 'Carol S. Dweck',
    read: false
  }];

// Creati o pagina web care are un h1 cu "Book List"
// adugati un script style unde sa tinem js-ul
//Iterati fiecare carte si pentru fiecare creati un p care sa contina titlul si autorul si faceti append in pagina noastra
//BONUS: folositi ul si li pentru a face display la carti
//BONUS: adaugati o proprietaet pentru fiecare carte cu URL de la coverul cartii si adaugati un element img pentru fiecare (nu uitati sa adaugati img-ul si pe obiectul cartii - acolo va fi si poza)
//BONUS: schimbati style-ul pentru fiecare carte in functie daca a fost citita sau nu.




(() => document.body.innerHTML += '<h1>Book List</h1>')();

// display books titles and authors
(() => {
  books.forEach(element => {
    document.body.innerHTML += `<p>${element.title}, by ${element.author}.</p>`;
  }); 
})();



// making list to display books

books.forEach(elem => { elem.url = ""; });
books[0].url = "https://www.books-express.ro/the-power-of-habit/p/wpp,9781847946249?gclid=Cj0KCQiAw4jvBRCJARIsAHYewPPkWr2l0UYPxJvLZM-t5MM8zqFk2abBY880C31nq06CxEG4VNlDnakaAteeEALw_wcB";
books[1].url = "https://www.emag.ro/mindset-the-new-psychology-of-success-carol-s-dweck-9780345472328/pd/DM6KGKBBM/";



(() => {
  books.forEach(element => {
    let list = document.body.innerHTML += '<ul></ul>'; 
    list = document.body.innerHTML += `<li><a href =${element.url} target =_blank>${element.title}, by ${element.author}.</a></li>`;
  }); 
  })();



