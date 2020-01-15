let url = "https://jsonplaceholder.typicode.com/users";

export const requestBook = fetch(url);

export const reqMovies = fetch(url).then(response => response.json());