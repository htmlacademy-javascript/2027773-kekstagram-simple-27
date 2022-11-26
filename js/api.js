const GET_USER_PHOTOS = 'https://27.javascript.pages.academy/kekstagram-simple/data';
const POST_USER_PHOTO = 'https://27.javascript.pages.academy/kekstagram-simpl';

const getData = (onSuccess, onFail) => {
  fetch(GET_USER_PHOTOS)
    .then((response) => {
      if (response.ok) {
        response.json()
          .then((data) => {
            onSuccess(data);
          });
      } else {
        onFail();
      }
    })
    .catch(() => {
      onFail();
    });
};

const postData = (onSuccess, onFail, payload) => {
  fetch(POST_USER_PHOTO, {
    method: 'POST',
    body: payload
  })
    .then((response) => {
      if(response.ok) {
        onSuccess();
      } else {
        onFail();
      }
    });
};

export { getData, postData };
