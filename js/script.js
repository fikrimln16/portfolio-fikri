let menu = document.querySelector('#menu-bars');
let header = document.querySelector('header');
let socmed = document.querySelector('main aside');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    header.classList.toggle('active');
}

socmed.onclick = () =>{
    socmed.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    header.classList.remove('active');
}

