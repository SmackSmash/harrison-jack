import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/header/header.component';
import FoodPage from './pages/food/food-page.component';
import './App.styles.scss';

const App = props => {
  return (
    <BrowserRouter>
      <Header />
      <Route path='/galleries/food' exact component={FoodPage} />
    </BrowserRouter>
  );
};

export default App;
