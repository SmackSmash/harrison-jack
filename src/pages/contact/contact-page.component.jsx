import React from 'react';
import MobileLogo from '../../components/mobile-logo/mobile-logo.component';
import ContactForm from '../../components/contact-form/contact-form.component';
import Footer from '../../components/footer/footer.component';
import './contact-page.styles.scss';

const ContactPage = props => {
  return (
    <>
      <MobileLogo />
      <div className="non-image-page">
        <h1>Get in touch</h1>
        <div className="contact-container">
          <div>
            <div className="text-container">
              <h2>Telephone</h2>
              <p>Christine UK mobile 07831 553321</p>
              <p>Christine French mobile 0033771264365</p>
              <p>Iain UK mobile 07795 615945</p>
            </div>
            <div className="text-container">
              <h2>Email</h2>
              <p>
                <a href="mailto:chris@harrisonjack.co.uk">chris@harrisonjack.co.uk</a>
              </p>
              <p>
                <a href="mailto:iain@harrisonjack.co.uk">iain@harrisonjack.co.uk</a>
              </p>
            </div>
          </div>
          <div>
            <h2>Send a Message</h2>
            <ContactForm />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;
