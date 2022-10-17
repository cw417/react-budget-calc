import React from 'react'

export interface Expense {
  description: string;
  amount: number
}

type Props = {
  expenses: Array<Expense>
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
    <div>{renderExpenseList()}</div>
  )
}