const clockDiv = document.getElementById('clock');
const dateDiv = document.getElementById('date');
const getDate = () => new Date();

const pad1 = (str) => {
    return str.length < 2 ? `0${str}` : str;
}

const h = () => pad1(`${getDate().getHours()}`);
const m = () => pad1(`${getDate().getMinutes()}`);
const s = () => pad1(`${getDate().getSeconds()}`);

const time = () => `${h()}:${m()}:${s()}`;


const updateTime = () => {
    clockDiv.innerHTML = time();
}

const updateDate = () => {
    dateDiv.innerHTML = getDate().toDateString();
}

const randomColor = () => `#${Math.floor(Math.random()*16777215).toString(16)}`;

setInterval(function() {
    document.body.style.backgroundColor = randomColor();
    updateTime();
    updateDate();
}, 1000);
