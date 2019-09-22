import React from 'react';
import './footer.styles.scss';

const Footer = props => {
  return (
    <footer>
      <div className="footer">
        <p className="footer__copyright">Copyright {new Date().getFullYear()} HarrisonJack</p>
      </div>
    </footer>
  );
};

export default Footer;
