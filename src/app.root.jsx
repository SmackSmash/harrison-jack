import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import { AnimatedSwitch } from 'react-router-transition';
import { Helmet } from 'react-helmet';
import ScrollToTop from './components/scroll-to-top/scroll-to-top.component';
import Header from './components/header/header.component';
import HomePage from './pages/home/home-page.component';
import AboutPage from './pages/about/about-page.component';
import GalleriesPage from './pages/galleries/galleries-page.component';
import ContactPage from './pages/contact/contact-page.component';
import GalleryPage from './pages/gallery/gallery-page.component';
import './app.styles.scss';

const App = props => {
  return (
    <BrowserRouter>
      <Helmet titleTemplate="HarrisonJack Photography :: %s" />
      <ScrollToTop>
        <Header />
        <AnimatedSwitch
          atEnter={{ opacity: 0 }}
          atLeave={{ opacity: 0 }}
          atActive={{ opacity: 1 }}
          className="switch-wrapper"
        >
          <Route path="/" exact component={HomePage} />
          <Route path="/about" exact component={AboutPage} />
          <Route path="/galleries" exact component={GalleriesPage} />
          <Route path="/contact" exact component={ContactPage} />
          <Route path="/gallery/:category" exact component={GalleryPage} />
        </AnimatedSwitch>
      </ScrollToTop>
    </BrowserRouter>
  );
};

export default App;
