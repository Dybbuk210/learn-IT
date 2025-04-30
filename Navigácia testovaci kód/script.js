const burger = document.querySelector('.burger');
const mobileMenu = document.querySelector('.mobile-menu');
const dropdownToggle = document.querySelector('.dropdown-toggle');
const dropdown = document.querySelector('.dropdown');

// Toggle burger menu
burger.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
  burger.classList.toggle('active');
  if (burger.classList.contains('active')) {
    burger.innerHTML = '✖'; // Close icon
  } else {
    burger.innerHTML = '<span></span><span></span><span></span>'; // Burger icon
  }
});

// Toggle dropdown menu on click
dropdownToggle.addEventListener('click', (e) => {
  e.preventDefault();
  dropdown.classList.toggle('active');
});
