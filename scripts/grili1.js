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

function segundaGrili() {
    while (question != 1 || question != 2) {
        var question = prompt(
            "1 Você diz a Mushu que terão mais sorte se esperarem o Shan Yu agir.\n2 Fala para o Mushu convencer Mulan a ir embora, pois é perigoso irritar os guardas."
        );
        if (question == 1) {
            window.location.href = "../../Escolhas/Grili/terceiraparte.html";
            break;
        } else if (question == 2) {
            window.location.href = "../../Escolhas/Grili/gameovergrili2.html";
            break;
        } else {
            alert("Digite 1 ou 2");
        }
    }
}

function terceiraGrili() {
    while (question != 1 || question != 2 || question != 3) {
        var question = prompt(
            "1 Você diz a Mushu que Mulan precisa esperar Li Shang e seus amigos, pois sozinha não daria conta de Shan Yu.\n2 Você diz a Mushu que vai o ajudar a voar até os fogos de artifício.\n3 Você diz a Mushu que Mulan consegue lutar com ele, pois ela é forte e habilidosa, e conseguiria derrotá-lo."
        );
        if (question == 1) {
            window.location.href = "../../Escolhas/Grili/gameovergrili3.html";
            break;
        } else if (question == 2) {
            window.location.href = "../../Escolhas/Grili/vitoria.html";
            break;
        } else if (question == 3) {
            window.location.href = "../../Escolhas/Grili/gameovergrili4.html";
            break;
        } else {
            alert("Digite 1 ou 2 ou 3");
        }
    }
}