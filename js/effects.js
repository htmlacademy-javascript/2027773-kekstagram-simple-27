const effectsList = document.querySelector('.effects__list');
const imgUpload = document.querySelector ('.img-upload__preview img');
const sliderBlock = document.querySelector('.effect-level');
const sliderValue = document.querySelector('.effect-level__value');
const sliderElement = document.querySelector ('.effect-level__slider');

const createSlider = () => {
  noUiSlider.create(sliderElement, {
    range: {
      min: 0,
      max: 100,
    },
    start: 100,
    step: 1,
    connect: 'lower',
  });
};

const updateSliderOption = (effect) => {
  switch (effect) {
    case 'chrome':
      sliderElement.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 1,
        },
        start: 1,
        step: 0.1,
      });
      break;
    case 'sepia':
      sliderElement.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 1,
        },
        step: 0.1,
        start: 1,
      });
      break;
    case 'marvin':
      sliderElement.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 100,
        },
        step: 1,
        start: 100,
      });
      break;
    case 'phobos':
      sliderElement.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 3,
        },
        step: 0.1,
        start: 3,
      });
      break;
    case 'heat':
      sliderElement.noUiSlider.updateOptions({
        range: {
          min: 1,
          max: 3,
        },
        step: 0.1,
        start: 3,
      });
      break;
  }
};

const hideSlider = () => {
  sliderBlock.classList.add('hidden');
};

const showSlider = () => {
  sliderBlock.classList.remove('hidden');
};

const resetFilter = () => {
  imgUpload.style.filter = '';
};

const addFilter = (effect) => {
  let filterStyle = '';
  switch (effect) {
    case 'chrome':
      filterStyle = `grayscale(${sliderValue.value})`;
      break;
    case 'sepia':
      filterStyle = `sepia(${sliderValue.value})`;
      break;
    case 'marvin':
      filterStyle = `invert(${sliderValue.value}%)`;
      break;
    case 'phobos':
      filterStyle = `blur(${sliderValue.value}px)`;
      break;
    case 'heat':
      filterStyle = `brightness(${sliderValue.value})`;
      break;
  }
  imgUpload.style.filter = filterStyle;
};

const setSliderListener = () => {
  sliderElement.noUiSlider.on('update', () => {
    sliderValue.value = sliderElement.noUiSlider.get();
    addFilter(document.querySelector('.effects__radio:checked').value);
  });
};

const setEffectsListener = () => {
  effectsList.addEventListener('change', (evt) => {
    if (evt.target.name === 'effect') {
      updateSliderOption(evt.target.value);
      if (evt.target.value === 'none'){
        hideSlider();
        resetFilter();
      } else {
        showSlider();
        addFilter(evt.target.value);
      }
    }
  });
};

const resetEffect = () => {
  hideSlider();
  resetFilter();
  document.querySelector('#effect-none').checked = true;
};
createSlider();
const setEffects = () => {
  resetEffect();
  setEffectsListener();
  setSliderListener();
};
export {setEffects};
