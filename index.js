const clock = document.getElementById('clock');
const dateDiv = document.getElementById('date');
const date = () => new Date();

const pad1 = (str) => {
    return str.length < 2 ? `0${str}` : str;
}

const h = () => pad1(`${date().getHours()}`);
const m = () => pad1(`${date().getMinutes()}`);
const s = () => pad1(`${date().getSeconds()}`);

const time = () => `${h()}:${m()}:${s()}`;


const updateTime = () => {
    clock.innerHTML = time();
}

const updateDate = () => {
    dateDiv.innerHTML = date().toDateString();
}

const randomColor = () => `#${Math.floor(Math.random()*16777215).toString(16)}`;

setInterval(function() {
    document.body.style.backgroundColor = randomColor();
    updateTime();
    updateDate();
}, 1000);
