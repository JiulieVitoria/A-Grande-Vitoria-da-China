function terceiraMushu() {
    while (question != 1 || question != 2 || question  != 3) {
        var question = prompt(
            "1 Você diz a Mulan para esperar Li Shang e seus amigos, pois ela sozinha não daria conta de Shan Yu.\n2 Você diz a Mulan que consegue voar até os fogos de artifícios com Gri-li.\n3 Você diz a Mulan para lutar com ele, pois ela é forte e habilidosa, conseguiria derrotá-lo."
        );
        if (question == 1) {
            window.location.href = "../../Escolhas/Mushu/gameovermushu3.html";
            break;
        } else if (question == 2) {
            window.location.href = "../../Escolhas/Mushu/vitória.html";
            break;
        } else if (question == 3) {
            window.location.href = "../../Escolhas/Mushu/gameovermushu4.html";
            break;    
        } else {
            alert("Digite 1 ou 2 ou 3");
        }
    }
}