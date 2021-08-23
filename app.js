const numberOfFilms = +prompt('сколько фильмов посмотрели');
``
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('one of them?', ''),
      b = prompt('did you liked it?', ''),
      c = prompt('one of them?', ''),
      d = prompt('did you liked it?', '');
    
personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);


