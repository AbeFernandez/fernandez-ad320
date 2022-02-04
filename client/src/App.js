import './App.css';
import Topbar from './components/Topbar/Topbar';
import CardNavegation from './components/CardNavegation/CardNavegation';
import React from 'react';
import FlashCard from './components/FlashCard/FlashCard';

function App() {
  return (
    <React.Fragment>
      <Topbar/>
      <div className='container'>
        <CardNavegation/>
        <FlashCard/>
      </div>
    </React.Fragment>
  );
}

export default App;
