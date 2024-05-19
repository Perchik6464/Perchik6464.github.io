// JavaScript для сохранения и загрузки положения inputBox

// Сохранение положения блока
function savePosition() {
    const boxes = document.querySelectorAll('.dragon-input');
    boxes.forEach(box => {
        const id = box.id;
        const rect = box.getBoundingClientRect();
        localStorage.setItem(id, JSON.stringify({ left: rect.left, top: rect.top }));
    });
}

// Загрузка сохраненного положения
function loadPosition() {
    const boxes = document.querySelectorAll('.dragon-input');
    boxes.forEach(box => {
        const id = box.id;
        const position = localStorage.getItem(id);
        if (position) {
            const pos = JSON.parse(position);
            box.style.position = 'absolute';
            box.style.left = `${pos.left}px`;
            box.style.top = `${pos.top}px`;
        }
    });
}

document.addEventListener('DOMContentLoaded', loadPosition);

// Добавление события для сохранения позиции при перемещении
document.addEventListener('mouseup', function(event) {
    if (event.target.classList.contains('dragon-input')) {
        savePosition();
    }
});