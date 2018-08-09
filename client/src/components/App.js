import React from 'react';
import Header from '../containers/Header';
import '../styles/App.css';

const App = (props) => {
  return (
    <div>
      <Header />
        <div className="container">
          { props.children }
        </div>
    </div>
  )
}

export default App;
