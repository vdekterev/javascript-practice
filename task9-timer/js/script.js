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

    function showTab(index = 0) {
        const tab = tabListWrapper.children[index];
        tab.classList.add('tabheader__item_active');
        tabPictures[index].style.display = '';
    }

    hideTabs();
    showTab();

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

    setTimeLeft('.timer', '2023-05-21 13:48');
});