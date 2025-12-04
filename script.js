document.addEventListener("DOMContentLoaded", () => {
    const fadeElements = document.querySelectorAll(".fade-in");
  
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("appear");
          observer.unobserve(entry.target); // stops observing once it’s visible
        }
      });
    }, {
      threshold: 0.2
    });
  
    fadeElements.forEach(el => {
      observer.observe(el);
    });
  });


const navMobile = document.querySelector('.nav-mobile');
const navToggle = document.querySelector('.nav-toggle');
const navSheet  = document.querySelector('.nav-sheet');




navToggle.addEventListener('click', () => {
  const isOpen = navMobile.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', isOpen);
});



  


  