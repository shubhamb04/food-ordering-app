import React from 'react';
import ReactDOM from 'react-dom/client';

import Header from './components/Header'
import Body from './components/Body'
 





const resObj = [
  {
    resName: 'Dominos',
    cuisine: 'Pizza',
    avgRating: 4.0,
    startingPrice: 5,
  },
  {
    resName: 'Pizza Hut',
    cuisine: 'Pizza',
    avgRating: 2.0,
    startingPrice: 8,
  },
];


const AppComponent = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<AppComponent />);
