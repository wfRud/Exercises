const btn = document.querySelector('.btn');
const ul = document.querySelector('ul');
const elements = document.querySelectorAll('li');

let fontSize = 10;
ul.style.display = 'none';

const magnifyElements = function () {
    ul.style.display = 'block';
    ++fontSize;
    elements.forEach(element => {
        element.style.fontSize = `${fontSize}px`;
    });
}

btn.addEventListener('click', magnifyElements);