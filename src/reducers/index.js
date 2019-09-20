import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import contactFormReducer from './contactFormReducer';

export default combineReducers({
  form: formReducer,
  contactForm: contactFormReducer
});
