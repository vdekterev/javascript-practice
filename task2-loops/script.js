/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять. (К любой строке можно обратиться как 
str.length - и получить её длину)

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами
*/

'use strict';

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
}


function validateAnswer(answer) {
    while (answer === '' || answer === null || answer.length > 50) {
        answer = prompt('Please enter a valid answer (not empty and no more than 50 characters)');
    }
    return answer;
}


const numberOfFilms = validateAnswer(prompt('Number of films watched?', ''));

personalMovieDB.count = numberOfFilms;

for (let i = 0; i < 2; i++) {
    const movie = validateAnswer(prompt('One of the latest watched films', ''));
    const rating = validateAnswer(prompt('How would you rate it?', ''))

    personalMovieDB.movies.movie = rating;
}


switch(true){
    case personalMovieDB.count < 10:
        alert('You have watched not many films');
        break;
    case personalMovieDB.count <= 30:
        alert('You are an average viewer');
        break;
    case personalMovieDB.count > 30:
        alert('You are a moviemaniac');
        break;
    default:
        alert('An error occured!');    
}
