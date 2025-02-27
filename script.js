document.addEventListener("DOMContentLoaded", function () {
    const items = document.querySelectorAll(".portfolio-item");

    function showOnScroll() {
        const triggerBottom = window.innerHeight * 0.85;

        items.forEach((item) => {
            const itemTop = item.getBoundingClientRect().top;

            if (itemTop < triggerBottom) {
                item.classList.add("show");
            }
        });
    }

    window.addEventListener("scroll", showOnScroll);
    showOnScroll();
});
