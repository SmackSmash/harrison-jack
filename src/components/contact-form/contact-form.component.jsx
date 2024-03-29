import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { submitContact } from '../../actions';
import Spinner from '../spinner/spinner.component';
import './contact-form.styles.scss';

const renderInput = ({ name, type, placeholder, input, required, meta }) => {
  return (
    <div className={`contact-form__field${required ? ' contact-form__field--required' : ''}`}>
      <input name={name} id={name} type={type} placeholder={placeholder} {...input} />
      {meta.error && (meta.touched || meta.submitFailed) && (
        <p className="contact-form__field__error">{meta.error}</p>
      )}
    </div>
  );
};

const renderTextarea = ({ name, placeholder, input, required, meta }) => {
  return (
    <div className={`contact-form__field${required ? ' contact-form__field--required' : ''}`}>
      <textarea name={name} placeholder={placeholder} {...input} />
      {meta.error && (meta.touched || meta.submitFailed) && (
        <p className="contact-form__field__error">{meta.error}</p>
      )}
    </div>
  );
};

const ContactForm = ({
  handleSubmit,
  pristine,
  reset,
  submitting,
  submitContact,
  sent,
  sending,
  sendError
}) => {
  const onSubmit = async formData => {
    submitContact(formData);
  };

  if (sent) return <p>Thanks for getting in touch! We'll get back to you as soon as possible.</p>;
  if (sendError)
    return (
      <>
        <p>There was an error sending your message. Details below:</p>
        <p>{sendError}</p>
      </>
    );
  return (
    <div className="form-container">
      {sending && <Spinner dark />}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={`contact-form${sending ? ' contact-form--sending' : ''}`}
      >
        <Field name="name" component={renderInput} type="text" required placeholder="Name" />
        <Field name="email" component={renderInput} type="email" required placeholder="Email" />
        <Field name="phone" component={renderInput} type="tel" placeholder="Phone" />
        <Field name="message" component={renderTextarea} required placeholder="Message" />
        <div className="contact-form__button-container">
          <button
            className="contact-form__button-container__button contact-form__button-container__button--black"
            type="submit"
            disabled={pristine || submitting}
          >
            {'//Submit'}
          </button>
          <button
            className="contact-form__button-container__button contact-form__button-container__button--white"
            type="reset"
            onClick={reset}
          >
            {'//Reset'}
          </button>
        </div>
      </form>
    </div>
  );
};

const validate = ({ name, email, phone, message }) => {
  const errors = {};
  if (!name) {
    errors.name = 'Please enter your name';
  }
  if (!email) {
    errors.email = 'Please enter an email address';
  } else if (!email.match(/^\w+\.?\w+@\w+\.\w+\.?\w+?$/gi)) {
    errors.email = 'Please enter a valid email address';
  }
  if (phone && phone.match(/[a-z]/gi)) {
    errors.phone = 'Phone number cannot contain letters';
  }
  if (!message) {
    errors.message = 'Please enter a message';
  }
  return errors;
};

const mapStateToProps = ({ contactForm: { sent, sending, error } }) => ({
  sent,
  sending,
  sendError: error
});

export default connect(
  mapStateToProps,
  { submitContact }
)(reduxForm({ form: 'contact', validate })(ContactForm));
