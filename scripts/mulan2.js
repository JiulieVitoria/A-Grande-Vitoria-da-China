function segundaMulan() {
    while (question != 1 || question != 2) {
        var question = prompt(
            "1 Aguardar os Hunos aparecerem para ajudar.\n2 Tentar avisar aos Guardas do Imperador."
        );
        if (question == 1) {
            window.location.href = "../Escolhas/Mulan/segundaparte.html";
            break;
        } else if (question == 2) {
            window.location.href = "../Escolhas/Mulan/gameovermulan2.html";
            break;
        } else {
            alert("Digite 1 ou 2");
        }
    }
}