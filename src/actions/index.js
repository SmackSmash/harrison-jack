import { SUBMIT_CONTACT_FORM } from './types';

export const submitContact = formData => ({
  type: SUBMIT_CONTACT_FORM,
  payload: formData
});
