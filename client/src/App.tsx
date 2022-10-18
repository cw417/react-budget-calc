import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Input from './components/Input';
import ExpenseList, { Expense } from './components/ExpenseList';
import IncomeInput from './components/IncomeInput';
import { FiPlus } from 'react-icons/fi';

const APP_TITLE = 'Budget Calculator'

function App() {

  const [ expenses, setExpenses ] = useState<Expense[]>([]);
  const [ income, setIncome ] = useState(0);

  function addExpense(expense: Expense) {
    setExpenses(prevExpenses => [...prevExpenses, expense])
  }

  function updateIncome(amount: number) {
    setIncome(amount);
  }

  return (
    <div>
      <Header
        title={APP_TITLE}
      />
      <IncomeInput 
        income={income}
        updateIncome={updateIncome}
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
