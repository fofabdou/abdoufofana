// Filtrer les certifications par catégorie
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const certItems = document.querySelectorAll('.cert-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Supprime la classe active des autres boutons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // Filtre les éléments
            const category = button.getAttribute('data-category');
            certItems.forEach(item => {
                if (category === 'all' || item.getAttribute('data-category') === category) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
});
