const h1 = document.querySelector('h1');
document.body.addEventListener('mousemove', (e) => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const x = e.clientX;
    const y = e.clientY;

    const red = x / width * 100;
    const green = y / height * 100;
    const blue = x / width * 100;
    h1.textContent = `${e.clientX}, ${e.clientY}`;
    document.body.style.backgroundColor = `rgb(${red}%, ${green}%, ${red}%)`;
});