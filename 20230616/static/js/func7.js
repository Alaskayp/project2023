// function input(){
//     var inputNum = document.getElementById("num").value;
//     var result = document.getElementById("result");
//     //제곱 =num*num
//     var squaredNum = inputNum * inputNum;
//     //제곱 숫자 출력
//     result.innerText="squaredNum :"+squaredNum;
// }


function input() {
    var korean = parseInt(document.getElementById("korean").value);
    var math = parseInt(document.getElementById("math").value);
    var english = parseInt(document.getElementById("english").value);


    var koreanGrade = "";
    if (korean <= 100 && korean >= 90) {
        koreanGrade = "A";
    } else if (korean <= 89 && korean >= 80) {
        koreanGrade = "B";
    } else if (korean <= 79 && korean >= 70) {
        koreanGrade = "C";
    } else {
        koreanGrade = "F";
    }


    var mathGrade = "";
    if (math <= 100 && math >= 90) {
        mathGrade = "A";
    } else if (math <= 89 && math >= 80) {
        mathGrade = "B";
    } else if (math <= 79 && math >= 70) {
        mathGrade = "C";
    } else {
        mathGrade = "F";
    }


    var englishGrade = "";
    if (english <= 100 && english >= 90) {
        englishGrade = "A";
    } else if (english <= 89 && english >= 80) {
        englishGrade = "B";
    } else if (english <= 79 && english >= 70) {
        englishGrade = "C";
    } else {
        englishGrade = "F";
    }


    var average = (korean + math + english) / 3;



    var result1 = document.getElementById("result");
    result1.innerHTML = ("<br>국어 점수: " + korean + ", 등급: " + koreanGrade + "</br>" +
    "<br>수학 점수: " + math + ", 등급: " + mathGrade + "</br>" +
    "<br>영어 점수: " + english + ", 등급: " + englishGrade + "</br>" +
    "<br>평균 점수: " + average)
}







    /* 강사 솔루션
    function getNum(){
        return parseInt(document.getElementById(id).value);
    }


    function out(){
        var kor = getNum("kor");
        var mat = getNum("mat");
        var eng = getNum("eng");
    }


    var avg= (kor+mat+eng)/3; //평균값


    kor = "국어:"+grade(kor);
    kor = "수학:"+grade(mat);
    kor = "영어:"+grade(eng);
    avg = "평균:"+grade(avg);


    function grade(score){
        if(score>=90) return "A등급";
        else if(score>=80) return "B등급";
        else if(score>=70) return "B등급";
        else return "F등급"
    }

    out.innerText= kor+"<br>"+mat+"<br>"+eng+"<br>"+avg;

    */


//혈당수치
//상수가 혈당을 체크하였다.
//혈당수치에 따라 구분하여 출력하시오.
//70~100일 경우 공복혈당
//90~140일 경우 식후 2시간 혈당
//정상혈당 수치는 70~100, 90~140이다 정상수치보다 5.7% 미만이면
// 당화혈색소라고 출력







