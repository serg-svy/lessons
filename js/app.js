//Создание приложения по учету просмторенных фильмов.

// const numberOfFilms =
//     +prompt('Сколько фильмов вы уже посмотрели?', '');

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };    

// const a = prompt('Один из послдених просмотренных фильмов?', ''),
//         b = prompt('На сколько оцените его?', ''),
//         c = prompt('Один из послдених просмотренных фильмов?', ''),
//         d = prompt('На сколько оцените его?', '');

// personalMovieDB.movies[a] = b;   
// personalMovieDB.movies[c] = d; 

// console.log(personalMovieDB);

function BubbleSort(A)       // A - массив, который нужно
{                            // отсортировать по возрастанию.
    var n = A.length;
    for (var i = 0; i < n-1; i++)
     { for (var j = 0; j < n-1-i; j++)
        { if (A[j+1] < A[j])
           { var t = A[j+1]; A[j+1] = A[j]; A[j] = t; }
        }
     }                     
    return A;    // На выходе сортированный по возрастанию массив A.
}