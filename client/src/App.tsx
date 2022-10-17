import React from 'react';
import './App.css';
import Header from './components/Header';

const APP_TITLE = 'Budget Calculator'

function App() {
  return (
    <div>
      <Header
        title={APP_TITLE}
      />
    </div>
  );
}

export default App;
