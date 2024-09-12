var scrollButton = document.querySelector('.sipkadolu');
var scrollTarget = document.getElementById('scrollTarget');

scrollButton.addEventListener('click', function () {
    scrollTarget.scrollIntoView({ behavior: 'smooth' });
});