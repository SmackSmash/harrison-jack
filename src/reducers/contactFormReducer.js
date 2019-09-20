import { SUBMIT_CONTACT_FORM_SUCCESS, SUBMIT_CONTACT_FORM_ERROR } from '../actions/types';

const INITIAL_STATE = {
  sent: false,
  sending: false,
  error: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
