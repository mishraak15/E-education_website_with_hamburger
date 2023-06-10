

const burger=document.getElementById('burger');
const nav_list=document.getElementById('nav-list');

burger.addEventListener('click',()=>{
     nav_list.classList.toggle('visible');
});