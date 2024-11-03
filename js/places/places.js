function showCards(day) {
    let days = ['friday', 'saturday', 'sunday'];
    days.forEach(function (d) {
        let cards = document.querySelectorAll('.' + d);
        if (d === day) {
            cards.forEach(function (card) {
                card.style.display = 'block'; 
                observer.observe(card); 
                console.log("Observing card:", card); 
            });
        } else {
            cards.forEach(function (card) {
                card.style.display = 'none';
                observer.unobserve(card); 
                card.classList.remove('show'); 
            });
        }
    });
}



