/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll('.nav__link');   

function linkAction(){
  /*Active link*/
  navLink.forEach(n => n.classList.remove('active'));
  this.classList.add('active');
  
  /*Remove menu mobile*/
  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction));

const modalViews = document.querySelectorAll(".services__modal");
modalBtns = document.querySelectorAll(".services__button");
modalCloses = document.querySelectorAll(".services__modal-close");

let modal = function(modalClicks){
 modalViews[modalClicks].classList.add("active-modal")
}
modalBtns.forEach((modalBtn, i)=>{

  modalBtn.addEventListener("click", ()=>{
    modal(i)
  })
})

modalCloses.forEach((modalCLose) =>{
  modalCLose.addEventListener("click", () =>{
    modalViews.forEach((modalView)=>{
      modalView.classList.remove("active-modal")
    })
  })
})




var swiperP = new Swiper(".swiper", {
  
   loop:true,
    cssMode: true,
    
   grabCursor:true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable:true,
    },
  
  });
  
  
var swiperT = new Swiper(".swiper-container", {
  
  loop:true,
     spaceBetween:48,
     grabCursor:true,
   pagination: {
     el: ".swiper-pagination",
     clickable:true,
     dynamicBullets:true
   },
   breakpoints:{
   768:{
     slidesPerView:2,
   }
   }
 
 });
 