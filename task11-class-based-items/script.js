document.addEventListener('DOMContentLoaded', () => {

    // Tabs
    const tabList = document.querySelectorAll('.tabheader__item'),
        tabListWrapper = document.querySelector('.tabheader__items'),
        tabPictures = document.querySelectorAll('.tabcontent');

    function hideTabs() {
        tabPictures.forEach(tab => {
            tab.style.display = 'none';
        })
        tabList.forEach(tab => {
            tab.classList.remove('tabheader__item_active');
        })
    }

    function showTab(index = 1) {
        const tab = tabListWrapper.children[index];
        tab.classList.add('tabheader__item_active');
        tabPictures[index].style.display = '';
    }

    tabListWrapper.addEventListener('click', (event) => {
        const tab = event.target;

        if (tab?.classList.contains('tabheader__item')) {
            hideTabs();
            tabList.forEach((element, index) => {
                if (tab == element) {
                    showTab(index);
                };
            });
        };
    });

    // Timer

    function timeLeft(deadline) {
        const t = Date.parse(deadline) - Date.parse(new Date());
        return {
            'total': t,
            'days': Math.floor(t / (1000 * 60 * 60 * 24)),
            'hours': Math.floor((t / (1000 * 60 * 60) % 24)),
            'minutes': Math.floor((t / 1000 / 60) % 60),
            'seconds': Math.floor((t / 1000 % 60))
        }
    }

    function setTimeLeft(selector, deadline) {
        const timer = document.querySelector(selector),
            leftDays = timer.querySelector('#days'),
            leftHours = timer.querySelector('#hours'),
            leftMinutes = timer.querySelector('#minutes'),
            leftSeconds = timer.querySelector('#seconds'),
            timeInterval = setInterval(updateClock, 1000);

        updateClock();

        function updateClock() {
            const t = timeLeft(deadline);
            if (t.total <= 0) {
                clearInterval(timeInterval);
                return;
            }
            leftDays.innerText = isZero(t.days);
            leftHours.innerText = isZero(t.hours);
            leftMinutes.innerText = isZero(t.minutes);
            leftSeconds.innerText = isZero(t.seconds);
        }

        function isZero(n) {
            return n >= 0 && n < 10 ? `0${n}` : n;
        }
    }

    hideTabs();
    showTab();

    setTimeLeft('.timer', '2023-05-21');

    // Modal

    const modalWindow = document.querySelector('.modal'),
        modalButtons = document.querySelectorAll('[data-modal]'),
        modalClose = document.querySelector('[data-close]');

    modalButtons.forEach(btn => {
        btn.addEventListener('click', openModalWindow);
    });

    modalClose.addEventListener('click', closeModalWindow);

    function openModalWindow() {
        modalWindow.classList.toggle('hidden');
        document.body.style.overflow = 'hidden';
        // clearInterval(modalWindowTimerId);
    };

    function openModalWindowByScroll() {
        if (document.documentElement.clientHeight + window.pageYOffset >= document.documentElement.scrollHeight) {
            openModalWindow();
            window.removeEventListener('scroll', openModalWindowByScroll)
        }
    }

    function closeModalWindow() {
        modalWindow.classList.toggle('hidden');
        document.body.style.overflow = '';
    };

    modalWindow.addEventListener('click', (event) => {
        if (event.target.classList == 'modal') {
            closeModalWindow();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape' && !modalWindow.classList.contains('hidden')) {
            closeModalWindow();
        };
    });

    window.addEventListener('scroll', openModalWindowByScroll);

    // const modalWindowTimerId = setTimeout(openModalWindow, 3000);

    // Class based Cards

    class MenuCard {
        constructor(imgSrc, imgAlt = 'img', title, description, price, parentSelector) {
            this.imgSrc = imgSrc;
            this.imgAlt = imgAlt;
            this.title = title;
            this.description = description;
            this.price = price;
            this.parentSelector = document.querySelector(parentSelector);
        }

        render() {
            const elem = document.createElement('div');
            elem.innerHTML = `
                <div class="menu__item">
                <img src="../task8-tab-menu/img/tabs/${this.imgSrc}" alt="${this.imgAlt}">
                <h3 class="menu__item-subtitle">${this.title}</h3>
                <div class="menu__item-descr">${this.description}</div>
                <div class="menu__item-divider"></div>
                <div class="menu__item-price">
                    <div class="menu__item-cost">Цена:</div>
                    <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                </div>
            </div>
            `;

            this.parentSelector.append(elem);
        }
    }

    new MenuCard(
        'vegy.jpg',
        'vegy',
        'Меню "Фитнес"',
        'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
        '229',
        '.menu .container'
    ).render();

    new MenuCard(
        'elite.jpg',
        'elite',
        'Меню “Премиум”',
        'Меню “Премиум” - мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
        '550',
        '.menu .container'
    ).render();

    new MenuCard(
        'post.jpg',
        'post',
        'Меню "Постное"',
        'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствиепродуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
        '430',
        '.menu .container'
    ).render();
});