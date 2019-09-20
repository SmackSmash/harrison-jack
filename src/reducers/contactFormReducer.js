import {
  SUBMIT_CONTACT_FORM,
  SUBMIT_CONTACT_FORM_SUCCESS,
  SUBMIT_CONTACT_FORM_ERROR
} from '../actions/types';

const INITIAL_STATE = {
  sent: false,
  sending: false,
  error: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SUBMIT_CONTACT_FORM:
      return { sent: false, sending: true, error: null };
    case SUBMIT_CONTACT_FORM_ERROR:
      return { sent: false, sending: false, error: action.payload };
    case SUBMIT_CONTACT_FORM_SUCCESS:
      return { sent: true, sending: false, error: null };
    default:
      return state;
  }
};
