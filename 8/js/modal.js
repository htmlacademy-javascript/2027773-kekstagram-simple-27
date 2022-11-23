const errorMessage = document.querySelector ('#error').content.querySelector('.error');
const successMessage = document.querySelector ('#success').content.querySelector('.success');
const body = document.querySelector('body');
const errorButton = document.querySelector ('.error__button');
const successButton = document.querySelector ('.success__button');

const renderMessageError = () => {
  const errorMessageFragment = document.createDocumentFragment();
  const errorMessageInner = errorMessage.cloneNode(true);
  errorMessageFragment.append(errorMessageInner);
  body.append(errorMessageFragment);
};


errorButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  .remove();
}
);

const renderMessageSuccess = () => {
  const successMessageFragment = document.createDocumentFragment();
  const successMessageInner = successMessage.cloneNode(true);
  successMessageFragment.append(successMessageInner);
  body.append(successMessageFragment);
};



export {renderMessageError, renderMessageSuccess};
