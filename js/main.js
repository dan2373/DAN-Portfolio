'use strict'

document.addEventListener("DOMContentLoaded", function(){
    
});

function scrollIntoView(selector){
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({behavior: 'smooth'});
}

function scrollIntoView(selector, link){
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({behavior: 'smooth', block: link});
}

// Navbar Scroll
const navbar = document.querySelector('#navbar');
const navbarHome = document.querySelector('#home');
const navbarHomeHeight = navbarHome.getBoundingClientRect().height;
document.addEventListener('scroll', () =>{
    if(window.scrollY > navbarHomeHeight * 0.85) {
        navbar.classList.add('navbar-dark');
    }else{
        navbar.classList.remove('navbar-dark');
    }
});

// Handle Scroll
const navbarMenu = document.querySelector('.navbar_menu');
navbarMenu.addEventListener('click', (e) => {
    const target = e.target;
    const link = target.dataset.link;
    if(link == null) {
        return;
    }
    navbarMenu.classList.add('close');
    scrollIntoView(link, "start");
});

// Navbar toggle button
const navbarToggleBtn = document.querySelector('.navbar_toggle-btn');
navbarToggleBtn.addEventListener('click', () => {
    navbarMenu.classList.toggle('close');
});

// About Me Scroll
const honeContacBtn = document.querySelector('.home_btn');
honeContacBtn.addEventListener('click', () => {
    scrollIntoView('#about');
});

// text animation
var typingBool = false;
var typingIdx = 0;
var liIndex = 0;
var liLength = $(".home_text>ul>li").length;
var tyInt

//가져올 타이핑 될 텍스트
var typingTxt = $(".home_text>ul>li").eq(liIndex).text();
$(function(){
    setTimeout(function() { 
            typingTxt=typingTxt.split(""); //한글자씩 자른다
            if(typingBool == false) {
                typingBool = true;
                tyInt = setInterval(typing,100);
            }
    }, 2000);
});       
function typing() {

    $(".home_text-typing ul li").removeClass("on");
    $(".home_text-typing ul li").eq(liIndex).addClass("on");
    if(typingIdx<typingTxt.length){

        $(".home_text-typing ul li").eq(liIndex).append(typingTxt[typingIdx]);
        typingIdx++;
    }else{
        if(liIndex<liLength-1){

            liIndex++;
            typingIdx = 0;
            typingBool = false;
            typingTxt = $(".home_text>ul>li").eq(liIndex).text();
            clearInterval(tyInt);
            setTimeout(function(){
                tyInt = setInterval(typing,100);
            },1000);
        }else if(liIndex==liLength-1){
            clearInterval(tyInt);
        }
    }
}

// Arrow-up Show
const arrowUp = document.querySelector('.arrow-up');
document.addEventListener('scroll', () => {
    if(window.scrollY > navbarHomeHeight * 0.85) {
        arrowUp.classList.add('visible');
    }else{
        arrowUp.classList.remove('visible');
    }
});

// Arrow-up Scroll
arrowUp.addEventListener('click', () => {
    scrollIntoView('#home');
});
