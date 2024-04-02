const counter = document.getElementById('plus');
const counterMinus = document.getElementById('minus');
const value = document.getElementById('value');

function increment() {
    let result = Number(value.textContent) + 1;
    value.textContent = result;
    console.log('aiea')
}

counter.onclick = increment;

function decrement() {
    let result = Number(value.textContent) - 1;
    if (result >= 1) {
        value.textContent = result;
    }
}

counterMinus.onclick = decrement;

const btn256 = document.getElementById('btn256');
const btn512 = document.getElementById('btn512');
const price = document.querySelector('.price');

btn256.onclick = function() {
    price.textContent = '1500$';
    btn256.style.backgroundColor = '#4200b5b2';
    btn512.style.backgroundColor = '#782affb2';
};

btn512.onclick = function() {
    price.textContent = '2000$';
    btn512.style.backgroundColor = '#4200b5b2';
    btn256.style.backgroundColor = '#782affb2';
};