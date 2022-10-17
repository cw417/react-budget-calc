import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Input from './components/Input';
import ExpenseList, { Expense } from './components/ExpenseList';
import { FiPlus } from 'react-icons/fi';

const APP_TITLE = 'Budget Calculator'

function App() {

  const [ expenses, setExpenses ] = useState<Array<Expense>>([]);

  function addExpense(expense: Expense) {
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
      <ExpenseList
        expenses={expenses}
      />
    </div>
  );
}

export default App;
