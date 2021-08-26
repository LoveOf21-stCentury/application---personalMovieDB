'use strict'

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false, 
    start: function () {
        personalMovieDB.count = +prompt('сколько фильмов посмотрели?', '');

        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)); {
            personalMovieDB.count = +prompt('сколько фильмов посмотрели?', '');
        }
    }, 
    rememberMyFilms: function () {
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
    }, 
    detectPersonalLevel: function () {
        if (personalMovieDB.count < 10) {
            console.log('Hmm... not much') ; 
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log('You kind of love it'); 
        } else if(personalMovieDB.count >= 30) {
            console.log('Wow you are really love it'); 
        } else {
            console.log('something goes wrong'); 
        }
    }, 
    showMyDB: function (hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    writeYourGenres: function() {
        for (let i = 1; i <= 3; i++) {
           const genre = prompt(`What is genres do you like for the ${i}`);
           personalMovieDB.genres[i - 1] = genre;
        }
    },
    toggleVisibleMuDB: function () {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        }else{
            personalMovieDB.privat = true;
        }
    }
};


