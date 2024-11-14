// Fonction de filtrage
document.addEventListener("DOMContentLoaded", function () {
    const filterButtons = document.querySelectorAll(".filter");
    const portfolioItems = document.querySelectorAll(".portfolio-item");

    filterButtons.forEach(button => {
        button.addEventListener("click", function (event) {
            event.preventDefault();
            const filter = button.getAttribute("data-filter");

            portfolioItems.forEach(item => {
                if (filter === "*" || item.classList.contains(filter.replace('.', ''))) {
                    item.style.display = "block";
                } else {
                    item.style.display = "none";
                }
            });

            filterButtons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");
        });
    });
});


