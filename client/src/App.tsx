import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Input from './components/Input';
import { FiPlus } from 'react-icons/fi';

const APP_TITLE = 'Budget Calculator'

function App() {

  const [ expenses, setExpenses ] = useState<Array<number>>([]);

  function addExpense(expense: number) {
    setExpenses(prevExpenses => [...prevExpenses, expense])
  }

  return (
    <div>
      <Header
        title={APP_TITLE}
      />
      <Input 
        updateFunction={addExpense}
        buttonText={<FiPlus />}
      />
    </div>
  );
}

export default App;
