let game=0;

function start(){
    document.getElementById("output").innerHTML="";
    game = setInterval(change_img , 100);
}

let change = 2;

function change_img(){
    var scissors =  "scissors.PNG";
    var rock  = "rock.PNG";
    var paper  = "paper.PNG";
    var img_tag = document.getElementById("game_image");
    if(change==0){ 
        img_tag.src="./image/"+scissors;
        change=1;
    } else if(change==1){ 
        img_tag.src="./image/"+rock;
        change=2;
    } else{
        img_tag.src="./image/"+paper;
        change=0;
    }
}


function result1(select){
    clearInterval(game);
    var scissors =  "scissors.PNG";
    var rock  = "rock.PNG";
    var paper  = "paper.PNG";
    var img_tag = document.getElementById("game_image");
    if(change==0){ 
        img_tag.src="./image/"+scissors;
    } else if(change==1){ 
        img_tag.src="./image/"+rock;
    } else{
        img_tag.src="./image/"+paper;
    }

    if (select == change) {
        document.getElementById("output").innerHTML = "answer : DRAW";
    } else if (
        (select == 0 && change == 1) ||
        (select == 1 && change == 2) ||
        (select == 2 && change == 0)
    ) {
        document.getElementById("output").innerHTML = "answer : LOSE";
    } else {
        document.getElementById("output").innerHTML = "answer : WIN";
    }
}

// function result1(select){
//     clearInterval(game);
//     var scissors =  "scissors.PNG";
//     var rock  = "rock.PNG";
//     var paper  = "paper.PNG";
//     var img_tag = document.getElementById("game_image");
//     if(change==0){ 
//         img_tag.src="./image/"+scissors;
//         change=1;
//     } else if(change==1){ 
//         img_tag.src="./image/"+rock;
//         change=2;
//     } else{
//         img_tag.src="./image/"+paper;
//         change=0;
//     }

//     var ctemp =Math.floor(Math.random()*3);
//     if(select==change){ //랜덤값과 내가 선택한 가위 바위 보에 따란 결과를 if로 표현
//        seq값을 랜덤 값으로 변경한다.
// Change(); seq값에 따라 컴퓨터 이미지를 바꿔주는 함수
//         document.getElementById("output").innerHTML="answer : DRAW";
//     }
//     else if(select==1 && ctemp==2 || select==1 && ctemp==0 ||select==2 && ctemp==1 ){
//         document.getElementById("output").innerHTML="answer : WIN";
//     } else{
//         document.getElementById("output").innerHTML="answer : LOSE";
//     }
//     }




