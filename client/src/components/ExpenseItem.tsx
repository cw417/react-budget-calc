import React, { useState, useRef, useEffect, Dispatch, SetStateAction } from 'react'
import { Expense } from '../App';
import { FiCheck } from 'react-icons/fi';

type Props = {
  expense: Expense;
  updateExpense: Function;
}

export default function ExpenseItem({ expense, updateExpense }: Props) {

  const [editing, setEditing]: [boolean, Dispatch<SetStateAction<boolean>>] = useState(false);
  const descriptionRef = useRef<HTMLInputElement | null>(null);
  const amountRef = useRef<HTMLInputElement | null>(null);
  
  function toggleEditing() {
    /**
     * Toggle editing functionality for an expense.
     */
    setEditing(prevEditing => !prevEditing);
  }

  useEffect(() => {
    if (editing) {
      descriptionRef.current!.value = expense.description;
      amountRef.current!.value = expense.amount.toString();
    }
  }, [editing, expense.description, expense.amount])

  function handleUpdateExpense() {
    const description = descriptionRef.current!.value;
    const amount = amountRef.current!.value;
    if (editing) updateExpense(expense.id, description, amount);
    toggleEditing();
  }

  return (
    <div className='expense-container flex-row'>
      <div className='expense' style={{display: editing ? 'none' : 'flex'}}>
        <span 
          className='expense-description'
          onClick={handleUpdateExpense}
        >{expense.description}</span>
        <span 
          className='expense-amount'
          onClick={handleUpdateExpense}
        >${expense.amount}</span>
      </div>
      <div className='expense--editing' style={{display: editing ? 'flex' : 'none'}}>
        <input
          className='expense-description-input background-same'
          ref={descriptionRef}
        />
        <input
          className='expense-amount-input ml-1 center background-same'
          ref={amountRef}
        />
      </div>
      <span className='expense-edit'>
        <button
          className={`button expense-edit--button ${editing ? 'ml-1' : '' }`}
          style={{opacity: editing ? '1' : '0'}}
          onClick={handleUpdateExpense}
        ><FiCheck /></button>
      </span>
    </div>
  )
}
