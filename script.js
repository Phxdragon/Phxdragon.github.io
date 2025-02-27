document.addEventListener("DOMContentLoaded", function () {
    const items = document.querySelectorAll(".portfolio-item");
    const header = document.querySelector("header");
    let lastScrollTop = 0;

    // Fungsi untuk menampilkan animasi portfolio saat scroll
    function showOnScroll() {
        const triggerBottom = window.innerHeight * 0.85;

        items.forEach((item) => {
            const itemTop = item.getBoundingClientRect().top;

            if (itemTop < triggerBottom) {
                item.classList.add("show");
            }
        });
    }

    // Fungsi untuk menyembunyikan header saat scroll ke bawah
    function handleScroll() {
        let scrollTop = window.scrollY;

        if (scrollTop > lastScrollTop && scrollTop > 50) {
            header.classList.add("header-hidden"); // Sembunyikan header
        } else {
            header.classList.remove("header-hidden"); // Tampilkan header
        }

        lastScrollTop = scrollTop;
    }

    // Event listener untuk scroll
    window.addEventListener("scroll", function () {
        showOnScroll();
        handleScroll();
    });

    // Jalankan fungsi pertama kali
    showOnScroll();
});
