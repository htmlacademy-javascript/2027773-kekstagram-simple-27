import {searchRandomNumber} from './utilits.js';


const MIN_PHOTO_NUMBERS = 1;
const DESCRIPTIONS = ['Утро в Спб', 'Вечер в Спб', 'День в Спб',];
const MIN_LIKES = 15;
const MAX_LIKES = 200;
const MIN_COMMENTS = 0;
const MAX_COMMENTS = 200;

function getPhoto (photoNumbers) {
  return {
    id: searchRandomNumber( MIN_PHOTO_NUMBERS, photoNumbers ),
    url: `photos/${searchRandomNumber( MIN_PHOTO_NUMBERS, photoNumbers )}.jpg`,
    description:  DESCRIPTIONS [ searchRandomNumber( 0, DESCRIPTIONS.length ) ],
    likes: searchRandomNumber(MIN_LIKES, MAX_LIKES),
    comments: searchRandomNumber(MIN_COMMENTS, MAX_COMMENTS)
  };
}


function getData (photoNumber) {
  const data = [];
  for (let i = 1; i <= photoNumber; i++ ) {
    data.push ( getPhoto(photoNumber) );
  }
  return data;
}

export { getData };

