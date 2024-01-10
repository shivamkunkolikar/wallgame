let direction = 0;
let left_pos = 45;
let top_pos = 45;
let inr_acc = 0.4;
let score = 0;
let flag = 0;

function leftClick() {
    if(direction != 2) {
        direction = 1;
    }
}
function rightClick() {
    if(direction != 1) {
        direction = 2;
    }
}
function upClick() {
    if(direction != 4) {
        direction = 3;
    }
}
function downClick() {
    if(direction != 3) {
        direction = 4;
    }
}

function mainGame() {
    let game_end = setInterval(function () {
        if (direction != 0) {
            if (direction === 1) {
                left_pos = left_pos - inr_acc;
                if (top_pos >= 95 || top_pos <= 0 || left_pos >= 95 || left_pos <= 0) {
                    document.getElementById("square").style.left = `0%`;
                    highScore_update(score + 1);
                    setTimeout(gameOver, 1500);
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
                    highScore_update(score + 1);
                    setTimeout(gameOver, 1500);
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
                    highScore_update(score + 1);
                    setTimeout(gameOver, 1500);
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
                    highScore_update(score + 1);
                    setTimeout(gameOver, 1500);
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
    document.getElementById("square").style.left = `${left_pos}%`;
    document.getElementById("square").style.top = `${top_pos}%`;
    document.getElementById("score-num").innerHTML = `${score}`;
    document.getElementById("game-page").style.display = "flex";
    document.getElementById("gameover").style.animation = "fadinganimation 0.5s ease-in-out 0s 1 ";
    document.getElementById("game-page").style.animation = "g_an1 1s ease-in-out 0s 1 ";
    setTimeout(() => {
        document.getElementById("gameover").style.display = "none"
    }, 450)
    mainGame();
}

function newGame() {
    document.getElementById("game-page").style.display = "flex";
    document.getElementById("start-page").style.animation = "fadinganimation 0.5s ease-in-out 0s 1 ";
    document.getElementById("game-page").style.animation = "g_an1 1s ease-in-out 0s 1 ";
    setTimeout(() => {
        document.getElementById("start-page").style.display = "none"
    }, 450);
}

function highScore() {
    if(flag === 0) {
        flag = 1;
        document.getElementById("str-btn1").style.display = "none";
        document.getElementById("str-btn2").style.animation = "s_an2 1s ease-in-out 0s 1 ";
        setTimeout(() => {
            document.getElementById("str-btn2").style.height = "400px";
        }, 1000);
        document.getElementById("hsd").style.display = "flex";
        if(localStorage.getItem('hi') == null) {
            document.getElementById("hsd").innerHTML = "No High Score Yet";
        }
        else {
            document.getElementById("hsd").innerHTML = `${localStorage.getItem('hi')}`;
        }
    }
    else {
        flag = 0;
        document.getElementById("str-btn1").style.display = "flex";
        document.getElementById("str-btn2").style.animation = "";
        document.getElementById("str-btn2").style.height = "50px";
        document.getElementById("hsd").style.display = "none";
    }
}

function highScore_update(new_score) {
    if(localStorage.getItem('hi') != null) {
        if(new_score > Number(localStorage.getItem('hi'))) {
            localStorage.setItem('hi', `${new_score}`);
        }
    }
    else {
        localStorage.setItem('hi', `${new_score}`);
    }
}

function gameOver() {
    document.getElementById("gameover").style.display = "flex";
    document.getElementById("game-page").style.animation = "fadinganimation 0.5s ease-in-out 0s 1 ";
    document.getElementById("gameover").style.animation = "g_an1 1s ease-in-out 0s 1 ";
    setTimeout(() => {
        document.getElementById("game-page").style.display = "none"
    }, 450)
    document.getElementById("sc").innerHTML = `Score : ${score }`;
    document.getElementById("hs").innerHTML = `High Score : ${localStorage.getItem('hi')}`;
}

mainGame();