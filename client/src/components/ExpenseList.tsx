import React from 'react'
import { Expense } from '../App';
import { FiEdit } from 'react-icons/fi';

type Props = {
  expenses: Expense[]
}

export default function ExpenseList({ expenses }: Props) {

  function renderExpenseList() {
    return (
      expenses.map((expense, index) => {
        return (
          <div key={index} className='expense'>
            <span className='expense-description'>{expense.description}</span>
            <span className='expense-amount'>${expense.amount}</span>
            <span className='expense-buttons'>
              <button className='button'><FiEdit /></button>
            </span>
          </div>
        )
      })
    )
  }

  return (
    <div className='expense-list container m-2'>
      <div>{renderExpenseList()}</div>
    </div>
  )
}