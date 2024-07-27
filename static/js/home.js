document.addEventListener('DOMContentLoaded', function() {
    let main = document.getElementById("main_component");

    let descrizionePersonale = createCard(
        "description_card",
        "Chi Sono?",
        "Ciao a tutti sono Marco Bonito",
        ["11/10/2001", "11/10/2024"],
        "static/images/img.png",
        function() { alert("Card cliccata!"); }
    );

    main.appendChild(descrizionePersonale);
});

function createCard(id = '', title = '', description = '', dates = [], imageUrl = '', onClickFunction = null) {
    let card = document.createElement('div');
    card.className = 'card';
    card.id = id;

    if (onClickFunction) {
        card.addEventListener('click', onClickFunction);
    }

    let cardTitle = document.createElement('h2');
    cardTitle.className = 'card-title';
    cardTitle.textContent = title;

    if (imageUrl) {
        let cardImage = document.createElement('img');
        cardImage.className = 'card-image';
        cardImage.src = imageUrl;
        card.appendChild(cardImage);
    }

    let cardDescription = document.createElement('p');
    cardDescription.className = 'card-description';
    cardDescription.textContent = description;

    card.appendChild(cardTitle);
    card.appendChild(cardDescription);

    if (dates.length > 0) {
        let cardDates = document.createElement('div');
        cardDates.className = 'card-dates';

        let startDate = document.createElement('p');
        startDate.innerHTML = 'Inizio: <span>' + dates[0] + '</span>';

        let endDate = document.createElement('p');
        endDate.innerHTML = 'Fine: <span>' + dates[1] + '</span>';

        cardDates.appendChild(startDate);
        cardDates.appendChild(endDate);

        card.appendChild(cardDates);
    }

    return card;
}
