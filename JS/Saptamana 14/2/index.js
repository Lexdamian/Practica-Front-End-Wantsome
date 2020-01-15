import { requestBook, reqMovies } from './modules';

const greaterThanFive = elem => elem.id > 5;
requestBook().then(response => response.json())
    .then(res => res.filter(greaterThanFive));

reqMovies().then(responsone => console.log(responsone));