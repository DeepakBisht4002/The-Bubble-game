//Global Variables//
var score = 0;
var hitrn = 0;

function makeBubble() {
    var clutter = '';
    for (let i = 1; i <= 148; i++) {
        let rn = Math.floor(Math.random() * 10);
        clutter += `<div class="bubble">${rn}</div>`
        document.querySelector('#pbtm').innerHTML = clutter;
    }
}
function runTimer() {
    var timer = 60;
    var timInt = setInterval(() => {
        if (timer > 0) {
            timer--;
            document.querySelector('#timerVal').textContent = timer;
        }
        else {
            clearInterval(timInt);
            document.querySelector('#pbtm').innerHTML = `<h1 id='gameover_info'>Game Over</h1>`;
        

        }
    }, 1000);


}
function updateHighScore() {
    if (score > highScore) {
        highScore = score;
        localStorage.setItem('highScore', highScore);
        alert('New High Score: ' + highScore);
    }
}

function getnewHit() {
    hitrn = Math.floor(Math.random() * 10);
    document.querySelector('#hitVal').textContent = hitrn;
}


function updateScore() {
    score += 10;
    document.querySelector('#scoreVal').textContent = score;
}

document.querySelector('#pbtm').addEventListener('click', function (bubble) {
    bubbleclick.play();
    let bubbleText = Number(bubble.target.textContent);

    if (bubbleText === hitrn) {
        getnewHit();
        makeBubble();
    }
})

makeBubble();
runTimer();
getnewHit();

