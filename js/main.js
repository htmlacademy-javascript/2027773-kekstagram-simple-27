import { getData } from './api.js';
import {renderPictures} from './pictures.js';
import './form.js';
import './effects.js';

getData(
  (data) => {
    renderPictures(data);
  },
  () => {
    //showAlert('Упс! Данные не подгрузились :( Попробуйте позже!');
  }
);
