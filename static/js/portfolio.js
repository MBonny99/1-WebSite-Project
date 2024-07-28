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
