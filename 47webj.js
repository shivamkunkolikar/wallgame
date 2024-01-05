let direction = 0;
let left_pos = 45;
let top_pos = 45;
let inr_acc = 0.4;
let score = 0;

function leftClick() {
    direction = 1;
}
function rightClick() {
    direction = 2;
}
function upClick() {
    direction = 3;
}
function downClick() {
    direction = 4;
}

function mainGame() {
    let game_end = setInterval(function () {
        if (direction != 0) {
            if (direction === 1) {
                left_pos = left_pos - inr_acc;
                if (top_pos >= 95 || top_pos <= 0 || left_pos >= 95 || left_pos <= 0) {
                    document.getElementById("square").style.left = `0%`;
                    clearInterval(game_end);
                }
                else {
                    document.getElementById("square").style.left = `${left_pos}%`;
                }
            }
            else if (direction === 2) {
                left_pos = left_pos + inr_acc;
                if (top_pos >= 95 || top_pos <= 0 || left_pos >= 95 || left_pos <= 0) {
                    document.getElementById("square").style.left = `95%`;
                    clearInterval(game_end);
                }
                else {
                    document.getElementById("square").style.left = `${left_pos}%`;
                }
            }
            else if (direction === 3) {
                top_pos = top_pos - inr_acc;
                if (top_pos >= 95 || top_pos <= 0 || left_pos >= 95 || left_pos <= 0) {
                    document.getElementById("square").style.top = `0%`;
                    clearInterval(game_end);
                }
                else {
                    document.getElementById("square").style.top = `${top_pos}%`;
                }
            }
            else {
                top_pos = top_pos + inr_acc;
                if (top_pos >= 95 || top_pos <= 0 || left_pos >= 95 || left_pos <= 0) {
                    document.getElementById("square").style.top = `95%`;
                    localStorage.setItem('hi', `${score + 1}`);
                    clearInterval(game_end);
                }
                else {
                    document.getElementById("square").style.top = `${top_pos}%`;
                }
            }
            score = score + 1;
            if (score % 50 == 0) { inr_acc = inr_acc + 0.2; }
            document.getElementById("score-num").innerHTML = `${score}`;
        }
    }, 50);
}

let a = localStorage.getItem('hi');
console.log(a);

function restartGame() {
    direction = 0;
    left_pos = 45;
    top_pos = 45;
    inr_acc = 0.4;
    score = 0;
    mainGame();
}

function newGame() {
    document.getElementById("game-page").style.display = "flex";
    document.getElementById("start-page").style.animation = "fadinganimation 0.5s ease-in-out 0s 1 ";
    document.getElementById("game-page").style.animation = "g_an1 1s ease-in-out 0s 1 ";
    setTimeout(() => {
        document.getElementById("start-page").style.display = "none"
    }, 450)

}

function highScore() {
    document.getElementById("str-btn1").style.display = "none";
    document.getElementById("str-btn2").style.animation = "s_an2 1s ease-in-out 0s 1 ";
    setTimeout(() => {
        document.getElementById("str-btn2").style.height = "400px";
    }, 1000)
}

mainGame();