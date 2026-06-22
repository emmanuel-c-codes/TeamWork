document.getElementById('searchInput').addEventListener('keyup', function() {
    let filter = this.value.toLowerCase();
    let cards = document.querySelectorAll('#resourceGrid > div');

    cards.forEach(card => {
        let text = card.textContent.toLowerCase();
        if (text.includes(filter)) {
            card.style.display = "";
        } else {
            card.style.display = "none";
        }
    });
});