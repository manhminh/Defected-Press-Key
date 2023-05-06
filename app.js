const alert = document.querySelector('.alert');
const box = document.querySelector('.box');

const result = document.querySelector('.result')
const key = document.querySelector('.card.key p:last-child');
const loca = document.querySelector('.card.location p:last-child');
const which = document.querySelector('.card.which p:last-child');
const code = document.querySelector('.card.code p:last-child');


document.addEventListener('keydown', function (e) {
    alert.classList.add('hide');
    console.log(e);
    result.innerText = e.which;
    if(e.code === 'Space') {
        key.innerText = e.code;
        loca.innerText = e.location;
        which.innerText = e.which;
        code.innerText = e.code;
    } else {
        key.innerText = e.key;
        loca.innerText = e.location;
        which.innerText = e.which;
        code.innerText = e.code;
    }
    box.classList.remove('hide');
})