import React from 'react';
import './footer.styles.scss';

const Footer = props => {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <div className="footer">
        <p className="footer__copyright">Copyright {currentYear} HarrisonJack</p>
      </div>
    </footer>
  );
};

export default Footer;
