function checksLength ( str, length ) {
  if (typeof str === 'string') {
    return str.length <= length;
  }
  return NaN;
}

checksLength ();

export { checksLength };
