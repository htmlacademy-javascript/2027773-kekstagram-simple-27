import { getData } from './api.js';
import {renderPictures} from './pictures.js';
import './form.js';
import './effects.js';
import './modal.js';
import {showAlert} from './utilits.js';

getData(
  (data) => {
    renderPictures(data);
  },
  () => {
    showAlert('Упс! Данные не подгрузились :( Попробуйте позже!');
  }
);
