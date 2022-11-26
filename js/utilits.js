const ALERT_SHOW_TIME = 5000;

function searchRandomNumber (min, max) {
  if(min >= 0 && max >= 0 && min < max ) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }
  return NaN;
}

const isEscapeKey = (evt) => evt.key === 'Escape';

function checksLength ( str, minLength, maxLength) {
  if (typeof str === 'string') {
    return str.length >= minLength && str.length <= maxLength;
  }
  return NaN;
}

const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = '100';
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = '0';
  alertContainer.style.top = '0';
  alertContainer.style.right = '0';
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

export { checksLength,
  searchRandomNumber,
  isEscapeKey,
  showAlert
};
