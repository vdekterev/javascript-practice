const userWeight = document.querySelector('.weight'),
    userHeight = document.querySelector('.height'),
    imtInput = document.querySelector('.result');

let imt = 0;

userWeight.addEventListener('input', () => {
    let res = Number(userWeight.value) / Number(userHeight.value ** 2);
    imtInput.innerText = Math.floor(res*10000).toFixed(1);;
    console.log(imtInput); 
})

userHeight.addEventListener('input', () => {
    let res = Number(userWeight.value) / Number(userHeight.value ** 2);
    imtInput.innerText = Math.floor(res*10000).toFixed(1);;
    console.log(imtInput); 
})
