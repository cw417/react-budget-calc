import React from 'react'
import { Expense } from '../App';

type Props = {
  expenses: Expense[];
}

export default function ({ expenses }: Props) {
  
  function getMonths() {
    expenses.map()
  }

  return (
      <div className='sidebar container'>
        Sidebar
      </div>
  )
}