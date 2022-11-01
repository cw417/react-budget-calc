import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Input from './components/Input';
import ExpenseList from './components/ExpenseList';
import IncomeInput from './components/IncomeInput';
import { FiPlus } from 'react-icons/fi';
import InfoDisplay from './components/InfoDisplay';

export interface Expense {
  description: string;
  amount: number
}

const APP_TITLE = 'Budget Calculator'

function initialExpenses() {
  /**
   * Returns array of expenses to initialize the 'expenses' state.
   * @return {Expnses[]}    Expense array.
   */
  const initialExpense: Expense = { description: "Initial", amount: 0 }
  return [initialExpense]
}

function App() {

  const [ expenses, setExpenses ] = useState<Expense[]>(initialExpenses());
  const [ income, setIncome ] = useState(0);

  function addExpense(expense: Expense) {
    /**
     * Add expense to the 'expenses' array.
     * @param {Expense} expense    Expense to add.
     */
    setExpenses(prevExpenses => [...prevExpenses, expense])
  }

  function updateIncome(amount: number) {
    /**
     * Sets 'income' state to given amount.
     * @param {number} amount    Amount to set income to.
     */
    setIncome(amount);
  }

  function getBalance() {
    /**
     * Gets the current available balance.
     * Balance is: income - total cost of expenses.
     * @return {number}    Available balance.
     */
     return income - (expenses.map(expense => expense.amount)).reduce((a,b) => a + b);
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
      <InfoDisplay
        balance={getBalance()}
      />
    </div>
  );
}

export default App;
