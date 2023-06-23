
//********************************************************//

let show = false;  // start 버튼클릭 유무
let cmp_num = new Array(); // 두개의 숫자를 비교하기 위한 배열
let choice = new Array();
let end = 0; //4가 되면 게임 끝
let step = 0; // 클릭 횟수 제한을 위한 변수


let num = new Array();
let ran = new Array(); // 새 변수값을 하나 추가함.



window.onload=function(){
    init();
    let pic = document.getElementsByClassName("picture");
    for (var i = 0; i < pic.length; i++) {
        pic[i].addEventListener("click", same_search);
    }
}


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
        var count=document.getElementById("count");
        count.innerText=0;
}



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

    let pic = document.getElementsByClassName("back");
    for (var i = 0; i < pic.length; i++) {
        pic[ran[i]].innerHTML = num[i % 4];
    }

    setTimeout(function(){
        let pic = document.getElementsByClassName("back");
        for(var i=0; i<pic.length; i++){
        pic[i].style.display="none";
        }   //숫자를 감춰줌
        show=true;  // start 버튼 클릭했다 라는 의미
    },2000)
}



    function same_search(){
        if( !show ){ // show 변수가 false라면 not 연산에 의해 true가 적용
                    //show 변수가 true 라면 not 연산에 의해 false가 적용
        alert("start 버튼을 클릭하세요.");
        return;  // start 버튼을 클릭하지 않았으면 same_search 함수를 실행 시키지 않는다.
        }
    var child = this.children[0]; // child 변수는 td 태그의 자식인 span이다.
    child.style.display="inline";

        // 클릭횟수 증가 시키기
        if( step == 20 ){ 
            /* 20번 클릭하면 더 이상 진행이 되지 않게
                show는 false로 바꾸고 함수 */
            alert("다음 기회에 도전하세요.")
            show=false;
            return;
        }
        var count = document.getElementById("count");
        count.innerText = ++step; // step의 값을 1씩 증가 되게 증가
                                // 증가 시키고 1씩 증가
    


    let span = document.getElementsByClassName("back");
        for(var i=0; i<span.length; i++){
            if( span[i] === child )
            choice.push(i); // 클릭한  td 태그 인덱스를 배열에 저장
        }


    cmp_num.push(parseInt(child.innerText));




    if(cmp_num.length ==2){ //배열의 숫자 2개가 저장되어있다면 비교
        if(cmp_num[0] == cmp_num[1]){
            

        cmp_num = new Array();
        choice = new Array();
        end++; // 2개를 비교해서 같다면 end 변수 1씩 증가
            


        }else{
            setTimeout(function(){
                cmp_num = new Array();
                let pic = document.getElementsByClassName("back");
                for(var i=0; i<choice.length; i++){
                pic[choice[i]].style.display="none"; //숫자를 감춰줌
                }  
                choice= new Array();
            },500)
        }
    }
    if(end == 4){
        alert("게임 끝");
        show=false;
    }
}


/*
    getElementbyId() getElementsByClassName()등을 사용하면
    태그의 객체라는 것이 변환된다. 태그의 객체를 변수에 담아서 사용해왔다.
    자바스크립트에서는 html 태그를 element , 요소 또는 객체라고 한다.
    객체를 표현하는 방법중에 자기 자신을 의미하는 this가 있다.
    same_search 함수를 실행 시킨건 td태그이다.
    즉 td라는 객체에 의해 same_search 함수가 실행된것이다.
    same_search 함수안에서 this 라고 사용하면 same_search 함수를 실행시킨
    td 태그를 의미한다.
*/


/*

    자식태그 가져오는 방법:
    children - 모든 자식태그를 htmlcollextion 배열로 가져온다.
    childNodes - 모든 자식 태그를 nodeList의 배열로 가져온다.
    firstChild - 첫번째 자식태그
    lastChild - 마지막 자식 태그

*/