import React, { useState, useRef, useEffect, Dispatch, SetStateAction } from 'react'
import { Expense } from '../App';
import { FiCheck, FiTrash } from 'react-icons/fi';

type Props = {
  expense: Expense;
  updateExpense: Function;
  deleteExpense: Function;
}

export default function ExpenseItem({ expense, updateExpense, deleteExpense }: Props) {

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
      amountRef.current!.focus();
    }
  }, [editing, expense.description, expense.amount])

  function handleUpdateExpense() {
    /**
     * Update the current expense if editing is 'true'.
     */
    const description = descriptionRef.current!.value;
    const amount = amountRef.current!.value;
    if (editing) updateExpense(expense.id, description, amount);
    toggleEditing();
  }

  function handleDeleteExpense() {
    /**
     * Delete the current expense.
     */
    deleteExpense(expense.id);
  }

  return (
    <div className='expense-container'>
      <div className='expense' style={{display: editing ? 'none' : 'flex'}}>
        <span 
          className='expense-description'
          onClick={toggleEditing}
        >{expense.description}</span>
        <span 
          className='expense-amount'
          onClick={toggleEditing}
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
      <div className='expense-edit-buttons' style={{display: editing ? 'flex' : 'none' }}>
        <button
          className={`button edit-button`}
          onClick={handleUpdateExpense}
        ><FiCheck /></button>
        <button
          className={`button edit-button ${editing ? 'ml-1' : '' }`}
          onClick={handleDeleteExpense}
        ><FiTrash /></button>
      </div>
    </div>
  )
}
