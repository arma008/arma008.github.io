//mobile navbar toggle
const topNav = document.querySelector('.top-nav');
const navToggle = document.querySelector('.mobile-nav-toggle');

navToggle.addEventListener('click', () => {
    const visibility = topNav.getAttribute('data-visible');
    if(visibility == "false"){
        topNav.setAttribute('data-visible', true);
        navToggle.setAttribute('aria-expanded', true);
    } else if(visibility == "true"){
        topNav.setAttribute('data-visible', false);
        navToggle.setAttribute('aria-expanded', false);
    }
});