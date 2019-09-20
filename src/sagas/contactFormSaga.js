import { takeLatest, put } from 'redux-saga/effects';
import axios from 'axios';
import {
  SUBMIT_CONTACT_FORM,
  SUBMIT_CONTACT_FORM_SUCCESS,
  SUBMIT_CONTACT_FORM_ERROR
} from '../actions/types';

// Watchers
export function* watchSubmitContactForm() {
  yield takeLatest(SUBMIT_CONTACT_FORM, submitContactFormAsync);
}

// Workers
function* submitContactFormAsync(action) {
  const { name, email, phone, message } = action.payload;
  const formData = new FormData();
  formData.set('name', name);
  formData.set('email', email);
  formData.set('phone', phone);
  formData.set('message', message);
  const response = yield axios.post('http://build.harrisonjack.co.uk/api/sendMail.php', formData);
  console.log(response);
  response.status === 200
    ? yield put({ type: SUBMIT_CONTACT_FORM_SUCCESS })
    : yield put({ type: SUBMIT_CONTACT_FORM_ERROR });
}
