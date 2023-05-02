const boxes = document.querySelectorAll('.box');

boxes.forEach((box, element) => {
    box.addEventListener('click', () => {
        if (box.style.backgroundColor != 'red') {
            box.style.backgroundColor = 'red';
            return;
        }
        box.style.backgroundColor = 'blue';
    })

})