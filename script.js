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
  