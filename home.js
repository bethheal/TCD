/* Your existing JavaScript code */

document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".card");
    
    window.addEventListener("scroll", function () {
        cards.forEach(function (card) {
            if (isElementInViewport(card) && !card.classList.contains("active")) {
                card.classList.add("active");
            }
        });
    });
});

function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

  
