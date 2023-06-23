function input() {
    var bloodSugarInput = document.getElementById("bloodSugarInput");
    var bloodSugar = parseInt(bloodSugarInput.value);

    if (bloodSugar >= 70 && bloodSugar <= 100) {
        alert("공복혈당");
    } else if (bloodSugar >= 90 && bloodSugar <= 140) {
        alert("식후 2시간 혈당");
    } else if (bloodSugar >= 70 * 0.957 && bloodSugar <= 100 * 0.957) {
        alert("당화혈색소");
    } else {
        alert("혈당 상태를 알 수 없음.");
    }
}



///////////////////////////////////////////



function input() {
    weight = parseInt(document.getElementById("weight").value);
    height = parseInt(document.getElementById("height").value);
}

let bmi = ((weight/100)*(height/100));
var result1 = document.getElementById(+"result+");

if(bmi <= 18.5){
    alert("저체중");
} else if(bmi >= 18.5 && bmi <= 22.9){
    alert("정상");
} else if(bmi>= 23.0 && bmi <=24.9){
    alert("과체중");
} else if(bmi<=25){
    alert("비만");
} else{
    alert("정상적인 체중을 입력하세요.");
}

