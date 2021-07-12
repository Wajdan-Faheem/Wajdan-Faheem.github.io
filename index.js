const stars = document.querySelector('#stars');
const moon = document.querySelector('#moon');
const mountains_behind = document.querySelector('#mountains_behind');
const mountains_front = document.querySelector('#mountains_front');
const text = document.querySelector('#text');
const icons = document.querySelector(".icon-move");

window.addEventListener('scroll',()=>{
    let value = window.scrollY;
    stars.style.left = value + "px";
    moon.style.top =  value*1.05+"px";
    mountains_behind.style.top = value * 0.5 + "px";
    text.style.marginRight = value * 4 + "px";
    icons.style.marginRight = value *4 +"px";
})