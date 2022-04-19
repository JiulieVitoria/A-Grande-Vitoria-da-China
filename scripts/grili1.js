function primeiraGrili() {
    while (question != 1 || question != 2) {
        var question = prompt(
            "1 Voltar pra casa, se esconder na gaiola e nunca mais sair de lá.\n2 Ir para a Cidade Imperial com Mushu e Mulan, torcendo para conseguir ajudá-los."
        );
        if (question == 1) {
            window.location.href = "../../Escolhas/Grili/gameovergrili1.html";
            break;
        } else if (question == 2) {
            window.location.href = "../../Escolhas/Grili/segundaparte.html";
            break;
        } else {
            alert("Digite 1 ou 2");
        }
    }
}