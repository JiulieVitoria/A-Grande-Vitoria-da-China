function primeiraMulan() {
    while (question != 1 || question != 2) {
        var question = prompt(
            "1 Voltar pra casa e pedir perdão ao seu pai.\n2 Ir para a Cidade Imperial avisar seus ex-companheiros."
        );
        if (question == 1) {
            window.location.href = "../../Escolhas/Mulan/gameovermulan1.html";
            break;
        } else if (question == 2) {
            window.location.href = "../../Escolhas/Mulan/segundaparte.html";
            break;
        } else {
            alert("Digite 1 ou 2");
        }
    }
}

function segundaMulan() {
    while (question != 1 || question != 2) {
        var question = prompt(
            "1 Aguardar os Hunos aparecerem para ajudar.\n2 Tentar avisar aos Guardas do Imperador."
        );
        if (question == 1) {
            window.location.href = "../../Escolhas/Mulan/terceiraparte.html";
            break;
        } else if (question == 2) {
            window.location.href = "../../Escolhas/Mulan/gameovermulan2.html";
            break;
        } else {
            alert("Digite 1 ou 2");
        }
    }
}

function terceiraMulan() {
    while (question != 1 || question != 2 || question  != 3) {
        var question = prompt(
            "1 Ter uma luta com espadas e derrotá-lo assim.\n2 Incendiar o andar dos fogos de artifício com a ajuda de Mushu e Gri-li, que queimaria Shan Yu.\n3 Pedir ajuda a Li Shang e seus companheiros."
        );
        if (question == 1) {
            window.location.href = "../../Escolhas/Mulan/gameovermulan3.html";
            break;
        } else if (question == 2) {
            window.location.href = "../../Escolhas/Mulan/vitória.html";
            break;
        } else if (question == 3) {
            window.location.href = "../../Escolhas/Mulan/gameovermulan4.html";
            break;    
        } else {
            alert("Digite 1 ou 2 ou 3");
        }
    }
}