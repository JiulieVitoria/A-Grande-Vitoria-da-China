function primeiraMulan() {
    while (question != 1 || question != 2) {
        var question = prompt(
            "1 Voltar pra casa e pedir perdão ao seu pai.\n2 Ir para a Cidade Imperial avisar seus ex-companheiros."
        );
        if (question == 1) {
            window.location.href = "../Escolhas/Mulan/gameovermulan1.html";
            break;
        } else if (question == 2) {
            window.location.href = "../Escolhas/Mulan/segundaparte.html";
            break;
        } else {
            alert("Digite 1 ou 2");
        }
    }
}