// scripts.js
function selectNavItem(element) {
    var navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(function(item) {
        item.classList.remove('selected');
    });

    element.classList.add('selected');
}

document.addEventListener('DOMContentLoaded', function() {
    var navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(function(item) {
        item.addEventListener('click', function() {
            selectNavItem(this);
        });
    });
});
