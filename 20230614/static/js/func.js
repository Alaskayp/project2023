//func.js

//함수의 형태 4가지
//입력과 출력이 없는 형태 X X
//입력은 있고 출력이 없는 형태 O X
//입력은 없고 출력만 있는 형태 X O
//입력과 출력이 있는 형태     O O

/*함수에서 입력이라는 것은 함수의 내용이 실행 되기
위해서 꼭 필요한 값이 있다면 함수 외부로부터 값을
받는것을 입력이라고 한다.

전문 용어로  인자 인수 , 매개변수 라고한다.*/
// function sum(a<--매개변수(여러개도 입력 가능)){내용입력}         
//함수에서 출력은 함수에서 생성된 값을 다른 함수나
// 다른 곳에 보내고자 할 경우에 사용된다.
// return을 사용해서 밖으로 내보낸다.

// function sum(a,b){
//     var res= document.getElementById("sum_result");
//     res.innerHTML=a+b;
// }


//웹에서 입력하는 모든값은 전부 텍스트이다.
//input 태그에 입력한 값을 자바스크립트로 가져오라면
//value로 속성을 사용해야한다.
//모든 input 태그에 값은 value에 저장되어 있다.
//getElement를 통해서 input 태그를 가져오고
//가져온 input 태그에서 value값을 뽑아내기


// function plus(){
//     var n1=document.getElementById("num1");
//     var n2=document.getElementById("num2");
//     var res=document.getElementById("result2");
//    //res.innerHTML= parseInt(n1.value) + parseInt(n2.value);
//     res.innerHTML= Number(n1.value)+Number(n2.value);
// }

// function myage(){
//     var by=document.getElementById("birth_year"); //년도
//     var age1=document.getElementById("age");      //나이
//     var currentYear = 2023; //현재년도 계산
//     age1.innerHTML = currentYear - Number(by.value);
//     //계산해서 만 나이값 출력 
// }
// function myage(){
//     var year =document.getElementById("birth_year").vaule;
//     var print= document.getElementById("age");
//     print.innerHTML= 2023-Number(year);
// }

// // return - 함수에 있는 값을 함수 밖으로 내보낼때 사용된다.
// // 함수 안에서 return이 실행되면 해당 함수를 종료 하고 
// // 값을 내보낸다.


// function score_calc() {
//     var kor = document.getElementById("kor");
//     var mat = document.getElementById("mat");
//     var music = document.getElementById("mus");
//     var res = document.getElementById("result3");

//     if (kor.value === '' || !(kor.value >= 0 && kor.value <= 100)) {
//         alert("국어 점수를 입력하세요.");
//         kor.focus();
//         return;
//     } else if (mat.value === '') {
//         alert("수학 점수를 입력하세요.");
//         mat.focus();
//         return;
//     } else if (music.value === '') {
//         alert("음악 점수를 입력하세요.");
//         music.focus();
//         return;
//     }

//     var tot = total(Number(kor.value), Number(mat.value), Number(music.value));
//     var avg_val = avg(tot);

//     res.innerHTML = "총점: " + tot + " 평균: " + avg_val;
// }

// function avg(tot) {
//     return tot / 3;
// }

// function total(k, m, s) {
//     return k + m + s;
// }

// return - 함수에 있는 값을 함수 밖으로 내보낼때 사용된다.
// 함수 안에서 return이 실행되면 해당 함수를 종료 하고 
// 값을 내보낸다.


// function my_minus_life() {
//     var soju = document.getElementById("soju");
//     var min = document.getElementById("minute");
//     var hour = document.getElementById("hour");
//     var day = document.getElementById("day");

//     if (soju.value == "") {
//     alert("몇 잔 마셨는지 입력하세요.. 소주 안먹냐?");
//     soju.focus();
//     return;
//     }

//     var life = Number(soju.value) * 2 * 365 * 20;

//     min.innerHTML = "단축 수명: " + life + "분";
//     hour.innerHTML = "단축 수명: " + (life / 60) + "시간";
//     day.innerHTML = "단축 수명: " + (life / 60 / 24) + "일";
// }






//------------------------------------------------------------------



//switch문은 if문과 다르게 조건식이 참이냐 거짓이냐에 따라
//동작하는 조건문이 아니다.
//switch문은 값을 넣어서 해당 값에 따라 동작하도록 선택하는 문이다.
//즉 여러분이 지금 사용하고 있는 vscode의 메뉴가 바로 switch문으로
//만들어진것이다. 메뉴에서 내가 폴더열기를 선택하면 탐색창이 실행된다.
//즉 내가 선택한 메뉴에 따른 동작을 하는 것이다.
//switch문에서 동작할 내용 선택은 case로 만들어준다.
//여러개의 case를 만들 수 있다.
/*

    switch(10){
        case 1:
        1을 선택하면 동작 할 내용

        case5 :
        5를 선택하면 동작 할 내용

        case100 :
        100을 선택하면 동작 할 내용

        case 2 :
        2를 선택하면 동작 할 내용

        case 10 :
        10을 선택하면 동작 할 내용

    }



*/

// function my_order() {
//     var main_menu = document.getElementById("night_snack");
//     var side_menu = document.getElementById("side_menu");
//     var alc = document.getElementById("alc_menu");

//     // 출력 엘리먼트
//     var order_list = document.getElementById("order_result");

//     var out = "";
//     var temp = menu(main_menu.value);
//     out += main_menu.value + " 금액: " + temp + "원<br>";

//     var temp1 = menu(side_menu.value);
//     out += side_menu.value + " 금액: " + temp1 + "원<br>";

//     var temp2 = menu(alc.value);
//     out += alc.value + " 금액: " + temp2 + "원<br>";

//     if (typeof(temp) === 'string' || typeof(temp1) === 'string' || typeof(temp2) === 'string') {
//         alert("판매하지 않는 메뉴입니다.");
//         alert (temp);
//         main_menu.value='';
//         side_menu.value='';
//         alc_menu.value='';
//         main_menu.focus();
//         return;
//     }
//     order_list.innerHTML=out;
    
// }



// function menu(name){

//     var money=0;
//     switch(name){
//         case "족발":
//         money=28000; break;       
//                      //switch case에서 break를 걸지 않으면
//                      // 밑에있는 case도 실행된다.
//         case "반반치킨": money=22000; break;
//         case "무뼈닭발": money=19000; break;
//         case "피자": money=19000; break;
//         case "짬뽕탕": money=19000; break;
//         case "포케": money=15000; break;
//         case "감자튀김": money=3000; break;
//         case "염통꼬치": money=4000; break;
//         case "타코야끼": money=6000; break;
//         case "치즈볼": money=5000; break;
//         case "테라": money=4000; break;
//         case "히치하이볼": money=8000; break;
//         case "진로": money=4000; break;
//         case "세로주": money=4000; break;
//         case "카스": money=4000; break;
//         case "발렌타인30살": money=1100000; break;
//         case "시바스리갈": money=55000; break;
//         default: // case에 없는 값 입력시 default가 실행된다.
//         return "판매하지 않는 메뉴입니다.";
//     }   
// return money;
// }


// function getId(name){
//     return document.getElementById(name);
// }

// let out=""; //전역변수 - 어디에도 속하지 않는 변수
//             // var 타입은 재선언이 가능하지만 let타입은 재선언이 불가하다.

//         /*
//         var a=10;
//         var a=40;

//         let b=20;
//         let b-30; 오류 , 두번의 선언이 아예 불가능함.
//         var 타입은 변수를 재생성 할 수 있지만 let은 재생성이
//         안되는 타입이다.
//         */



// function order() {
//     var drink =getId("drink");
//     var tmp =getId("ice_hot");
//     var size =getId("size");

//     var total =drink_menu(drink.value);
//     if(total==''){ //판매하지 않는 메뉴 입력시
//     alert("판매하지 않는 메뉴입니다.");
//     drink.value =''; //음료명 Input 값 비워주기
//     drink.focus();
//     return;
//     }
// //아이스인지 핫인지
// //알파벳을 소문자로 변환-toLowerCase()
// //알파벳을 대문자로 변환-toUpperCase()
// if(!(tmp.value.toLowerCase==="ice" || tmp.value.toLowerCase==="hot")){
//     alert("ice 또는 hot이라고 입력하세요.");
//     tmp.value='ice';
//     tmp.focus();
//     return;
// }



// //사이즈 M이나 L이냐 아니면 잘못입력했냐?
// if(!(size.value.toLowerCase==="m" || size.value.toLowerCase==="l")){
// alert("M 또는 L사이즈를 입력하세요");
// size.value="M";
// size.focus();
// return;
// }

// total =total+(size.value.toLowerCase()==='m' ? 0 : 1000);


// out += drink.value + " / " + tmp.value + " / " + size.value + " : "+total+"원"

// getId("list").innerHTML=out;
// //사이즈가 m이라면 0원 , 1이라면 1000원
// //함수안에 생성된 변수는 함수가 종료 되면 제거 된다.
// //즉 , 함수안에 생성한 모든 변수는 다시 재사용 안되고 함수 실행될떄마다 
// // 초기화 되서 사용한다.
// //함수의 밖에 변수를 생성하면 함수의 생명주기(실행,종료)와 상관없이
// //변수의 값을 유지 할 수 있다.
// //이런 변수를 전역 변수라고 한다.


// }

// function drink_menu(drink){
//     switch(drink){
//         case "아메리카노":return 2000;
//         case "카페라떼": return 3000;
//         case "돌체라떼": return 4500;
//         case "모카라떼": return 3000;
//         case "수박주스": return 4500;
//         case "바나나주스": return 4500;
//         default:return 0;
//     }


// }





function getId(name) {
            return document.getElementById(name);
        }

        let out = ""; // 전역 변수

        function order() {
            var drink = getId("drink");
            var tmp = getId("ice_hot");
            var size = getId("size");

            var total = drink_menu(drink.value); // 내가 아래에 입력했던 switch문이 들어가 있는 함수의 값이 여기로 반환됌 ( return 사용 )
            if (total === 0) {
                // 판매하지 않는 메뉴 입력시
                alert("판매하지 않는 메뉴입니다.");
                drink.value = ''; // 음료명 Input 값 비워주기
                drink.focus();
                return;
            }

            // 아이스인지 핫인지 확인
            if (!(tmp.value.toLowerCase() === "아이스" || tmp.value.toLowerCase() === "핫")) {
                alert("아이스 또는 핫이라고 입력하세요.");
                tmp.value = '아이스';
                tmp.focus();
                return;
            }

            // 사이즈 M이나 L이냐 아니면 잘못입력했냐?
            if (!(size.value.toLowerCase() === "m" || size.value.toLowerCase() === "l")) {
                alert("M 또는 L사이즈를 입력하세요");
                size.value = "M";
                size.focus();
                return;
            }

            total = total + (size.value.toLowerCase() === 'm' ? 0 : 1000);

            out += drink.value + " / " + tmp.value + " / " + size.value + " : " + total + "원";

            getId("list").innerHTML = out;
        }

        function drink_menu(drink){
            switch (drink) {
                case "아메리카노":
                    return 2000;
                //    alert("aa");          //어떤 케이스든지 사용이 가능합니다. (alert 안내창 , document.write(); var , if() , for() , switch();)
                //    document.write();     //if// return을 사용하게 되면 , fuction(drink_menu)의 전체 함수의 동작이 종료됩니다.
                //    var a=10;             // 선택된 케이스에 break;를 걸 경우 , switch의 함수만 종료됩니다.
                //    if(){                 

                //    }
                //    for(){

                //    }
                //    switch(){

                //    }
                //    break;
                case "카페라떼":
                    return 3000;
                case "돌체라떼":
                    return 4500;
                case "모카라떼":
                    return 3000;
                case "수박주스":
                    return 4500;
                case "바나나주스":
                    return 4500;
                default:
                    return 0;
            }
           // alert("aa"); 안내창
        }



//ex) 이번달은몇월 
//월 = 6;
// switch 문을 활용할 때 , 가장 크게 사용 되는 기능은 break; 랑 , return이 대표적임.

        
        switch(월){
            case 1:
                alert("겨울입니다");
            case 2:
                alert("겨울입니다");
            case 3:
                alert("봄입니다");
                break;          // break; 를 사용하게 되면 , case가 선택된 구간에서 함수가 종료됌. 
            case 4:
                alert("봄입니다");
                break;
            case 5:
                alert("봄입니다");
                break;
            case 6:
                alert("여름입니다"); // 6이 선택됌 , switch 함수에 대한 선택된 case 6 번 이 선택되면서 종료 .
                break;              // return을 사용할 경우 , switch를 감싸고 있는 전체 함수의 동작이 종료됌.
            case 7:         
                alert("여름입니다");
        }