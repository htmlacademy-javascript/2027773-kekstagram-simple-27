const picturesContainer = document.querySelector ('.pictures');
const pictureUser = document.querySelector ('#picture').content.querySelector('.picture');

const renderPictures = (loadPhoto) => {

  const photoCardFragment = document.createDocumentFragment();
  loadPhoto.forEach((picture) => {
    const pictureUserInner = pictureUser.cloneNode(true);
    pictureUserInner.querySelector('.picture__img').src = picture.url;
    pictureUserInner.querySelector('.picture__likes').textContent = picture.likes;
    pictureUserInner.querySelector('.picture__comments').textContent = picture.comments;

    photoCardFragment.append(pictureUserInner);
  } );
  picturesContainer.append(photoCardFragment);
};
export {renderPictures};
