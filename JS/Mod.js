const gameArea = document.getElementById('gameArea');
const target = document.getElementById('target');
const scoreDisplay = document.getElementById('score');
const timerDisplay = document.getElementById('timer');
const message = document.getElementById('message');
const clickSound = document.getElementById('clickSound');
const levelSound = document.getElementById('levelSound');
const loseSound = document.getElementById('loseSound');
const goldSound = document.getElementById('goldSound');
let score = 0;
let doubleScoreActive = false;
let timeLeft = 0;
let timerInterval = null;
let goldInterval = null;

// Fallback Web Audio API for sounds
const audioContext = new (window.AudioContext || window.webkitAudioContext)();
function playBeep(freq = 440, duration = 0.1) {
    const oscillator = audioContext.createOscillator();
    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(freq, audioContext.currentTime);
    oscillator.connect(audioContext.destination);
    oscillator.start();
    oscillator.stop(audioContext.currentTime + duration);
}

function moveTarget() {
    const maxX = gameArea.offsetWidth - target.offsetWidth;
    const maxY = gameArea.offsetHeight - target.offsetHeight;
    
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);
    
    target.style.left = randomX + 'px';
    target.style.top = randomY + 'px';
    
    target.style.transition = score >= 100 ? 'all 0.1s' : 'all 0.2s';
}

function createBlackSquares(count) {
    document.querySelectorAll('.blackSquare').forEach(square => square.remove());
    
    for (let i = 0; i < count; i++) {
        const blackSquare = document.createElement('div');
        blackSquare.className = 'blackSquare';
        const maxX = gameArea.offsetWidth - 50;
        const maxY = gameArea.offsetHeight - 50;
        blackSquare.style.left = Math.floor(Math.random() * maxX) + 'px';
        blackSquare.style.top = Math.floor(Math.random() * maxY) + 'px';
        
        blackSquare.addEventListener('click', resetToLevel1);
        gameArea.appendChild(blackSquare);
    }
}

function createGoldSquare() {
    if (score < 300 || score >= 600) return;
    
    document.querySelectorAll('.goldSquare').forEach(square => square.remove());
    
    const goldSquare = document.createElement('div');
    goldSquare.className = 'goldSquare';
    const maxX = gameArea.offsetWidth - 50;
    const maxY = gameArea.offsetHeight - 50;
    goldSquare.style.left = Math.floor(Math.random() * maxX) + 'px';
    goldSquare.style.top = Math.floor(Math.random() * maxY) + 'px';
    
    goldSquare.addEventListener('click', () => {
        doubleScoreActive = true;
        goldSquare.remove();
        try {
            goldSound.currentTime = 0;
            goldSound.play().catch(() => {
                playBeep(660, 0.2);
            });
        } catch (e) {
            playBeep(660, 0.2);
        }
        setTimeout(() => {
            doubleScoreActive = false;
        }, 5000);
    });
    
    gameArea.appendChild(goldSquare);
    setTimeout(() => goldSquare.remove(), 1000);
}

function startTimer(duration) {
    if (timerInterval) clearInterval(timerInterval);
    timeLeft = duration; // 180s for Level 5, 120s for Level 6
    timerInterval = setInterval(() => {
        timeLeft--;
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        timerDisplay.textContent = `Time: ${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
        
        if (timeLeft <= 0 && score < (duration === 180 ? 500 : 600)) {
            resetToLevel1();
        }
    }, 1000);
}

function resetToLevel1() {
    score = 0;
    scoreDisplay.textContent = `Score: ${score}`;
    message.textContent = 'You Lose!';
    message.style.backgroundColor = 'rgba(255, 0, 0, 0.8)';
    message.style.display = 'block';
    document.querySelectorAll('.blackSquare').forEach(square => square.remove());
    document.querySelectorAll('.goldSquare').forEach(square => square.remove());
    target.style.transition = 'all 0.2s';
    doubleScoreActive = false;
    if (timerInterval) clearInterval(timerInterval);
    if (goldInterval) clearInterval(goldInterval);
    timerDisplay.textContent = 'Time: 0:00';
    gameArea.style.backgroundColor = '#f0f0f0'; // Reset to default
    
    try {
        loseSound.currentTime = 0;
        loseSound.play().catch(() => {
            playBeep(220, 0.5);
        });
    } catch (e) {
        playBeep(220, 0.5);
    }
    
    setTimeout(() => {
        message.style.display = 'none';
        target.style.display = 'block';
    }, 2000);
}

function playLevelSound() {
    try {
        levelSound.currentTime = 0;
        levelSound.play().catch(() => {
            playBeep(880, 0.3);
        });
    } catch (e) {
        playBeep(880, 0.3);
    }
}

function checkScore() {
    if (score === 100) {
        message.textContent = 'Congratulations! You finished Level 1!';
        message.style.backgroundColor = 'rgba(0, 255, 0, 0.8)';
        message.style.display = 'block';
        playLevelSound();
        setTimeout(() => {
            message.style.display = 'none';
            target.style.display = 'block';
        }, 2000);
    } else if (score === 200) {
        message.textContent = 'Congratulations! You finished Level 2!';
        message.style.backgroundColor = 'rgba(0, 255, 0, 0.8)';
        message.style.display = 'block';
        playLevelSound();
        target.style.display = 'none';
        setTimeout(() => {
            message.style.display = 'none';
            target.style.display = 'block';
            createBlackSquares(4);
        }, 2000);
    } else if (score === 300) {
        message.textContent = 'Congratulations! You finished Level 3!';
        message.style.backgroundColor = 'rgba(0, 255, 0, 0.8)';
        message.style.display = 'block';
        playLevelSound();
        target.style.display = 'none';
        document.querySelectorAll('.blackSquare').forEach(square => square.remove());
        setTimeout(() => {
            message.style.display = 'none';
            target.style.display = 'block';
            createBlackSquares(6);
            if (goldInterval) clearInterval(goldInterval);
            goldInterval = setInterval(createGoldSquare, 1000);
        }, 2000);
    } else if (score === 400) {
        message.textContent = 'Congratulations! You finished Level 4!';
        message.style.backgroundColor = 'rgba(0, 255, 0, 0.8)';
        message.style.display = 'block';
        playLevelSound();
        target.style.display = 'none';
        document.querySelectorAll('.blackSquare').forEach(square => square.remove());
        document.querySelectorAll('.goldSquare').forEach(square => square.remove());
        setTimeout(() => {
            message.style.display = 'none';
            target.style.display = 'block';
            createBlackSquares(8);
            startTimer(180); // 3 minutes for Level 5
            if (goldInterval) clearInterval(goldInterval);
            goldInterval = setInterval(createGoldSquare, 1000);
        }, 2000);
    } else if (score === 500) { // Exact check for Level 5
        message.textContent = 'Congratulations! You finished Level 5!';
        message.style.backgroundColor = 'rgba(0, 255, 0, 0.8)';
        message.style.display = 'block';
        playLevelSound();
        target.style.display = 'none';
        document.querySelectorAll('.blackSquare').forEach(square => square.remove());
        document.querySelectorAll('.goldSquare').forEach(square => square.remove());
        setTimeout(() => {
            message.style.display = 'none';
            target.style.display = 'block';
            gameArea.style.backgroundColor = 'yellow'; // Yellow for Level 6
            createBlackSquares(10); // 10 black squares for Level 6
            startTimer(120); // 2 minutes for Level 6
            if (goldInterval) clearInterval(goldInterval);
            goldInterval = setInterval(createGoldSquare, 1000);
        }, 2000);
    } else if (score === 600 && timeLeft > 0) { // Exact check for Level 6
        message.textContent = 'Congratulations! You finished Level 6!';
        message.style.backgroundColor = 'rgba(0, 255, 0, 0.8)';
        message.style.display = 'block';
        playLevelSound();
        target.style.display = 'none';
        document.querySelectorAll('.blackSquare').forEach(square => square.remove());
        document.querySelectorAll('.goldSquare').forEach(square => square.remove());
        if (timerInterval) clearInterval(timerInterval);
        if (goldInterval) clearInterval(goldInterval);
        timerDisplay.textContent = 'Time: 0:00';
        gameArea.style.backgroundColor = '#f0f0f0'; // Reset background
    }
}

target.addEventListener('click', () => {
    if (score < 600) {
        score += doubleScoreActive ? 2 : 1;
        scoreDisplay.textContent = `Score: ${score}`;
        moveTarget();
        target.style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16);
        
        try {
            clickSound.currentTime = 0;
            clickSound.play().catch(() => {
                playBeep(440, 0.1);
            });
        } catch (e) {
            playBeep(440, 0.1);
        }
        
        checkScore();
    }
});

// Move target to initial position
moveTarget();