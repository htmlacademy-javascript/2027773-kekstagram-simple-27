const minusButton = document.querySelector('.scale__control--smaller');
const plusButton = document.querySelector('.scale__control--bigger');
const scaleControlValue = document.querySelector('.scale__control--value');
const image = document.querySelector('img');

const scaleMin = 25;
const scaleMax = 100;
const scaleDefault = 100;
const scaleStep = 25;

const scaleImage = ( value = scaleDefault ) => {
  image.style.transform = `scale(${value / 100})`;
  scaleControlValue.value = `${value}%`;
};

const onMinusButtonClick = () => {
  const currentValue = parseInt (scaleControlValue.value, 10 );
  let newValue = currentValue - scaleStep;
  if (newValue < scaleMin) {
    newValue = scaleMin;
  }
  scaleImage(newValue);
};

const onPlusButtonClick = () => {
  const currentValue = parseInt (scaleControlValue.value, 10 );
  let newValue = currentValue + scaleStep;
  if (newValue > scaleMax) {
    newValue = scaleMax;
  }
  scaleImage(newValue);
};

const resetScale = () => {
  scaleImage();
};

minusButton.addEventListener('click', onMinusButtonClick);

plusButton.addEventListener('click', onPlusButtonClick);

export {resetScale};
/*Масштаб:

При нажатии на кнопки .scale__control--smaller и .scale__control--bigger должно изменяться значение поля .scale__control--value;
Значение должно изменяться с шагом в 25. Например, если значение поля установлено в 50%, после нажатия на «+», значение должно стать равным 75%. Максимальное значение — 100%,
минимальное — 25%. Значение по умолчанию — 100%;
При изменении значения поля .scale__control--value изображению внутри .img-upload__preview должен добавляться соответствующий стиль CSS,
который с помощью трансформации scale задаёт масштаб. Например, если в поле стоит значение 75%, то в стиле изображения должно быть написано transform: scale(0.75).
 */
