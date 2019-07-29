const div = document.createElement('div');
let divHeight = 5;
document.body.appendChild(div);
let heightFlag = true;

window.addEventListener('scroll', function () {
    if (divHeight > this.window.innerHeight / 2) {
        heightFlag = !heightFlag;
        div.style.backgroundColor = "green";
    } else if (divHeight <= 5) {
        heightFlag = !heightFlag;
        div.style.backgroundColor = "red";
    }

    if (heightFlag) {
        divHeight -= 10;
        div.style.height = `${divHeight}px`;
    } else {
        divHeight += 10;
        div.style.height = `${divHeight}px`;
    };
});