const btn = document.querySelector('button');
const container = document.querySelector('.container');
let count = 0;


const createDiv = function () {
    const div = document.createElement('div');
    div.innerText = ++count;
    if (count % 5 === 0) {
        div.classList.add('circle');
    }
    container.appendChild(div);
}

btn.addEventListener('click', createDiv);