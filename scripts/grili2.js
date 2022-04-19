function segundagrili() {
    while (question != 1 || question != 2) {
        var question = prompt(
            "1 Você diz a Mushu que terão mais sorte se esperarem o Shan Yu agir.\n2 Fala para o Mushu convencer Mulan a ir embora, pois é perigoso irritar os guardas."
        );
        if (question == 1) {
            window.location.href = "../Escolhas/Gri-li/terceiraparte.html";
            break;
        } else if (question == 2) {
            window.location.href = "../Escolhas/Gri-li/gameovergrili2.html";
            break;
        } else {
            alert("Digite 1 ou 2");
        }
    }
}