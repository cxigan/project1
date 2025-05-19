document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('menu-toggle');
    const navMenu = document.querySelector('.nav');
  
    toggleButton.addEventListener('click', function () {
      navMenu.classList.toggle('active');
    });
  });