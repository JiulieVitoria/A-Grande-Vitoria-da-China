function terceiraGrili() {
    while (question != 1 || question != 2 || question  != 3) {
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