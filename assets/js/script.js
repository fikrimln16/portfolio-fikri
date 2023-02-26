let menu = document.querySelector('#menu-bars');
let aside = document.querySelector('aside');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    aside.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    aside.classList.remove('active');
}

