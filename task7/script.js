/* Задания на урок 7:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };
    const ads = document.querySelector('.promo__adv'),
        comedyGenre = document.querySelector('.promo__genre'),
        bgPicture = document.querySelector('.promo__bg'),
        films = document.querySelector('ul.promo__interactive-list');

    function buildMovieList(filmsDB, parent) {
        parent.innerHTML = '';
        filmsDB.sort(); // 5 - Sort by alphabet
        filmsDB.forEach((movie, index) => {
            movie = movie.length > 21 ? movie.substring(0, 21) + '...' : movie; // 2 - trim film's name
            parent.innerHTML +=
                `<li class="promo__interactive-item">
                    ${index + 1}. ${movie}
                <div class="delete"></div>
            </li>`
        });

        // 3 - delete a film from the list
        document.querySelectorAll('.delete').forEach((button, index) => {
            button.addEventListener('click', () => {
                filmsDB.splice(index, 1);
                buildMovieList(filmsDB, parent);
            });
        });
    };


    // 1 - Remove ADS
    ads.remove();

    // 2 - Modify genre
    comedyGenre.innerHTML = 'Драма';

    // 3 - Update picture
    bgPicture.style.backgroundImage = 'url("img/bg.jpg")';

    // 4.1 - Build movie list based on movieDB.movies
    buildMovieList(movieDB.movies, films);

    // Task 7 

    // 1 - No reload page update
    const inputForm = document.querySelector('form.add'),
        inputField = inputForm.querySelector('input.adding__input'),
        checkbox = inputForm.querySelector('[type="checkbox"]');

    inputForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const newFilm = inputField.value,
            favorite = checkbox.checked;

        if (newFilm) {
            if (favorite) {
                console.log('Adding a new favorite film'); // 4 - log then adding a favorite film
            }
            movieDB.movies.push(newFilm);
            buildMovieList(movieDB.movies, films);
            event.target.reset();
        }
    });
});