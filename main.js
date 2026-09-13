let score = 0;
const targetDiamonds = 10; // Кількість алмазів для виграшу фігурки
const scoreElement = document.getElementById('score');
const mineBtn = document.getElementById('mine-btn');
const modal = document.getElementById('prize-modal');
const closeModalBtn = document.getElementById('close-modal');

let hasWon = false;

mineBtn.addEventListener('click', () => {
    score++;
    scoreElement.textContent = score;

    // Візуальний ефект кнопки
    mineBtn.style.backgroundColor = 'var(--mc-diamond)';
    mineBtn.style.color = '#000';

    setTimeout(() => {
        mineBtn.style.backgroundColor = 'var(--mc-grass)';
        mineBtn.style.color = '#fff';
    }, 150);

    // Перевірка на виграш
    if (score === targetDiamonds && !hasWon) {
        hasWon = true; // Щоб вікно не з'являлося постійно після 10 алмазу
        setTimeout(() => {
            modal.classList.add('show');
        }, 300); // Невелика затримка для ефектності
    }
});

// Закриття модального вікна
closeModalBtn.addEventListener('click', () => {
    modal.classList.remove('show');
});

// Зміна часу доби
const timeBtn = document.getElementById('time-btn');
const skyElement = document.getElementById('sky');

timeBtn.addEventListener('click', () => {
    skyElement.classList.toggle('night');
});