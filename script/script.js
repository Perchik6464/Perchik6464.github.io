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
      var targetText = document.getElementById("inputBox");
      targetText.style.color = event.target.value;
    }
  
var bgColorWell;
var defaultBGColor = "#ff0000"; // Значение по умолчанию для цвета фона
  
  window.addEventListener("load", bgStartup, false);
  
  function bgStartup() {
      bgColorWell = document.querySelector("#bgColorWell");
      bgColorWell.value = defaultBGColor;
      bgColorWell.addEventListener("input", updateBackgroundColor, false);
      bgColorWell.addEventListener("change", updateAll, false);
  }
  
// Переименование и обновление функции для установки цвета фона

function updateBackgroundColor(event) {
  var targetBlock = document.getElementById("inputBox");
  targetBlock.style.backgroundColor = event.target.value;
}

