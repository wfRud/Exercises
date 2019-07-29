let size = 10;
let orderElement = 1;



const init = () => {
    const btn = document.createElement('button');
    const reset = document.createElement('button');
    const ul = document.createElement('ul');
    btn.textContent = 'Add 10 Elements';
    reset.textContent = 'Reset';
    document.body.appendChild(btn);
    document.body.appendChild(reset);
    document.body.appendChild(ul);
    btn.addEventListener('click', createElements);
    reset.addEventListener('click', cleanList);
};

const createElements = () => {
    const ul = document.querySelector('ul');
    for (let i = 0; i < 10; i++) {
        size++;
        const li = document.createElement('li');
        li.textContent = `Element ${orderElement++}`
        li.style.fontSize = `${size}px`;
        ul.appendChild(li);
    }
};
const cleanList = () => {
    document.querySelector('ul').textContent = '';
    orderElement = 1;
    size = 10;
};


init();