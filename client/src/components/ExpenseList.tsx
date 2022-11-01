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
          <div key={index}>
            <span>{expense.description}</span>
            <span>{expense.amount}</span>
          </div>
        )
      })
    )
  }

  return (
    <div className="container">
      <div>{renderExpenseList()}</div>
    </div>
  )
}