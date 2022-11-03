import { getPhoto } from './data.js';

const picturesContainer = document.querySelector ('.pictures');
const pictureUser = document.querySelector ('#picture').content;

const loadPhoto = getPhoto();

loadPhoto.forEach(() => {
  const pictureUserInner = pictureUser.cloneNode(true);
  picturesContainer.appendChild(pictureUserInner);
  pictureUserInner.src = url;
  pictureUserInner.querySelector('.picture__likes') = likes;
  pictureUserInner.querySelector('.picture__comments') = comments;
} );


