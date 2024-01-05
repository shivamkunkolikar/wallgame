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

mainGame();