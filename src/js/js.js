let topBtn = document.getElementById("toTop");
let parallaxes = document.querySelectorAll('.blockWithBackground');

window.addEventListener('scroll', function(e) {

    //return to top button
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }

    // .banner is 100vh, get height in pixels.
    var pxPerVh = document.querySelector('.banner').offsetHeight;
    //remove opacity for nav once moved off the banner
    if (document.body.scrollTop > pxPerVh || document.documentElement.scrollTop > pxPerVh) {
        document.querySelector('nav').style.opacity = 100;
    }

    parallaxes.forEach(function(element, idx) {
        let scrolled = window.pageYOffset - element.getBoundingClientRect().top;
        element.style.top = -(scrolled * 0.08) + 'px';
    })
});

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

//run animations on first load
function animateHTML() {
    var elements;
    var windowHeight;

    function init() {
        elements = document.querySelectorAll('.hidden');
        windowHeight = window.innerHeight;
    }

    function checkPosition() {
        for (var i = 0; i < elements.length; i++) {
            var element = elements[i];
            var positionFromTop = elements[i].getBoundingClientRect().top;

            if (positionFromTop - windowHeight <= 0) {
                element.classList.add('fade-in-element');
                element.classList.remove('hidden');
            }
        }
    }

    window.addEventListener('scroll', checkPosition);
    window.addEventListener('resize', init);

    init();
    checkPosition();

}
animateHTML();

//click listener for hamburger menu for mobile
let menu = document.querySelector('nav ul');
document.querySelector('#showMenu').addEventListener('click', function(e) {
    menu.classList.toggle('show');
});

//click listener to hide hamburger menu when clicked off it (mobile only)
window.addEventListener('click', function(e) {
    if (!document.querySelectorAll('.sticky')[0].contains(e.target) && menu.classList.contains('show')) {
        menu.classList.toggle('show');
    }
})