//Declaration of variables
const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav__nav-links");
const navLinks = document.querySelectorAll(".nav__nav-links .nav-link");
const innerLinks = document.querySelectorAll(".nav__nav-links .nav-link a");
const allLinks = document.querySelectorAll('nav a');

//Adds smooth scroll effect to all 'a' element.
allLinks.forEach(trigger => {
     trigger.onclick = function(e) {
          e.preventDefault();
          let hash = this.getAttribute('href');
          let target = document.querySelector(hash);
          let headerOffset = 100;
          let elementPosition = target.offsetTop;
          let offsetPosition = elementPosition - headerOffset;

          window.scrollTo({
               top: offsetPosition,
               behavior: "smooth"
          });
     };
})

//When one of the nav link is clicked, change it to an
//active link and closes the menu.
innerLinks.forEach(link => link.addEventListener('click', () => {
     burger.classList.toggle("toggle");
     nav.classList.toggle("nav-active");
     navLinks.forEach((link) => {
          //If there is an animation to link, remove it.
          if (link.style.animation) {
               link.style.animation = "";
          }
     link.classList.remove("active");
     });
     link.classList.add("active");

     innerLinks.forEach((link) => {
          link.classList.remove("active");
     });
     link.classList.add("active");
}));

//When the page is scrolled down, the nav bar changes to sticky.
const navScroll = window.addEventListener('scroll', () => {
     const navBar = document.querySelector(".nav");
     navBar.classList.toggle("sticky", window.scrollY > 0);
});

//NAV Animation
const navSlide = burger.addEventListener('click', () => {
     burger.classList.toggle("toggle");
     nav.classList.toggle("nav-active");
     navLinks.forEach((link, index) => {
          if (link.style.animation) {
               link.style.animation = "";
          } else {
               link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
          }
     });
});

//Swiper for Certifications
const swiper = new Swiper('.swiper-container', {
     slidesPerView: 1,
     spaceBetween: 30,
     loop: true,
     grabCursor: true,
     autoplay: {
          delay: 2500,
          disableOnInteraction: false,
     },
     pagination: {
          el: '.swiper-pagination',
          clickable: true,
     },
     navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
     },
});

//GSAP Animations
gsap.registerPlugin("ScrollTrigger");

gsap.from(".home__introText", {
     duration: 1.5,
     opacity: 0,
     x: -500,
     ease: "fadeout"
});

gsap.from(".home__scrollDown", {
     duration: 1.5,
     opacity: 0,
     x: -500,
     delay: 1,
     ease: "fadeout"
});

gsap.from(".about", {
     duration: 1.5,
     opacity: 0,
     scrollTrigger: {
          trigger: ".about",
          toggleActions: "restart none restart none"
     },
     x: 500,
     ease: "fadeout"
});

gsap.from(".about__text-wrapper .about-text", {
     duration: 1.5,
     opacity: 0,
     scrollTrigger: {
          trigger: ".about",
          toggleActions: "restart none restart none",
     },
     x: 500,
     stagger: 1,
     delay: 10,
     ease: "fadeout"
});

gsap.from(".skills", {
     duration: 1.5,
     opacity: 0,
     scrollTrigger: {
          trigger: ".skills",
          toggleActions: "restart none restart none"
     },
     x: -500,
     ease: "fadeout"
});

gsap.from(".skill-box", {
     duration: 1.5,
     opacity: 0,
     scrollTrigger: {
          trigger: ".skills",
          toggleActions: "restart none restart none"
     },
     x: -500,
     stagger: 0.75,
     ease: "fadeout"
});

gsap.from(".certification", {
     duration: 1.5,
     opacity: 0,
     scrollTrigger: {
          trigger: ".certification",
          toggleActions: "restart none restart none",
     },
     x: 500,
     ease: "fadeout"
});

gsap.from(".project-box", {
     duration: 1.5,
     opacity: 0,
     scrollTrigger: {
          trigger: ".project",
          toggleActions: "restart none restart none"
     },
     x: -500,
     stagger: 1,
     ease: "fadeout",
});

gsap.from(".contact", {
     duration: 1.5,
     opacity: 0,
     scrollTrigger: {
          trigger: ".contact",
          toggleActions: "restart none restart none",
     },
     x: 500,
     ease: "fadeout"
});