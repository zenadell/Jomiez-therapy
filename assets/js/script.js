const navToggle = document.querySelector('.nav-toggle');
const navList = document.querySelector('.nav-list');

const toggleMenu = function(){
    navList.classList.toggle('active');
    this.classList.toggle('active');
}

navToggle.addEventListener('click',toggleMenu);

//header slideIn animation
const headerEle = document.querySelector('.header');
window.addEventListener('scroll',function(){
    if(this.scrollY > 50){
        headerEle.classList.add('active');
    }else{
        headerEle.classList.remove('active');
    }
})

//copyright date
const date = document.querySelector('.date');
date.innerText = new Date().getFullYear();