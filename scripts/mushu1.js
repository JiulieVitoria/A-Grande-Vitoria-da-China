function primeiraMushu() {
    while (question != 1 || question != 2) {
        var question = prompt(
            "1 Voltar pro templo, pedir perdão e torcer pra Mulan conseguir sozinha.\n2 Ir para a Cidade Imperial com Mulan, tentar ajudá-la no que ela precisar."
        );
        if (question == 1) {
            window.location.href = "../Escolhas/Mushu/gameovermushu1.html";
            break;
        } else if (question == 2) {
            window.location.href = "../Escolhas/Mushu/segundapartemushu.html";
            break;
        } else {
            alert("Digite 1 ou 2");
        }
    }
}