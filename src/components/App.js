import './../styles/App.css';
import Banner from './Banner';
import ShoppingList from './ShoppingList';
import React from 'react';
// import QuestionForm from './QuestionForm';
import Footer from './Footer'

export default function App() {
  return (
      <React.Fragment>
        <Banner />
        <ShoppingList />
        {/* <QuestionForm /> */}
        <Footer />
      </React.Fragment>
  );
}
