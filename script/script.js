// JavaScript
const toggleButton = document.getElementById('toggleButton');
const sideBar = document.getElementById('sideBar');

toggleButton.addEventListener('click', function() {
  if (sideBar.style.right === '0px') {
    sideBar.style.right = '-300px'; /* Close the side bar */
  } else {
    sideBar.style.right = '0px'; /* Open the side bar */
  }
});


// Добавление инпут полей
let isDragging = false;
let isDeleteEnabled = false;
let originalX, originalY;
let shiftX, shiftY;
let clonedBoxes = [];

inputBox.onmousedown = function(event) {

    isDragging = true;
    let originalBox = event.target;
    originalX = originalBox.getBoundingClientRect().left;
    originalY = originalBox.getBoundingClientRect().top;
    shiftX = event.clientX - originalX;
    shiftY = event.clientY - originalY;

    let clonedBox = originalBox.cloneNode(true); // Клонирование inputBox
    clonedBox.style.position = 'absolute';
    clonedBox.style.zIndex = 1000;
    document.body.append(clonedBox);
    clonedBoxes.push(clonedBox);

    moveBox(event.pageX, event.pageY);

    function moveBox(pageX, pageY) {
        clonedBox.style.left = pageX - shiftX + 'px';
        clonedBox.style.top = pageY - shiftY + 'px';
    }

    function onMouseMove(event) {
        if (isDragging) {
            moveBox(event.pageX, event.pageY);
        }
    }

    document.addEventListener('mousemove', onMouseMove);

clonedBox.addEventListener('mouseup', function(event) {
    isDragging = false;
    document.removeEventListener('mousemove', onMouseMove);
    if (event.shiftKey) {
        event.target.remove();
        clonedBoxes = clonedBoxes.filter(box => box !== event.target);
    }

});
clonedBox.onmousedown = function(event) {
    if (!event.ctrlKey || event.button !== 0) {
        return; // Не начинать перетаскивание, если не выполнены условия
    }
  
    isDragging = true;
    shiftX = event.clientX - clonedBox.getBoundingClientRect().left;
    shiftY = event.clientY - clonedBox.getBoundingClientRect().top;
  
    function moveBox(pageX, pageY) {
        clonedBox.style.left = pageX - shiftX + 'px';
        clonedBox.style.top = pageY - shiftY + 'px';
    }
  
    function onMouseMove(event) {
        if (isDragging) {
            moveBox(event.pageX, event.pageY);
        }
    }
  
    document.addEventListener('mousemove', onMouseMove);
  
    clonedBox.addEventListener('mouseup', function(event) {
        isDragging = false;
        document.removeEventListener('mousemove', onMouseMove);

        if (event.shiftKey) {
            event.target.remove();
            clonedBoxes = clonedBoxes.filter(box => box !== event.target);
        }
    });
  }

};
// Цвета
var colorWell;
var defaultColor = "#0000ff";

window.addEventListener("load", startup, false);
function startup() {
    colorWell = document.querySelector("#colorWell");
    colorWell.value = defaultColor;
    colorWell.addEventListener("input", updateFirst, false);
    colorWell.addEventListener("change", updateAll, false);
    colorWell.select();
  }
  function updateFirst(event) {
    var p = document.querySelector("body");
  
    if (p) {
      p.style.color = event.target.value;
    }
  }
// script.js

// https://ru.stackoverflow.com/questions/1460488/%D0%9A%D0%B0%D0%BA-%D1%81%D0%B4%D0%B5%D0%BB%D0%B0%D1%82%D1%8C-%D1%87%D1%82%D0%BE%D0%B1%D1%8B-drag-and-drop-%D0%B2-js-%D0%BF%D1%80%D0%B8-%D0%BD%D0%B0%D0%B6%D0%B0%D1%82%D0%B8%D0%B8-%D0%BD%D0%B0-%D1%8D%D0%BB%D0%B5%D0%BC%D0%B5%D0%BD%D1%82-%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D1%83-%D1%81%D0%BE%D0%B7%D0%B4%D0%B0%D0%B2%D0%B0?ysclid=lvzi61oyi2530335345
// Дублирование драгон дропа

// https://learn.javascript.ru/mouse-drag-and-drop
// Реализация драгон дропа

// https://ru.stackoverflow.com/questions/633529/%D0%9A%D0%B0%D0%BA-%D1%81%D0%B4%D0%B5%D0%BB%D0%B0%D1%82%D1%8C-%D1%82%D0%B0%D0%BA-%D1%87%D1%82%D0%BE%D0%B1%D1%8B-%D0%B2%D1%8B%D1%81%D0%BE%D1%82%D0%B0-input-%D1%80%D0%B5%D0%B3%D1%83%D0%BB%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BB%D0%B0%D1%81%D1%8C-%D0%B2-%D0%B7%D0%B0%D0%B2%D0%B8%D1%81%D0%B8%D0%BC%D0%BE%D1%81%D1%82%D0%B8-%D0%BE%D1%82-%D1%81%D0%BE%D0%B4%D0%B5%D1%80%D0%B6%D0%B8%D0%BC%D0%BE%D0%B3%D0%BE
// Реализация растигивания input