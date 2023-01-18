const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    closeElem = document.querySelector('.menu_close');

hamburger.addEventListener('click', function () {
    menu.classList.add('active');
});
closeElem.addEventListener('click', function () {
    menu.classList.remove('active');
});

const counters = document.querySelectorAll('.skills_ratings-counter'),
    lines = document.querySelectorAll('.skills_ratings-line span');

counters.forEach(function (item, i) {
    lines[i].style.width = item.innerHTML;
});