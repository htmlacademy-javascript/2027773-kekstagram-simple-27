const PHOTO_NUMBERS = 25;
const MIN_PHOTO_NUMBERS = 1;
const DESCRIPTIONS = ['Утро в Спб', 'Вечер в Спб', 'День в Спб',];
const MIN_LIKES = 15;
const MAX_LIKES = 200;
const MIN_COMMENTS = 0;
const MAX_COMMENTS = 200;

function searchRandomNumber (min, max) {
  if(min >= 0 && max >= 0 && min < max ) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }
  return NaN;
}

searchRandomNumber(1, 10);

function checksLength ( str, length ) {
  if (typeof str === 'string') {
    return str.length <= length;
  }
  return NaN;
}

checksLength ();

function getPhoto () {
  return {
    id: searchRandomNumber( MIN_PHOTO_NUMBERS, PHOTO_NUMBERS ),
    url: `photos/${searchRandomNumber( MIN_PHOTO_NUMBERS, PHOTO_NUMBERS )}.jpg`,
    description:  DESCRIPTIONS [ searchRandomNumber( 0, DESCRIPTIONS.length ) ],
    likes: searchRandomNumber(MIN_LIKES, MAX_LIKES),
    comments: searchRandomNumber(MIN_COMMENTS, MAX_COMMENTS)
  };
}


function getData (photoNumber) {
  const data = [];
  for (let i = 1; i <= photoNumber; i++ ) {
    data.push ( getPhoto() );
  }
  return data;
}

getData(PHOTO_NUMBERS);
