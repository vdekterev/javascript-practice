/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

// 1 - Remove ADS
const ads = document.querySelector('.promo__adv');
ads.remove();

// 2 - Modify genre
const comedyGenre = document.querySelector('.promo__genre');
comedyGenre.innerHTML = 'Драма';

// 3 - Update picture
const bgPicture = document.querySelector('.promo__bg');
bgPicture.style.backgroundImage = 'url("img/bg.jpg")';

// 4 - Sort by alphabet and take values from movieDB.movies
movieDB.movies.sort();
const films = document.querySelectorAll('li.promo__interactive-item');
films.forEach((film, index) => {
    film.innerHTML = `${index + 1}. ${movieDB.movies[index]}`;
})
