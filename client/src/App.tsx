import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import ExpenseList from './components/ExpenseList';
import { FiPlus } from 'react-icons/fi';
import InfoDisplay from './components/InfoDisplay';
import Input from './components/Input'
import { v4 as uuidv4 } from 'uuid';

export interface Expense {
  id: string;
  description: string;
  amount: number
}

const APP_TITLE = 'Budget Calculator'
const LOCAL_STORAGE_KEY = 'budgetApp.data';

function initialExpenses() {
  /**
   * Returns array of expenses to initialize the 'expenses' state.
   * If local storage has not been set, returns an array with placeholder expense.
   * @return {Expense[]}    Expense array.
   */
  const storedData: { income: number, expenses: Expense[] } | null = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)!);
  return (storedData) ? storedData.expenses : [{ id: uuidv4(), description: "Initial", amount: 0 }];
}

function initialIncome() {
  /**
   * Returns income to initialize the 'income' state.
   * If local storage has not been set, returns 0.
   * @return {number}    Income.
   */
  const storedData: { income: number, expenses: Expense[] } | null = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)!);
  return (storedData) ? storedData.income : 0;
}

function App() {

  const [ income, setIncome ] = useState(initialIncome());
  const [ expenses, setExpenses ] = useState<Expense[]>(initialExpenses);

  useEffect(() => {
    const data = {income: income, expenses: expenses}
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data))
  }, [expenses, income])

  function addExpense(description: string, amount: string) {
    /**
     * Add expense to the 'expenses' array.
     * @param {string} description    Description of the expense.
     * @param {string} amount         Amount of the expense.
     */
    const newExpense: Expense =  { id: uuidv4(), description: description, amount: parseFloat(amount)}
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

  function updateExpense(id: string, description: string, amount: string) {
    /**
     * Update expense information based on id.
     * @param {string} id             UUID of expense to update.
     * @param {string} description    Description to set.
     * @param {string} amount         Amount to set.
     */
    const newExpense: Expense = { id: id, description: description, amount: parseFloat(amount) };
    let newExpenses: Expense[] = [...expenses];
    const index: number = newExpenses.findIndex(expense => expense.id === id);
    newExpenses[index] = newExpense;
    setExpenses(newExpenses);
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
      <InfoDisplay
        balance={getBalance()}
        income={income}
      />
      <ExpenseList
        expenses={expenses}
        updateExpense={updateExpense}
      />
    </div>
  );
}

export default App;
