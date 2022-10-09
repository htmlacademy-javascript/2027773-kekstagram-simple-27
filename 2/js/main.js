const searchRandomNumber = function (min, max) {
  if(min >= 0 && max >= 0 && min < max ) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }
  return NaN;
};

searchRandomNumber();

function checksLength (line, maxLength) {
  if (line < maxLength) {
    return true;
  } return false;
}

checksLength ();


