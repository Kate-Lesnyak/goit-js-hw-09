
// Напиши скрипт, который после нажатия кнопки «Start», раз в секунду меняет цвет фона < body > на случайное значение используя инлайн стиль.При нажатии на кнопку «Stop», изменение цвета фона должно останавливаться.

//   ВНИМАНИЕ
// Учти, на кнопку «Start» можно нажать бесконечное количество раз.Сделай так, чтобы пока изменение темы запушено, кнопка «Start» была не активна(disabled).

// Для генерации случайного цвета используй функцию getRandomHexColor.

const body = document.body;
const btnChangeBgColor = document.querySelector('[data-start]');
const btnStopChangeBgColor = document.querySelector('[data-stop]');

btnChangeBgColor.addEventListener('click', onBtnChangeBgColorClik);
btnStopChangeBgColor.addEventListener('click', onBtnStopChangeBgColorClik);

let intervalId = null;

btnStopChangeBgColor.disabled = true;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

function onBtnChangeBgColorClik() {
  intervalId = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
  }, 1000);
  btnChangeBgColor.disabled = true;
  btnStopChangeBgColor.disabled = false;
};

function onBtnStopChangeBgColorClik() {
  clearInterval(intervalId);
  btnChangeBgColor.disabled = false;
  btnStopChangeBgColor.disabled = true;
};
