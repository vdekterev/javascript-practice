document.addEventListener('DOMContentLoaded', () => {
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