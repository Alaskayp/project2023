
window.onresize=function(){
    var wd = window.innerWidth;
    if(wd > 786){
        var list = document.getElementsByClassName("menu_list")[0];
        list.style.display = "none";
        list.dataset.show = "1";
    }
}




window.onload=function(){

    //화면이 전부 로딩 되면 시작하는 함수
    //Window 브라우저 자체의 window 객체
    //사이트 검색창 : location 객체
    var icon = document.getElementsByClassName("strapicon");
    icon[0].addEventListener("click" , open_close);
}
////////////////////////////////////////////////
        /*

         **아이콘을 클릭해서 목록에 나오게 하는 첫번째 방법
        var list = document.getElementsByClassName("menu_list");
        list[0].style.display="block";
        

        아이콘을 클릭해서 목록에 나오게 하는 두번째 방법
        var list = this.nextSibling;
        list.style.display = "block";

        //class를 이용한 버튼 만들기 방법

        현재 태그의 다음 태그를 가져오는방법
        -nextSibling(형제 태그를 의미한다.)
        태그(엘리먼트) 객체에 클래스를 추가하는 방법
        -element.classList.add("클래스 이름");
        클래스에 여러개 추가
        -element.classList.add("클래스 이름","클래스 이름" , ........);
        클래스 이름 변경
        - element.ClassList.replace("변경전 이름" , "변경 후 이름 ");
        클래스 삭제
        -element.classList.toggle('삭제할 클래스 이름');
        조건에 따라 클래스 삭제
        -element.classList.toggle('삭제할 클래스 이름' ,조건식);
        태그 (element) 객체에 클래스가 있는지 확인 방법
        -element.classList.contains('클래스 이름');
        -해당 클래스 이름이 있다면 true 없다면 false

        elment = 담겨져 있는 변수
        */


    //***이것이 class를 이용한 첫번째 방법
     //var list = this.nextSibling;
        // var isActive = list.classList.contains("list_active");
        // if(isActive)
        //     list.classList.toggle("list_active");
        // else
        //     list.classList.toggle("list_active");


    /* dataset

    - HTML5부터는 태그에 데이터를 담을 수 있는 개념이 있다.
    - 데이터 속성은 태그에 data- 로 시작한다.

    -dataset은 브라우저에 어떠한 행동도 관여 하지 않기 때문에
    자유롭게 데이터를 넣어 사용하면 된다.

    -자바스크립트에서 활용을 할 수 있고 Html에서는 다른 속성처럼
    태그에 영향을 주지않는다.

    -다른 속성이라 하면 width , height , style 등등
    <div width="200"> -> 이거는 width라는 속성에 의해 div 크기에 영향을 준다.
    하지만 dataset은 영향을 주지않는다.

    window.innerWidth; 브라우저의 화면 너비
    window.innerheight; 브라우저의 화면 높이
    window.outerWidth;  브라우저의 전체 너비
    window.outerheight;  브라우저의 전체 높이

    브라우저의 크기가 변경되면 동작하는 함수 =resize()

    */

///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
           //******dataset을 이용하는 방법
    //**  껏다켰다 하려면 dataset의 값을 바꿔야 한다.
    
function open_close(){
    var list = document.getElementsByClassName("strapicon")[0].nextSibling;
    var show = list.dataset.show;
    if(show==1){
        list.style.display = "block";
        list.dataset.show = "0";
    } else{
        list.style.display = "none";
        list.dataset.show = "1";
    }
     //***이것이 class를 이용한 첫번째 방법
    // var isActive = list.classList.contains("list_active");
        // if(isActive)
        //     list.classList.toggle("list_active");
        // else
        //     list.classList.toggle("list_active");
}

function win_confirm(){
    alert("당첨확인 클릭");
}