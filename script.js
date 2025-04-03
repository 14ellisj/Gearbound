document.addEventListener('DOMContentLoaded', function() {
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('nav ul');
  
    burger.addEventListener('click', function() {
      navLinks.classList.toggle('active');
    });
  });
  