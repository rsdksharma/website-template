/**
 * Copyright (c) ULOK Technologies. All rights reserved.
 */

import './App.css';
import LeftNav from './components/LeftNav';
import Header from './components/Header';
import MainContent from './components/MainContent';


const  App = () => {
  return (
    <div className="app">
      <div className='app-header'>
        <Header />
      </div>
      <div className='app-content'>
        <div>
          <LeftNav />
        </div>
        <div className='main-content'>
          <MainContent />
        </div>
      </div>
    </div>
  );
}

export default App;
