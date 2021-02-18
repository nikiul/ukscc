// бургер меню
const sidebarToggleBtn = document.querySelector('.menu-icon-wrapper');
const menuIcon = document.querySelector('.menu-icon')
const sidebar = document.querySelector('.header__mobile-nav')

// Клик по кнопке для скрытия / показа фильтра и изменения  иконки
sidebarToggleBtn.onclick = function(){
    menuIcon.classList.toggle('menu-icon-active');
    sidebar.classList.toggle('header__mobile-nav-active');
};