    
// Grab HTML Elements
const btn = document.querySelector("button.mobile-menu-button");
const menu = document.querySelector(".mobile-menu");

// Add Event Listeners
btn.addEventListener("click", () => {
	menu.classList.toggle("hidden");
});



// Banner carousel
if ($.fn.owlCarousel) {
    $('.owl-carousel').owlCarousel({
        items: 1,
        loop: true,
        nav: true,
        autoplay: false,
        margin: 0,
        smartSpeed: 1200,
        navText: ["<i class='fas fa-chevron-left'></i>", "<i class='fas fa-chevron-right'></i>"],
    });
};