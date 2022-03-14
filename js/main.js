const navMenu = document.getElementById('nav__menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');
if(navToggle){
	navToggle.addEventListener("click", ()=>{
		navMenu.classList.add("show-menu");
		
	})
}

if(navClose){
	navClose.addEventListener("click", ()=>{
		navMenu.classList.remove("show-menu")
	})
}

let homeSwiper = new Swiper(".home-swiper", {
        loop:true,
	spaceBetween:30,
	pagination: {
          el: ".swiper-pagination",
	  clickable:true
        },
      });
function scrollHeader(){
	const header = document.querySelector("#header");
	if(this.scrollY >=100){
		header.classList.add("scroll-header")
	}
	else{
		header.classList.remove("scroll-header")
	}
}
window.addEventListener("scroll", scrollHeader)

let newSwiper = new Swiper(".new-swiper", {
	centeredSlides: true,
	slidesPerView: "auto",
	loop: 'true',
	spaceBetween: 16,
    });
    const sr =  new ScrollReveal({
	    origin:'top',
	    distance:'60px',
	    duration:2500,
	    delay:400
    })
    sr.reveal(".home-swiper")
    sr.reveal(".category__data", {interval:100})