const hourHand = document.querySelector<HTMLDivElement>('.hour-hand');
const minuteHand = document.querySelector<HTMLDivElement>('.min-hand');
const secondHand = document.querySelector<HTMLDivElement>('.second-hand');
const timeRectangle = document.querySelector<HTMLDivElement>('.time');

function setDate() {
    const date = new Date();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();

    const secondDegree = ((second/60)*360) + 90;
    const minuteDegree = ((minute/60)*360) + ((second/60)*6) + 90;
    const hourDegree = ((hour/12)*360)+((minute/60)*30) + 90;
    if(!hourHand || !minuteHand || !secondHand || !timeRectangle) return;
    hourHand.style.transform = 'rotate('+hourDegree+'deg)';
    minuteHand.style.transform = 'rotate('+minuteDegree+'deg)';
    secondHand.style.transform = 'rotate('+secondDegree+'deg)';

    timeRectangle.innerHTML = '<span>'+hour+': '+minute+': '+second+'</span>'

}

setInterval(setDate, 1000);
setDate();


export {};
