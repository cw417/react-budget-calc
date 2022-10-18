import React, { useRef } from 'react'
import { FiPlus } from 'react-icons/fi';

type Props = {
  updateIncome: (amount: number) => void,
  income: number
}

export default function IncomeInput({ income, updateIncome }: Props) {

  const incomeRef = useRef<HTMLInputElement | null>(null);

  function handleUpdateIncome() {
    if (incomeRef === null || incomeRef?.current?.value === '') return;
    const incomeString = incomeRef?.current?.value;
    const income = parseFloat(incomeString!);
    updateIncome(income);
  }

  return (
    <div>
      <div>{income}</div>
      <input type='text' ref={incomeRef}></input>
      <button onClick={handleUpdateIncome}><FiPlus /></button>
    </div>
  )
}