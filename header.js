(function () {
    var burgerBtn = document.getElementById('burgerBtn');
    var headerRight = document.getElementById('siteHeaderRight');
    if (!burgerBtn || !headerRight) return;

    function closeMenu() {
        headerRight.classList.remove('open');
        burgerBtn.classList.remove('open');
        burgerBtn.setAttribute('aria-expanded', 'false');
    }

    burgerBtn.addEventListener('click', function () {
        var isOpen = headerRight.classList.toggle('open');
        burgerBtn.classList.toggle('open', isOpen);
        burgerBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    headerRight.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', closeMenu);
    });
})();
