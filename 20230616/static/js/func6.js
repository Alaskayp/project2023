let com_num = 0;
    let user_num = 0;
    let win = 0;
    let lose = 0;
    let draw = 0;

    function start() {
        com_num = Math.floor(Math.random() * 6) + 1;
        user_num = Math.floor(Math.random() * 6) + 1;

        let com = document.getElementById("game_image1");
        com.src = "./static/image/dice" + com_num + ".png";

        let user = document.getElementById("game_image2");
        user.src = "./static/image/dice" + user_num + ".png";

        showResult();
    }

    function showResult() {
        let res = document.getElementById("result");
        if (com_num === user_num) {
            res.innerText = "무";
            draw++;
        } else if (com_num < user_num) {
            res.innerText = "승";
            win++;
        } else {
            res.innerText = "패";
            lose++;
        }
        document.getElementById("record").innerText = win + "승 " + draw + "무 " + lose + "패";
    }