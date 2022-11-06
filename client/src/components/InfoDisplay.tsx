import React from 'react'

type Props = {
  balance: number,
  income: number
}

export default function InfoDisplay({ balance, income}: Props) {
  return (
    <div className='container'>
      <div>
        <label>Income:</label>
        <span>{income}</span>
      </div>
      <div>
        <label>Balance:</label>
        <span>{balance}</span>
      </div>
    </div>
  )
}