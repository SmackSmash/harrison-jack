import React from 'react';
import ContactForm from '../../components/contact-form/contact-form.component';
import './contact-page.styles.scss';

const ContactPage = props => {
  return (
    <div className="non-image-page">
      <h1>Contact HarrisonJack</h1>
      <div className="contact-container">
        <div>
          <h2>Telephone</h2>
          <p>Christine UK mobile 07831 553321</p>
          <p>Christine French mobile 0033771264365</p>
          <p>Iain UK mobile 07795 615945</p>
          <h2>Email</h2>
          <p>chris@harrisonjack.co.uk</p>
          <p>iain@harrisonjack.co.uk</p>
        </div>
        <div>
          <h2>Send a Message</h2>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
