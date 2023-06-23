
//******************************************************* */

let num = new Array();

function init(){     // 초기화
    //중복값 없이 랜덤값 넣기
    //indexOf를 이용해서 -1이 나오면 일치하는게 없다.
    num.push(Math.floor(Math.random()*10)+1);

    for(var i=1; i<=7; i++){
        var temp = Math.floor(Math.random()*10)+1;
        if (num.indexOf(temp) == -1){
            num.push(temp);
        } else{
            i--;
        }
    }
}

let ran = new Array(); // 새 변수값을 하나 추가함.

function anything(){ 
    // 8칸에서 같은 2개의 숫자를
    // 랜덤으로 4가지 경우의 수로 나오게 하기 위해 설정
    // 자리는 다르지만 4가지의 숫자가 나오면서 2가지의 숫자가 같게 나옴
    ran.push(Math.floor(Math.random()*8));

    for(var i=1; i<=7; i++){
        var temp = Math.floor(Math.random()*8);
        if (ran.indexOf(temp) == -1){
            ran.push(temp);
        } else{
            i--;
        }
    }
}



function start() {
    let num = []; // num 배열 초기화
    let ran = []; // ran 배열 초기화

    // num 배열에 중복 없는 무작위 숫자 생성
    num.push(Math.floor(Math.random() * 10) + 1);
    for (var i = 1; i <= 7; i++) {
        var temp = Math.floor(Math.random() * 10) + 1;
        if (num.indexOf(temp) === -1) {
            num.push(temp);
        } else {
            i--;
        }
    }

    // ran 배열에 중복 없는 무작위 인덱스 생성
    ran.push(Math.floor(Math.random() * 8));
    for (var i = 1; i <= 7; i++) {
        var temp = Math.floor(Math.random() * 8);
        if (ran.indexOf(temp) === -1) {
            ran.push(temp);
        } else {
            i--;
        }
    }

    let pic = document.getElementsByClassName("picture");
    for (var i = 0; i < pic.length; i++) {
        pic[ran[i]].addEventListener("click", same_search);
        pic[ran[i]].innerHTML = num[i % 4];
    }
}


function same_search() {

}

















    // 최종적으로 8칸에 랜덤으로 같은 숫자 4가지의 경우의 수 값이
    // 2개씩 출력하게 됩니다.
// function same_search(){

// }



/* 함수 anything 추가된것을 start 함수에
    입력 값을 넣어서 결과 값 출력
*/





// function start(){ 
//     init(); // 초기화 함수 실행
//     anything(); // 새로 만든 함수 결과 값 출력
//     let pic=document.getElementsByClassName("picture");
//     for(var i=0; i<pic.length; i++){
//         pic[ran[i]].addEventListener("click" , same_search);
//         pic[ran[i]].innerHTML = num[i%4]; 
//         // let ran = new Array(); // 새 변수값을 하나 추가함.
//         // 이 부분의 값을 이곳에 입력함.
//     }
// }


















// let num = new Array();

// function init(){      // 초기화
//     //중복값 없이 랜덤값 넣기
//     //indexOf를 이용해서 -1이 나오면 일치하는게 없다.
//     num.push(Math.floor(Math.random()*10)+1);

//     for(var i=1; i<=3; i++){
//         var temp = Math.floor(Math.random()*10)+1;
//         if (num.indexOf(temp) == -1){
//             num.push(temp);
//         } else{
//             i--;
//         }
//     }
// }












// window.onload =function(){
//     init() // 초기화 함수 실행
//     let pic=document.getElementsByClassName("picture");
//     for(var i=0; i<pic.length; i++){
//         pic[i].addEventListener("click" , same_search);
//         pic[i].innerHTML = num[i%4];
//     }
// }