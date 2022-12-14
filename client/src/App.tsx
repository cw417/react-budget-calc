import { useState, useEffect, Dispatch, SetStateAction } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { FiPlus } from 'react-icons/fi';
import './App.css';
import Header from './components/Header';
import ExpenseList from './components/ExpenseList';
import InfoDisplay from './components/InfoDisplay';
import Input from './components/Input'
import Sidebar from './components/Sidebar';
import InputDate from './components/InputDate';

export interface Expense {
  id: string;
  description: string;
  amount: number;
  date: string;
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
  return (storedData) ? storedData.expenses : [];
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

  const [income, setIncome]: [number, Dispatch<SetStateAction<number>>] = useState(initialIncome());
  const [expenses, setExpenses] = useState<Expense[]>(initialExpenses());

  useEffect(() => {
    /**
     * Update local storage if expenses or income change.
     */
    const data = { income: income, expenses: expenses }
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data))
  }, [expenses, income])

  function addExpense(description: string, amount: string, date: string) {
    /**
     * Add expense to the 'expenses' array.
     * @param {string} description    Description of the expense.
     * @param {string} amount         Amount of the expense.
     */
    if (!/^\d+$/.test(amount)) return;
    
    const newExpense: Expense =  { id: uuidv4(), description: description, amount: parseFloat(amount), date: date}
    setExpenses(prevExpenses => [...prevExpenses, newExpense])
  }

  function updateIncome(amount: string) {
    /**
     * Sets 'income' state to given amount.
     * @param {string} amount    Amount to set income to.
     */
    if (!/^\d+$/.test(amount)) return;
    setIncome(parseFloat(amount));
  }

  function updateExpense(id: string, description: string, amount: string) {
    /**
     * Update expense information based on id.
     * @param {string} id             UUID of expense to update.
     * @param {string} description    Description to set.
     * @param {string} amount         Amount to set.
     */
    if (!/^\d+$/.test(amount)) return;
    const newExpense: Expense = { id: id, description: description, amount: parseFloat(amount) };
    let newExpenses: Expense[] = [...expenses];
    const index: number = newExpenses.findIndex(expense => expense.id === id);
    newExpenses[index] = newExpense;
    setExpenses(newExpenses);
  }

  function deleteExpense(id: string) {
    /**
     * Delete an expense from the expenses array based on id.
     * @param {string} id    UUID of the expense to delete.
     */
    setExpenses(prevExpenses => prevExpenses.filter(expense => expense.id !== id));
  }

  return (
    <div className='flex-col'>
      <Header
        title={APP_TITLE}
      />

      <div className='flex-row'>
        <Sidebar
          expenses={expenses}
        />

        <div>
          <div className='main-inputs-container'>
            <div style={{display: (income === 0) ? 'flex' : 'none'}}>
              <Input
                numberOfInputs={1}
                buttonText={<FiPlus />}
                placeholder1={"Income"}
                updateFunction={updateIncome}
              />
            </div>
            <Input
              numberOfInputs={2}
              buttonText={<FiPlus />}
              placeholder1={"Description"}
              placeholder2={"Amount"}
              updateFunction={addExpense}
            />
          </div>
          <InfoDisplay
            balance={(expenses.length === 0) ? income : income - (expenses.map(expense => expense.amount)).reduce((a,b) => a + b)}
            income={income}
            updateIncome={updateIncome}
          />
          <ExpenseList
            expenses={expenses}
            updateExpense={updateExpense}
            deleteExpense={deleteExpense}
          />
        </div>

      </div>

    </div>
  );
}

export default App;
