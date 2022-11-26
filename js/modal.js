const errorMessage = document.querySelector ('#error').content.querySelector('.error');
const successMessage = document.querySelector ('#success').content.querySelector('.success');
const body = document.querySelector('body');

const outsideClickHandler = (evt, modal) => {
  if (evt.target === evt.currentTarget) {
    modal.remove();
  }
};

const closeModal = (modal) => {
  modal.remove();
};

const escapeHandler = (modal, evt) => {
  if(evt.key === 'Escape') {
    modal.remove();
  }
};

const renderMessageError = () => {
  const errorMessageFragment = document.createDocumentFragment();
  const errorMessageInner = errorMessage.cloneNode(true);
  errorMessageFragment.append(errorMessageInner);
  body.append(errorMessageFragment);
  errorMessageInner.querySelector('.error__button').addEventListener('click', () => {
    closeModal(errorMessageInner);
  });
  document.addEventListener('keydown', (evt) => {escapeHandler(errorMessageInner, evt);});
  errorMessageInner.addEventListener('click', (evt) => {outsideClickHandler(evt, errorMessageInner);});
};

const renderMessageSuccess = () => {
  const successMessageFragment = document.createDocumentFragment();
  const successMessageInner = successMessage.cloneNode(true);
  successMessageFragment.append(successMessageInner);
  body.append(successMessageFragment);
  successMessageInner.querySelector('.success__button').addEventListener('click', () => {
    closeModal(successMessageInner);
  });
  document.addEventListener('keydown', (evt) => {escapeHandler(successMessageInner, evt);});
  successMessageInner.addEventListener('click', (evt) => {outsideClickHandler(evt, successMessageInner);});
};
export {renderMessageError, renderMessageSuccess};
