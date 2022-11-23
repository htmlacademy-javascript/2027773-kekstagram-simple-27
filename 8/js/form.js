import { isEscapeKey } from './utilits.js';
import './scale.js';
import { resetScale } from './scale.js';
import {setEffects} from './effects.js';
import { postData } from './api.js';
import {renderMessageError} from './modal.js';
import {renderMessageSuccess} from './modal.js';

const upLoudFile = document.querySelector('#upload-file');
const upLoadCancel = document.querySelector('#upload-cancel');
const overlay = document.querySelector('.img-upload__overlay');
const body = document.querySelector('body');
const form = document.querySelector('.img-upload__form');
const submitButton = document.querySelector('.img-upload__submit');

const pristine = new Pristine (form,{}, true);

const blockSubmitButton = () => {
  submitButton.disabled = true;
};

const onSubmitButton = () => {
  submitButton.disabled = false;
};

form.addEventListener ('submit', (evt) => {
  evt.preventDefault();

  const isValid = pristine.validate();

  if (isValid) {
    blockSubmitButton();
    postData(
      () => {
        closeForm();
        onSubmitButton();
        renderMessageSuccess();
      },
      () => {
        renderMessageError();
      },
      new FormData(form)
    );
  }
}
);

const onFormKeydown = (evt) => {
  if(isEscapeKey(evt)) {
    evt.preventDefault ();
    closeForm();
  }
};

function openForm () {
  overlay.classList.remove('hidden');
  body.classList.add('modal--open');
  document.addEventListener ('keydown', onFormKeydown);
  setEffects();
}

upLoudFile.addEventListener('change', (evt) => {
  evt.preventDefault();
  openForm();
}
);

function closeForm () {
  overlay.classList.add('hidden');
  body.classList.remove('modal--open');
  form.reset();
  resetScale();
  document.removeEventListener ('keydown', onFormKeydown);
}

upLoadCancel.addEventListener('click', (evt) => {
  evt.preventDefault();
  closeForm();
}
);

