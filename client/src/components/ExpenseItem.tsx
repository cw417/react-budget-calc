import React from 'react'
import { Expense } from '../App';
import { FiEdit } from 'react-icons/fi';

type Props = {
  expense: Expense;
  updateExpense: Function;
}

export default function ExpenseItem({ expense, updateExpense }: Props) {
  
  function handleEdit() {
    /**
     * Toggle editing functionality for an expense.
     */
  }

  function handleUpdateExpense(expense: Expense) {
    updateExpense(expense.id)
  }

  return (
    <div>
      <span className='expense-description'>{expense.description}</span>
      <span className='expense-amount'>${expense.amount}</span>
      <span className='expense-buttons'>
        <button
        className='button'
        onClick={() => handleUpdateExpense(expense)}
        ><FiEdit /></button>
      </span>
    </div>
  )
}
