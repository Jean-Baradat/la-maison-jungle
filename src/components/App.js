import './../styles/App.css';
import Banner from './Banner';
import ShoppingList from './ShoppingList';
import React from 'react';

export default function App() {
  return (
      <React.Fragment>
        <Banner />
        <ShoppingList />
      </React.Fragment>
  );
}
