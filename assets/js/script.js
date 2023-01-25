const slider = document.querySelector('.slider');
const active = document.querySelector('#active');
const line1 = document.querySelector('#line1');
const line2 = document.querySelector('#line2');
const line3 = document.querySelector('#line3');
const line4 = document.querySelector('#line4');
const container = document.querySelector('.container');

line1.addEventListener('click' , () => {
    slider.style.transform = "translateX(0)"
    active.style.top = 0;
    container.style.background = "linear-gradient(45deg , rgb(255, 166, 0) , rgb(12, 18, 28)"
})

line2.addEventListener('click' , () => {
    slider.style.transform = "translateX(-25%)"
    active.style.top = "85px";
    container.style.background = "linear-gradient(-45deg , green , rgb(12, 18, 28)";
})

line3.addEventListener('click' , () => {
    slider.style.transform = "translateX(-50%)"
    active.style.top = "170px";
    container.style.background = "linear-gradient(45deg , green , red)";
})

line4.addEventListener('click' , () => {
    slider.style.transform = "translateX(-75%)"
    active.style.top = "255px"; 
    container.style.background = "linear-gradient(-45deg , rgb(255, 166, 0) , red) ";
})