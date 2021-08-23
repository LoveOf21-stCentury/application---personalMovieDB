const numberOfFilms = +prompt('сколько фильмов посмотрели');
``
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 0; i < 2; i++) {
    const a = prompt('one of last seen movie?', ''),
          b = prompt('rate how much did you liked it?', '');

    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        alert('done');
    } else {
        alert ('you did something wrong');
        i--; 
    }
}

if (personalMovieDB.count < 10) {
    alert ('Hmm... not much') 
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    alert ('You kind of love it')
} else if(personalMovieDB.count >= 30) {
    alert ('Wow you are really love it')
} else {
    alert ('something goes wrong')
}

console.log(personalMovieDB);


