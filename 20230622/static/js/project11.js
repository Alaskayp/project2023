var currentPlayer = "user"; // 현재 플레이어 (user 또는 computer)
var count = 0; // 현재까지의 숫자 합계

function playGame() {
    var inputNum = document.getElementById("inputNumbers").value.trim(); // 사용자가 입력한 숫자
    var num = inputNum.split(""); // 입력된 숫자를 배열로 분리

    if (num.length === 0 || num.length > 3) {
        alert("1~3까지의 숫자를 입력하세요.");
        return;
    }

    for (var i = 0; i < num.length; i++) {
        var number = parseInt(num[i]);
        if (isNaN(number) || number < 1 || number > 3) {
            alert("올바른 숫자를 입력하세요 (1~3)");
            return;
        }
    }

    for (var i = 0; i < num.length; i++) {
        var number = parseInt(num[i]);
        count += number; // 입력한 숫자를 현재까지의 합계에 더해줌

        if (count >= 31) {
            if (currentPlayer === "user") {
                document.getElementById("result").textContent = "컴퓨터가 승리하였습니다!";
            } else {
                document.getElementById("result").textContent = "사용자가 승리하였습니다!";
            }
            document.getElementById("inputNumbers").disabled = true;
            return;
        }

        currentPlayer = currentPlayer === "user" ? "computer" : "user"; // 플레이어를 번갈아가며 변경

        if (currentPlayer === "computer") {
            var computerNumber = getComputerNumber();
            count += computerNumber; // 컴퓨터가 자동으로 입력한 숫자를 합계에 더해줌
            document.getElementById("result").textContent = "컴퓨터: " + computerNumber;
            currentPlayer = "user"; // 다시 사용자 차례로 변경
        }
    }

    document.getElementById("inputNumbers").value = ""; // 입력창 초기화
}

function getComputerNumber() {
        var remaining = 31 - count; // 남은 숫자 계산
        var computerNumber = remaining > 3 ? getRandomNumber(1, 3) : remaining; // 1~3 사이의 숫자를 랜덤으로 선택, 남은 숫자보다 작을 경우 남은 숫자 선택
        return computerNumber;
    }

    function getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min; // 최소값(min)부터 최대값(max) 사이의 랜덤한 정수 반환
    }
