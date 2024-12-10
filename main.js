const openLinck = document.querySelector(".header__item-block")
const  dropMenu = document.querySelector(".header__item-dropdown")
const  dropIcon = document.querySelector(".header__item-image")

openLinck.addEventListener('click', () => {
    dropMenu.classList.toggle('active')
    dropIcon.classList.toggle('rotate')  
})


/* ====================================================================================================== */

const openMenu = document.querySelector(".menu__item-block")
const  menuDrop = document.querySelector(".menu__item-dropdown")
const  iconDrop = document.querySelector(".menu__item-image")

openMenu.addEventListener('click', () => {
  menuDrop.classList.toggle('active')
  iconDrop.classList.toggle('rotate')  
})


/* ====================================================================================================== */


const burgerButton = document.querySelector(".header__burger")
const navList = document.querySelector(".menu")
const html = document.querySelector("html")
const body = document.querySelector("body")

burgerButton.addEventListener("click", open)

function open(){
  navList.classList.toggle("active-menu")
  burgerButton.classList.toggle('active')
  html.classList.toggle("unscroll")
  body.classList.toggle("unscroll")
}

/* ====================================================================================================== */


const swiper = new Swiper('.hero__slider', {
  loop: true,
  speed: 1500,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});


/* ====================================================================================================== */

var mySwiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  loop: true,
  spaceBetween: 20,
  speed: 1500,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    1600: {
      slidesPerView: 4,
    },
    1251: {
      slidesPerView: 3,
    },
    800: {
      slidesPerView: 2,
    },
    0: {
      slidesPerView: 1,
    }
  },
});



 new Swiper(".reviews__inner", {
  direction: 'horizontal',
  loop: true,
  slidesPerView: 4,
  speed: 1500,
 
  pagination: {
    el: ".reviews__item-pagination",
    clickable: true,
  },

  breakpoints: {
    1300: {
      spaceBetween: 30,
      slidesPerView: 4,
    },
    768: {
      spaceBetween: 20,
      slidesPerView: 2,
    },
    320: {
      spaceBetween: 20,
      slidesPerView: 1,
    }
  },
});

/* ======================================================================================================= */

const accordeon = document.querySelector('.faq__accordion')
const accordeonTitles = accordeon.querySelectorAll('.faq__accordion-title')

accordeonTitles.forEach((accordeonTitle) => {
    accordeonTitle.addEventListener('click', function(){
        const currentText = accordeonTitle.parentElement.querySelector('.faq__accordion-content')
        accordeonTitle.classList.toggle('faq-accordion--active')
        currentText.classList.toggle('faq-accordion--visible')

        if (currentText.classList.contains('faq-accordion--visible')){
            currentText.style.maxHeight = currentText.scrollHeight + 'px'
        }else{
            currentText.style.maxHeight = null
        }
    })
})

/* ======================================================================================================= */

const accordeonFooter = document.querySelector('.footer__content')
const accordeonName = accordeonFooter.querySelectorAll('.footer__item--title')

accordeonName.forEach((accordeonTitle) => {
    accordeonTitle.addEventListener('click', function(){
        const currentText = accordeonTitle.parentElement.querySelector('.footer__content-block')
        accordeonTitle.classList.toggle('footer-accordion--active')
        currentText.classList.toggle('footer-accordion--visible')

        if (currentText.classList.contains('footer-accordion--visible')){
            currentText.style.maxHeight = currentText.scrollHeight + 'px'
        }else{
            currentText.style.maxHeight = null
        }
    })
})



/* =========================================================================================================== */

const openmodal = document.getElementById('modal-open')
const mymodal = document.getElementById('modal')
const closemodal = document.getElementById('modal-close')
const menubutton  = document.getElementById('menubutton')


openmodal.addEventListener('click', openModal)
closemodal.addEventListener('click', closeModal)
menubutton.addEventListener('click', menuModal)

function openModal(){
    mymodal.classList.add('open-popab')
}

function closeModal(){
    mymodal.classList.remove('open-popab')
}


function menuModal(){
  mymodal.classList.add('open-popab')
}

/* ============================================================================================================ */

const video = document.querySelector('.video__item__sourshe')
const playBtn = document.querySelector('.video__play')
const iconBtn = document.querySelector('.video__button-img')


playBtn.addEventListener('click', toggleVideoStatus)
function  toggleVideoStatus(){
  if (video.paused){
    video.play()
    iconBtn.src = "./image/expertise/pause.svg"
  }else{
    video.pause()
    iconBtn.src = "./image/expertise/play.svg"
  }
}

/* ================================================================================================================ */


const scrollRevealOptins = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
}

ScrollReveal().reveal(".expertise__subtitle", {
  ...scrollRevealOptins,
})

ScrollReveal().reveal(".expertise__title", {
  ...scrollRevealOptins,
  delay: 1000,
 
})

ScrollReveal().reveal(".expertise__text", {
  ...scrollRevealOptins,
  delay: 1300,
})

ScrollReveal().reveal(".info__top", {
  ...scrollRevealOptins,
  delay: 1000,
  distance: "60px",
})


ScrollReveal().reveal(".hero__slider-list", {
  ...scrollRevealOptins,
  origin: "right",
  distance: "100px",
})

ScrollReveal().reveal(".form", {
  ...scrollRevealOptins,
  origin: "bottom",
  delay: 800,
  distance: "60px",
})

ScrollReveal().reveal(".useful__item", {
  ...scrollRevealOptins,
  origin: "bottom",
  interval: 500,
})