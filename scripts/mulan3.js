function terceiraMulan() {
    while (question != 1 || question != 2 || question  != 3) {
        var question = prompt(
            "1 Ter uma luta com espadas e derrotá-lo assim.\n2 Incendiar o andar dos fogos de artifício com a ajuda de Mushu e Gri-li, que queimaria Shan Yu.\n3 Pedir ajuda a Li Shang e seus companheiros."
        );
        if (question == 1) {
            window.location.href = "../Escolhas/mulan/gameovermulan3.html";
            break;
        } else if (question == 2) {
            window.location.href = "../Escolhas/mulan/vitória.html";
            break;
        } else if (question == 3) {
            window.location.href = "../Escolhas/mulan/gameovermulan4.html";
            break;    
        } else {
            alert("Digite 1 ou 2 ou 3");
        }
    }
}