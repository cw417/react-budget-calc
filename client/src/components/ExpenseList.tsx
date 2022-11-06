import React from 'react'
import { Expense } from '../App';

type Props = {
  expenses: Expense[]
}

export default function ExpenseList({ expenses }: Props) {

  function renderExpenseList() {
    return (
      expenses.map((expense, index) => {
        return (
          <div key={index} className='expense'>
            <span className='expense-info'>{expense.description}</span>
            <span className='expense-info'>${expense.amount}</span>
            <span className='expense-buttons'>
              buttons
            </span>
          </div>
        )
      })
    )
  }

  return (
    <div className='m-2'>
      <div>{renderExpenseList()}</div>
    </div>
  )
}