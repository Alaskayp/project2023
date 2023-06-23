let path="./static/image/";
let image_name=["1.PNG","2.PNG","3.PNG","4.PNG","5.PNG","6.PNG"];
let image_position=[];
let isStart=false;
let count=0;
let end_count=0;
let isSame=[];
let selectImg=[];

window.onload=function(){
    var start_bt = document.getElementById('start');
    start_bt.addEventListener("click", game_start);
    var count = document.getElementById("count");
    count.innerText=0;
};

function image_init(){
    image_position.push(Math.floor(Math.random()*12));
    for(var i=1; i<12; i++){
        var tmp=Math.floor(Math.random()*12);
        if(image_position.indexOf(tmp) == -1){
            image_position.push(tmp);
        }else{
            --i;
        }
    }
    var img = document.getElementsByClassName("picture");
    for(var i=0; i<img.length; i++){
        img[image_position[i]].style.background="url("+(path+image_name[i%6])+") no-repeat center";
        img[image_position[i]].style.backgroundSize="contain";
        img[i].style.background="url("+(path+image_name[image_position[i]%6])+") no-repeat center";
        img[i].style.backgroundSize="contain";
    }
}

function game_start(){
    if(isStart){
        return;
    }
    image_init(); 
    var td = document.getElementsByClassName("picture_box");
    for(var i=0; i<td.length; i++){
        td[i].addEventListener("click", compare_img);
        isSame.push(false);
    }
    setTimeout(function(){
        var div = document.getElementsByClassName("picture");
        for(var i=0; i<div.length; i++){
            div[i].style.display="none";
        }
    }, 1000);
    isStart=true;
}

function compare_img() {
    if (!isStart) {
    return;
    }

    if (count === 30) {
    alert("다음 기회에 도전하세요");
    isStart = false;
    return;
    }

    var cnt = document.getElementById("count");
    cnt.innerText = ++count;

    var child_div = this.firstChild;
    child_div.style.display = "block";

    let div = document.getElementsByClassName("picture");
    for (var i = 0; i < div.length; i++) {
    if (div[i] === child_div) {
        selectImg.push(i);
    }
    }

    if (selectImg.length === 2) {
    var index1 = selectImg[0];
    var index2 = selectImg[1];

    if (image_position[index1] % 6 === image_position[index2] % 6) {
        isSame[index1] = true;
        isSame[index2] = true;
        selectImg = [];
        end_count++;

        if (end_count === 6) {
        alert("게임 끝");
        isStart = false;
        }
    } else {
        setTimeout(function () {
        var pic = document.getElementsByClassName("picture");

        if (!isSame[index1]) {
            pic[index1].style.display = "none";
        }

        if (!isSame[index2]) {
            pic[index2].style.display = "none";
        }

        selectImg = [];
        }, 500);
    }
    }
}
//  자식태그 가져오는 방법 :  
//  children - 모든 자식태그를 htmlcollextion 배열로 가져온다.
//  childNodes - 모든 자식태그를 nodeList의 배열로 가져온다.
// firstChild - 첫번째 자식 태그
//  lastChild - 마지막 자식 태그
// getElementById() 또는 getElementsByClassName() 등 을 사용하면
//  태그의 객체라는것이 반환된다.  태그의 객체를 변수에 담아서 사용해왔다.
//  자바스크립트에서는  html 태그를  element, 요소 또는 객체라고 한다.
//  객체를 표현하는 방법중에  자기 자신을 의미하는 this가있다.
//  same_search함수를 실행 시킨건 td태그이다. 
//  즉 td라는 객체에 의해 same_search함수가 실행된것이다.  
//  same_search함수안에서  this라고 사용하면  same_search함수를 실행시킨
//  td 태그를 의미한다. 