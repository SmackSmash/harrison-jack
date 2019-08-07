import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import ScrollToTop from './components/scroll-to-top/scroll-to-top.component';
import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';
import HomePage from './pages/home/home-page.component';
import AboutPage from './pages/about/about-page.component';
import ContactPage from './pages/contact/contact-page.component';
import FoodPage from './pages/food/food-page.component';
import './App.styles.scss';

const App = props => {
  return (
    <>
      <Helmet titleTemplate="HarrisonJack Photography :: %s" />
      <BrowserRouter>
        <ScrollToTop>
          <Header />
          <Route path="/" exact component={HomePage} />
          <Route path="/about" exact component={AboutPage} />
          <Route path="/contact" exact component={ContactPage} />
          <Route path="/galleries/food" exact component={FoodPage} />
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </>
  );
};

export default App;