import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import ExpenseList from './components/ExpenseList';
import { FiPlus } from 'react-icons/fi';
import InfoDisplay from './components/InfoDisplay';
import Input from './components/Input'

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

  function addExpense(description: string, amount: string) {
    /**
     * Add expense to the 'expenses' array.
     * @param {string} description    Description of the expense.
     * @param {string} amount         Amount of the expense.
     */
    const newExpense: Expense =  { description: description, amount: parseFloat(amount)}
    setExpenses(prevExpenses => [...prevExpenses, newExpense])
  }

  function updateIncome(amount: string) {
    /**
     * Sets 'income' state to given amount.
     * @param {string} amount    Amount to set income to.
     */

    setIncome(parseFloat(amount));
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
      <Input
        numberOfInputs={1}
        buttonText={<FiPlus />}
        placeholder1={"Income"}
        updateFunction={updateIncome}
      />
      <Input
        numberOfInputs={2}
        buttonText={<FiPlus />}
        placeholder1={"Description"}
        placeholder2={"Amount"}
        updateFunction={addExpense}
      />
      <ExpenseList
        expenses={expenses}
      />
      <InfoDisplay
        balance={getBalance()}
        income={income}
      />
    </div>
  );
}

export default App;
