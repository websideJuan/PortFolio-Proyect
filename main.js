import {pintarCards} from "./fechApiData.js"
import{actionForm} from "./formulario.js"

const div__element = document.getElementById('div-element')
const hero = document.getElementById('hero')
const navegation = document.getElementById('navegation')
const btn_hero = document.getElementById('btn_hero')
const bodyE = document.getElementById('dinamic-element')




window.addEventListener('DOMContentLoaded', e => {
    // e.stopPropagation()
    showItems()
    pintarCards()
    actionForm('container')
})




//intento de manejar el comportamiento del DOM

// window.addEventListener('scroll', () => scrollAnimation())


// const scrollAnimation = () => {
//     const header = document.querySelector('.header')
//     let scroll = document.body.scrollTop || parseInt(document.documentElement.scrollTop)
//     let height = document.documentElement.scrollHeight

//     console.log(height)
//     if(scroll ){
//         console.log('hello')
//     }
// }


//funcion aniamcion al inicial la Pagina.


const showItems = () => {
    navegation.style.transform = `translate(0)`
    hero.style.transform = `translate(0)`
    btn_hero.style.transform = 'translate(0)'
}




// click con delegacion de eventos.

document.addEventListener('click', (e) => {
    btnClick(e)
    setBtnHero(e)
    btnHero(e)
    navShoe(e)
})


const navShoe = (e) => {if(e.target.dataset.showmrnu === 'showMrnu'){const ulNav = document.querySelector('nav ul').classList.toggle('showUl')}}

const btnHero = (e) => {

    if(e.target.dataset.btnhero == 'hero'){
    
        bodyE.classList.add('showPop')
        
        bodyE.innerHTML = `
        <div class='elemt-dinamic'>
            <button>
                <i class="fa-solid fa-xmark fa-2xl" data-close='close'></i>
            </button>

            <p>texto que da a demostrar la informacion que solicita el cliente final</p>
        </div>
        ` 
    }
}

const btnClick = (e) => {
    
    const n = e.target.dataset.btn === 'btn'
    
    if(n) {
        const widthDiv = input.offsetWidth
       
        if(widthDiv <= 28){
            div__element.classList.add('active')
        }else{
            div__element.classList.remove('active')
        }
    }
}

//control del acordion

let slideIndex = 1;

const setBtnHero = (e) => {if(e.target.dataset.close == 'close'){bodyE.classList.remove('showPop')}}

const plusSlides = (n) => {showSlides(slideIndex += n)};

const currentSlide = (n) => {showSlides(slideIndex = n)};

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName('card__banner');
    let dots = document.getElementsByClassName('dot');
    if(n > slides.length){slideIndex = 1}
    if(n < 1){slideIndex = slides.length}

    for(i = 0; i < slides.length ; i++) {
        slides[i].style.display = "none"
    }
    for (i = 0; i < dots.length; i++) {

        dots[i].className = dots[i].className.replace('activate', '')
    }

    slides[slideIndex -1].style.display ="block"
    dots[slideIndex-1].className += " activate"
}