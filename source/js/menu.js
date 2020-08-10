var pageHeader = document.querySelector('.page-header');
var navButton = document.querySelector('.page-header__nav-button');
var mainNav = document.querySelector('.main-nav');

pageHeader.classList.remove('page-header--nojs');
mainNav.classList.toggle('main-nav--closed');

navButton.addEventListener('click', function() {
  mainNav.classList.toggle('main-nav--closed');
  navButton.classList.toggle('page-header__nav-button--close');
});
