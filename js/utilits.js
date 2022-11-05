function searchRandomNumber (min, max) {
  if(min >= 0 && max >= 0 && min < max ) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }
  return NaN;
}

export { searchRandomNumber };

function checksLength ( str, length ) {
  if (typeof str === 'string') {
    return str.length <= length;
  }
  return NaN;
}

checksLength ();

export { checksLength };
