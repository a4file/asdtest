let answer = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
    let guess = document.getElementById('guess').value;
    attempts++;
    
    if (guess < answer) {
        document.getElementById('result').innerText = "더 큰 숫자를 입력하세요!";
    } else if (guess > answer) {
        document.getElementById('result').innerText = "더 작은 숫자를 입력하세요!";
    } else {
        document.getElementById('result').innerText = "정답입니다! 시도 횟수: " + attempts;
    }
}