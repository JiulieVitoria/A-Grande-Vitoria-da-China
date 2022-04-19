function segundaMushu() {
    while (question != 1 || question != 2) {
        var question = prompt(
            "1 Você dá a idéia de aguardarem os hunos agirem para ajudar.\n2 Tenta convencer Mulan a ir embora, pois é perigoso irritar os guardas."
        );
        if (question == 1) {
            window.location.href = "../../Escolhas/Mushu/terceiraparte.html";
            break;
        } else if (question == 2) {
            window.location.href = "../../Escolhas/Mushu/gameovermushu2.html";
            break;
        } else {
            alert("Digite 1 ou 2");
        }
    }
}